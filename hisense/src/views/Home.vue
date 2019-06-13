<template>
  <div
    class="css-1dbjc4n r-13awgt0"
    style="background-color: rgb(255, 255, 255); padding-top: 44px;"
  >
    <Header/>
    <Menu/>
    <List/>
  </div>
</template>
<script lang="ts">
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import List from "@/components/List.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Header,
    Menu,
    List
  },
  created() {
    this.$store.state.isShowFooter = true;
  }
});
</script>

