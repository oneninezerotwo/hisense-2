<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Footer from '@/components/Footer.vue';
import Vue from 'vue';
export default Vue.extend({
  components: {
    Footer,
  },
   mounted() {
    window.addEventListener('scroll', this.scroll, true);
  },
  methods: {
    scroll() {
    this.$store.state.isShowHeader = true;
    this.$store.state.isShowFooter = true;
    },
    destroyed() {
      window.onscroll = null;
      window.removeEventListener('scroll', this.scroll, false);
    },
  },
});
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,
body {
  background-color: #f5f5f5;
  font-size: 14px;
}
</style>
