<template>
  <div>
    <div  v-for="{cathegory, content} in productos" :key="cathegory">
      <h1 class="text-2xl font-medium"> {{cathegory}} </h1>
      <div class="grid md:grid-cols-2 gap-1 my-4">
        <Producto v-for="product in content" v-bind="product" :key="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Producto from "./Producto.vue"
export default {
  data() {
    return {
      productos: [
        {
          cathegory: "Paneles solares",
          content: [
            {
              name: "LNMH144",
              pricing: "0.22$/Wp",
              image: require("@/assets/LNMH144.jpg"),
              info: {
                tipo: "Monocristalino",
                potencia: "435-460Wp",
                region: "china"
              }},
            {
              name: "GPNE-S144",
              pricing: "0.2$/Wp",
              info: {
                tipo: "Monocristalino",
                potencia: "425-445Wp",
                region: "china"
              },
              image: require("@/assets/GPNE-S144.jpg")
            },
            {
              name: "ZPM435-455",
              pricing: "0.25$/Wp",
              image: require("@/assets/Series:ZPM435-455.png"),
              info: {
                tipo: "Monocristalino",
                potencia: "320-400Wp",
                region: "china"
              }
            },
            {
              name: "PERC",
              pricing: "0.25$/Wp",
              image: require("@/assets/Series:PERC_MONO_320.jpg"),
              info: {
                tipo: "PERC",
                potencia: "350-375Wp",
                region: "china"
              }
            },
          ]
        },
        {
          cathegory: "Inversores fotovoltaicos",
          content: [
            {
              name:"Teca Lithium Series",
              pricing: "200$",
              image: require("@/assets/Series:Teca_Lithium_Series.png")
            },
            {
              name:"NPower Series",
              pricing: "82,2$",
              image: require("@/assets/Series:N_Power_Series.jpg")
            },
          ]
        },
        {
          cathegory: "Reguladores de carga",
          content: [
            {
              name: "Cedro+ICC-4024150",
              pricing: "130$",
              image: require("@/assets/Series:Cedro+ICC-4024150+.png")
            },
            {
              name: "SR-ML4860",
              pricing: "224$",
              image: require("@/assets/Series:SR-ML4860.jpg")
            },
          ]
        }
      ]
    }
  },
  components: {Producto}
}
</script>


