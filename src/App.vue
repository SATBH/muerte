<template>
  <NavBar/>
  <div class="container w-full max-w-3xl mx-auto my-8 px-8">
    <Valores/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
//import Mision from './components/Mision.vue'
import Valores from './components/Valores.vue'

export default {
  name: 'App',
  components: {
    NavBar,
   // Mision,
    Valores
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
