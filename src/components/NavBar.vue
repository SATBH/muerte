<template>
  <nav class="shadow-xl sticky top-0 w-full text-white border-b-2 border-gray-200 font-medium flex justify-center gap-4 p-2 z-10">
    <router-link class="link block p-2 rounded transition-colors"
			v-for="(link, section) in sections" :key="section" :to="link">
      {{section}}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sections: {
        "Quienes Somos": "/quienes_somos",
        "Nuestra Mision": "/mision",
        "Valores": "/valores",
      }
    }
  }
}
</script>

<style scoped>
nav {
	background-color: #FF7800;
}
.link:hover {
	color: #FFBC97;
}
</style>
