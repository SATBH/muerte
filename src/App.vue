<template>
  <NavBar/>
  <div class="container w-full max-w-3xl mx-auto my-8 px-8">
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
}
</style>
