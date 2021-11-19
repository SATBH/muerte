<template>
  <div class="text-justify space-y-4">
    <h1 class="text-xl font-bold">Nuestra Misión</h1>
    <p>
      El calentamiento global es uno de los problemas mas grandes a los que 
      nos enfrentamos actualmente, a pesar de no ser un problema inminente, 
      el continuo deterioro de la atmosfera a causa de los combustibles fosiles
      terminara por causar inundaciones, sequias y todo tipo de problemas
      en unas pocas decadas.
    </p>
    <GraficoCalentamientoGlobal/>
    <p>
      Este grafico contiene informacion sobre la temperatura promedio del mundo
      a lo largo de las correspondientes decadas. Como podemos ver con relacion
      al rango correspondido entre 1881-1890, la temperatura ha aumentado casi
      un grado centrigrado. Una cifra alarmante, pues significa que estamos
      peligrosamente cerca de el punto de no retorno, es decir, el punto en que 
      los dannos causados hacia el clima seran irreversibles.
    </p>
    <p>
      Este problema, aun no es irreversible. Si podemos mover la 
      sociedad a usar energias mas verdes, seria posible detener este fenomeno,
      o al menos ralentizarlo. Pero esto no es algo facil, las grandes fuentes
      de energia renovable normalmente requieren de grandes estudios e
      inversiones. Por ejemplo, los estudios de actividad volcanica que deben
      hacerse para poder hacer uso de la energia geotermica.  Ademas, la
      rentabilidad de la produccion podria no superar a la de los combustibles
      fosiles.
    </p>
    <p>
      Tomando esto en cuenta, podemos ver que hacer el cambio, sera algo 
      dificil y requerira grandes sumas de dinero. Pues en su mayoria, estos
      son proyectos a gran escala, ya sean energia eolica, geotermica, o
      hidroelectrica. Por esto, hemos decidido tomar una iniciativa.
    </p>
    <p>
      La produccion de energias renovables a 'pequena escala'. Es decir
      proyectos cuyo alcance no es masivo como para poder producir energia para
      toda una ciudad. Y dentro de este campo, tenemos una de las mayores
      fuentes de energia; El sol.
    </p>
    <figure class="py-2 text-center space-y-2">
      <img src="@/assets/sol.png" class="floating mx-auto max-h-72"/>
      <figcaption class="text-gray-500 text-sm italic">
        [FALTA] Descripcion de la imagen
      </figcaption>
    </figure>

    <p>
      Por esto,
      hemos decidido crear una empresa de instalacion, venta y mantenimiento de
      paneles solares. Con el fin de hacer estos mas accesibles al publico
      general, de una forma relativamente barata.
    </p>
    <p>
      Es decir, nuestra mision es 
      brindar servicios tales como venta, instalación y mantenimiento de
      paneles solares, proponer soluciones por medio de energías renovables y
      generando asi proyectos basados en las necesidades de cada individuo u
      organización, enfocándonos a incrementar la eficiencia y ahorro en la
      utilización de la energía renovables. 
    </p>
    <br>
  </div>
</template>

<script>
import GraficoCalentamientoGlobal from './auxiliar/calentamiento_global.vue'
export default {
  data() {return {}},
  components: {GraficoCalentamientoGlobal}
}
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-30px);
  }
  100% {
    transform: translatey(0px);
  }
}

.floating {
  animation: float 4s ease-in-out infinite;
}

</style>
