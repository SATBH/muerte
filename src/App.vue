<template>
  <NavBar/>
  <router-view class="container max-w-4xl mx-auto my-8 px-4 sm:px-8" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    <Footer/>
  </router-view>
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

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
