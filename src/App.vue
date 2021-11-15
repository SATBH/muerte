<template>
  <NavBar/>
	<main class="container max-w-4xl mx-auto my-8 px-4 sm:px-8">
		<router-view/>
	</main>
  <Footer/>
</template>



<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {NavBar, Footer},
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
