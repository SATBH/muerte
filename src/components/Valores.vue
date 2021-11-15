<template>
  <Valor v-for="valor in valores"
         :title="valor.title"
         :text="valor.text"
         :key="valor"/>
</template>

<script> 
  import Valor from './Valor.vue'
  import valores from './valores.js'
  export default {
    components: {Valor},
    data() {
      return {
        valores
      }
    }
  }
</script>
