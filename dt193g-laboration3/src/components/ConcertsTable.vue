<script setup>
    // Tar emot konserterna från föräldern
    defineProps({
    concerts: Array
    })

    // Skickar delete-event till föräldern
    const emit = defineEmits(['deleteConcert'])

    const remove = (id) => {
    emit('deleteConcert', id)
    }
</script>
  
<template>
        <div class="conserts">
            <p>Nedan visas en tabell på olika konserter jag varit på:</p>
            <table>
                <thead>
                    <tr>
                        <th>Artist/ Grupp</th>
                        <th>Sett</th>
                        <th>Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="concert in concerts" :key="concert.id">
                        <td>{{ concert.artist }}</td>
                        <td>{{ concert.seen == 1 ? 'Ja' : 'Nej' }}</td>
                        <td class="td-button">
                            <button @click="remove(concert.id)">Ta bort</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>
  
<style scoped>

    /* Tabell */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 2em;
    }
    th {
        border: 1px solid rgb(228, 255, 244);
        padding: 0.5rem;
        text-align: left;
        background-color: rgb(161, 221, 197);
        font-weight: bold;
    }
    td {
        border: 1px solid rgb(161, 221, 197);
        padding: 0.5rem;
        text-align: left;
        background-color: rgb(255, 255, 255);
    }
    button {
        padding: 0.3rem 0.6rem;
        background-color: rgb(222, 80, 80);
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .td-button {
        text-align: center;
    }
    button:hover {
        background-color: rgb(200, 50, 50);
    }
</style>