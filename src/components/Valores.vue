<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<Valor v-for="valor in valores"
			:title="valor.title"
			:text="valor.text"
			:key="valor"/>
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
