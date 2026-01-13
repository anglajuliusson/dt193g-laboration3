<script setup>
    import Banner from '../components/Banner.vue' // Hämta banner bilden
</script>

<template>
    <main>
      <Banner /> <!-- Inkludera banner-bilden-->
      <div class="text">
        <h2>Mitt fritidsintresse</h2>
        <p>
            Mitt stora fritidsintresse är att gå på konserter och uppleva live-musik på riktigt nära håll. 
            Jag älskar konserter eftersom det finns en speciell energi i rummet när publiken och musikerna möts 
            – något som inte går att få genom en skärm eller en inspelning. Musiken känns levande, 
            och varje konsert är ett unikt tillfälle som skapar minnen för livet. 
            Det är även ett sätt för mig att upptäcka nya artister, träffa likasinnade musikälskare och bara njuta av stunden.
            På denna sida kan du ta del av olika konserter jag varit på.
        </p>
      </div>
    </main>
</template>
  
<style scoped>
    main {
        justify-content: center;
        align-items: center;
    }
    .text {
        padding: 2em;
        margin: 0 auto;
        margin-top: 1em;
        max-width:500px;
    }
    h2 {
        color: rgb(56, 142, 107);
    }
    p {
        margin-top: 1em;
        margin-bottom: 3em;
        line-height: 1.6;
    }
</style> 