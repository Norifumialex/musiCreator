<template>
  <div id="app">
    <NavBar/>
    <Track/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Track from "./components/Track.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Track
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
