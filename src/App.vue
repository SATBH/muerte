<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  <NavBar/>
  <div style="padding: 20px;">
    <Mision/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Mision from './components/Mision.vue'

export default {
  name: 'App',
  components: {
    NavBar, Mision
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

body {
  margin: 0;
  background-color: #EADEDE;
  display:flex;
  flex-direction:column;
  height:100vh;
}
</style>
