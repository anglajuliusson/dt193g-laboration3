<script setup>
    import { ref, onMounted } from 'vue'
    import ConcertsTable from '../components/ConcertsTable.vue'
    import ConcertsForm from '../components/ConcertsForm.vue'

    // Variabel för konserterna
    const concerts = ref([])

    // Funktion för att hämta data från backend
    const fetchConcerts = async () => {
    try {
        const response = await fetch('http://localhost:3000/conserts') // URL för att hämta alla konserter
        if (!response.ok) throw new Error('Kunde inte hämta konserter') // Felmeddelande
        concerts.value = await response.json()
    } catch (error) {
        console.error(error)
    }
    }

    // Ta bort konsert
    const deleteConcert = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/conserts/${id}`, { // Radera specifik konsert utifrån id
        method: 'DELETE'
        })

        if (!response.ok) {
        throw new Error('Kunde inte ta bort konsert') // Felmeddelande
        }

        // Uppdatera listan efter borttagning
        concerts.value = concerts.value.filter(concert => concert.id !== id)
    } catch (error) {
        console.error(error)
    }
    }

    // Lägg till ny konsert, data kommer från ConcertsForm via emit
    const addConcert = async (newConcert) => {
    try {
        const response = await fetch('http://localhost:3000/conserts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(newConcert)
        })

        if (!response.ok) {
            throw new Error('Kunde inte lägga till konsert') // Felmeddelande
        }

        // Hämta om listan efter POST
        await fetchConcerts()

    } catch (error) {
        console.error(error)
    }
    }

    // Kör funktionen när komponenten mountas
    onMounted(fetchConcerts)
</script>
  
<template>
    <main>
        <h2>Konserter</h2>
        <!-- Tabell-komponent -->
        <ConcertsTable 
            :concerts="concerts" 
            @deleteConcert="deleteConcert" />
        <!-- Formulär-komponent -->
        <ConcertsForm @addConcert="addConcert" />
    </main>
</template>
  
<style scoped>
    main {
        padding: 2em;
        margin: 0 auto;
        margin-top: 1em;
        max-width:500px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    h2 {
        color: rgb(56, 142, 107);
    }
    p {
        margin-top: 1em;
        margin-bottom: 1em;
        line-height: 1.6;
    }
</style>