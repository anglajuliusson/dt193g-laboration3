<script setup>
    import { ref } from 'vue'

    // Tar emot initial data för formuläret
    const newConcert = ref({
        artist: '',
        seen: false
    })

    // Emittar ett event till föräldern när en ny konsert ska läggas till
    const emit = defineEmits(['addConcert'])

    // Funktion som körs när formuläret skickas
    const submitForm = () => {
        if (!newConcert.value.artist) return // enkel validering
        emit('addConcert', { ...newConcert.value }) // skicka data till föräldern
        newConcert.value.artist = '' // nollställ formuläret
        newConcert.value.seen = false
    }
</script>
  
<template>
    <div class="new-consert">
        <p>Fyll i formuläret nedan för att lägga till ny konsert:</p>
        <form @submit.prevent="submitForm">
            <label>Artist eller grupp:</label>
            <input type="text" placeholder="Artist eller grupp" v-model="newConcert.artist" required />
            <div class="checkbox-row">
                <label for="seen">Har sett:</label>
                <input type="checkbox" id="seen" v-model="newConcert.seen"/>
            </div>
            <button type="submit">Lägg till</button>
        </form>
    </div>
</template>
  
<style scoped>

    /* Formulär */
    .new-consert form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
        margin: 0 auto;
        max-width: 400px;
    }
    .new-consert input[type="text"] {
        padding: 0.5rem;
        width: 100%;
        box-sizing: border-box;
    }
    .new-consert input[type="checkbox"] {
        margin-left: 0.5rem;
    }
    .checkbox-row {
        display: flex;
        margin-top: 1em;
    }
    .new-consert button {
        padding: 0.5rem 1rem;
        background-color: rgb(56, 142, 107);
        color: white;
        border: none;
        cursor: pointer;
        align-self: center;
        border-radius: 5px;
    }
    .new-consert button:hover {
        background-color: rgb(46, 120, 90);
    }
</style>