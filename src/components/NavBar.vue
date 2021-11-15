<template>
  <div class="nav-bar">
    <a v-for="(link, section) in sections" :href="link" :key="section">
      {{section}}
    </a>
  </div>
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

<style scoped lang="css">
  .nav-bar {
    width: 100vw;
    height: 10%;
    background-color: #B85252;
    display: flex;
    align-items:center;
    justify-content: space-around;
    position: sticky;
    top: 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media only screen and (min-width: 900px) {
    .nav-bar {
      /* background-color: lightblue; */
      height: 4vh;
    }
  }
  h3 {
    height: 100%;
    margin: auto;
  }
  a {
    background-color: #B85252;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    color: #EADEDE; 
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: #F58840;
  }
</style>
