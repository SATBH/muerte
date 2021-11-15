<template>
  <nav class="w-full bg-white border-b-2 border-gray-300 font-medium flex justify-center gap-4 p-2">
    <a class="block p-2 rounded border border-white hover:border-gray-300 transition-colors"
			v-for="(link, section) in sections" :key="section" :href="link">
      {{section}}
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sections: {
        "Quienes Somos": "",
        "Nuestra Mision": "",
        "Valores": ""
      }
    }
  }
}
</script>

