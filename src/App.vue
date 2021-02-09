<template>
  <div id="app">
    <header-top></header-top>
    <b-container> </b-container>
    <router-view />
  </div>
</template>


<script>
import HeaderTop from "./components/headerTop.vue";
export default {
  components: {
    HeaderTop,
  },
};
</script>
    HeaderTop
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
