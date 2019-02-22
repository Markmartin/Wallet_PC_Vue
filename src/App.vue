<template>
  <div id="app">
    <router-view/>
    <Guide/>
    <navigation/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Guide from "./components/Guide.vue";

export default {
  components: {
    Navigation,
    Guide
  }
};
</script>


<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

html,
body {
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
}
</style>
