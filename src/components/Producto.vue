<template>
  <div class="p-1 justify-around hoverbig bg-white transform flex flex-col items-center border-2 hover:scale-105">
    <img class="w-44" :src="image"/>
    <div>
      <div class="text-center"> {{name}} </div>
      <table class="gap-x-1 table-auto">
        <tr v-for="(value, key) in info" :key="key">
          <td style="color:#ff7800"> {{key}} </td>
          <td class="text-right"> {{value}} </td>
        </tr>
      </table>
      <div class="text-center"> {{pricing}} </div>
    </div>
  </div>
</template>

<script> 
export default {
  props: ['name', 'pricing', 'image', 'info']
}
</script>

<style>
.hoverbig:hover {
  z-index: 1;
}
</style>
