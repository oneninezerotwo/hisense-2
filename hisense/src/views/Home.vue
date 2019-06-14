<template>
  <div style="margin-bottom:50px;">
    <Header/>
    <Menu/>
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Header,
    Menu
  },
  created() {
    this.$store.state.isShowFooter = true;
  }
});
</script>

