<template>
	<div class="valores grid grid-cols-1 md:grid-cols-2 gap-4">
    <Valor v-for="(valor, index) in valores"
           v-bind="valor"
           :number="index"
           :key="valor.title"/>
	</div>
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
