<template>
  <NavBar/>
	<main class="container mx-auto my-8 max-w-4xl">
		<router-view/>
	</main>
</template>



<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {NavBar},
  data(){
    return {}
  }
}
</script>
<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
