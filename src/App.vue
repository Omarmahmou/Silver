<template>
  <div id="app">
    <HeaderApp />
    <router-view />
    <FooterApp />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  overflow-x: clip;
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import FooterApp from "./components/FooterApp.vue";
import HeaderApp from "./components/HeaderApp.vue";

export default {
  components: {
    HeaderApp,
    FooterApp,
  },
  data() {
    return {};
  },
  mounted() {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      offset: 120,
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Konnect", sans-serif;
  background: #fafaf8;
  margin: 0;
}
</style>
