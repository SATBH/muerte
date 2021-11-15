<template>
  <NavBar/>
	<main class="container max-w-4xl mx-auto my-8 px-4 sm:px-8">
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
