<script setup></script>
  
<template>
    <header>
        <h1>Mitt fritidsintresse</h1>
        <div class="menu">
            <nav id="main-nav">
                <ul>
                    <li><router-link to="/">Start</router-link></li>
                    <li><router-link to="/concerts">Konserter</router-link></li>
                    <li><router-link to="/info">Mina tankar</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
  
<style scoped>
    header {
        background-color: rgb(161, 221, 197);
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .menu {
        width: 100%;
    }
    .logo {
        max-width: 100px;
        width: 100%;
    }
    #main-nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 2rem;
        justify-content: center;
        font-size: 20px;
    }
    #main-nav ul li a {
        text-decoration: none;
        color: black;
    }
  /* Desktop */
  @media (min-width: 768px) {
    header {
      flex-direction: row;
      align-items: center;
    }
    .menu {
      margin-left: auto;
      width: auto;
    }
    #main-nav ul {
        justify-content: flex-end;
        gap: 2rem;
        margin-right: 2em;
    }
  }
</style>