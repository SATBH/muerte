<template>
  <nav class="sticky top-0 w-full bg-white border-b-2 border-gray-200 font-medium flex justify-center gap-4 p-2 z-10">
    <router-link class="block p-2 rounded hover:text-blue-500 transition-colors"
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

