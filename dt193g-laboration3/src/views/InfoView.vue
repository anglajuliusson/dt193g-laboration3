<script setup></script>
  
<template>
    <main>
        <h2>Mina tankar om Vue.js</h2>
        <p>Att arbeta med Vue.js har varit både lärorikt och utmanande. När jag väl kom igång upplevde 
            jag att ramverket är väldigt lätt att förstå, särskilt tack vare den tydliga strukturen med 
            komponenter. Jag gillar även hur HTML, JavaScript och CSS samlas i samma .vue-filer så man 
            slipper hoppa mellan flera olika. Det gjorde det enklare att få en bra överblick över applikationen.</P>
        <p>Det som har gått bra är framför allt att bygga upp grunderna för en single page application med 
            Vue Router. Att dela upp sidan i olika vyer och komponenter, som header, footer och innehållssidor, 
            kändes logiskt och strukturerat. Även kopplingen mellan frontend och backend via fetch-anrop fungerade 
            bra. Från början hade jag lite problem med att få det att fungera men det visade sig att jag saknade 
            cors i backend så att min frontend-applikation kunde ta del av innehållet i backend. Det var enkelt att 
            lösa och efter det så har det fungerat som de ska.</p>
        <p>Att installera Vue.js gick smidigt genom att använda Node.js och kommandot npm create vue@latest. 
            Installationsguiden på Vue.js webbplats var tydlig och hjälpte till att snabbt skapa ett fungerande projekt 
            med Vite som utvecklingsmiljö. Något jag missade från början vid uppstart var att lägga till funktionalitet 
            för routing vilket gav problem när jag skulle skapa en fungerande nav-meny. Därför var jag tvungen att 
            installera det paketet separat. Det hade kunnat spara lite tid i utvecklandet då jag behövde felsöka men det 
            gick ändå relativt fort.</p>
        <p class="last-p">Sammanfattningsvis har arbetet med Vue.js gett en bra introduktion till moderna JavaScript-ramverk. Trots vissa 
            utmaningar känns Vue som ett kraftfullt och flexibelt verktyg, och det är definitivt något jag kan tänka mig 
            att arbeta mer med i framtida projekt. Från början när man såg hur många filer som behövdes kändes det lite 
            överväldigande, men så fort jag kom igång med projektet så insåg jag snabbt att allt var logiskt uppbyggt 
            och det var inte svårt att förstå. Jag har fått en positiv bild av ramverket!</p>
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
        text-align: left;
    }
    .last-p {
        margin-bottom: 3em;
    }
</style>