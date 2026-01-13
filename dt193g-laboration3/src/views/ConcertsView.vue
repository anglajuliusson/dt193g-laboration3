<script setup></script>
  
<template>
    <main>
        <h2>Konserter</h2>
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

                </tbody>
            </table>
        </div>
        <div class="new-consert">
            <p>Fyll i formuläret nedan för att lägga till ny konsert:</p>
            <form>
                <label>Artist eller grupp:</label>
                <input type="text" placeholder="Artist eller grupp" />
                <div class="checkbox-row">
                    <label for="seen">Har sett:</label>
                    <input type="checkbox" id="seen" />
                </div>
                <button type="submit">Lägg till</button>
            </form>
        </div>
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
    button {
        padding: 0.3rem 0.6rem;
        background-color: rgb(222, 80, 80);
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(200, 50, 50);
    }

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