<template>
  <div class="border-t-2 border-b-2 border-black px-2 py-4">
    <h1 class="text-center text-md font-bold"> Temperatura promedio de cada decada </h1>
    <div class="overflow-auto flex gap-2 items-end">
      <div v-for="[year, value] in yearly_temp" :key="year" class="divide-y flex-1 text-xs text-center">
        {{value}}
        <div v-bind:style="`height: ${(value - 13) * 100}px; background-size: auto 147px;`"
             v-bind:class="`grows bg-gradient-to-t from-yellow-300 to-red-500 bg-bottom`"/>
        {{year}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        "yearly_temp": [
          ["1881-1890", 13.68],
          ["1891-1900", 13.67],
          ["1901-1910", 13.59],
          ["1911-1920", 13.64],
          ["1921-1930", 13.76],
          ["1931-1940", 13.89],
          ["1941-1950", 13.95],
          ["1951-1960", 13.92],
          ["1961-1970", 13.93],
          ["1971-1980", 13.95],
          ["1981-1990", 14.12],
          ["1991-2000", 14.26],
          ["2001-2010", 14.47],
        ]
      }
    }
  }
</script>

<style scoped>

.grows {
	animation: growth 2s;
}

.text-xxs {
  font-size:0.5rem;
}

@keyframes growth {
	from {
		height: 0;
	}
}
</style>
