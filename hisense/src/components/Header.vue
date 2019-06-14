<template>
  <div v-if="isShowHeader"
    class="css-1dbjc4n r-1d2f490 r-u8s1d r-zchlnj r-ipm5af"
    style="z-index:10; position:fixed;top:0;left:0;right:0; align-items: center; background-color: rgb(254, 254, 254); border-bottom: 0px solid rgb(204, 204, 204);
     border-top-color: rgb(204, 204, 204); border-right-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); 
     display:flex; flex-direction: row; height: 44px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
  >
    <div
      class="css-1dbjc4n"
      style="align-items: center; flex-direction: row; width: 80px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
    >
      <div
        data-focusable="true"
        tabindex="0"
        class="css-1dbjc4n r-1niwhzg r-1loqt21 r-1otgn73 r-lrvibr"
        style="align-items: center; justify-content: center; padding-right: 6px; padding-left: 6px; -webkit-box-align: center; -webkit-box-pack: center;"
      >
        <div class="css-1dbjc4n">
          <div
            dir="auto"
            class="css-76zvg2 css-bfa6kz"
            style="margin-left:10px; align-items: center; color: rgb(51, 51, 51); font-family: iconfont; font-size: 20px; font-style: normal; font-weight: normal; min-height: 20px; min-width: 20px; text-align: left; -webkit-box-align: center;"
          ></div>
        </div>
      </div>
    </div>
    <div class="css-1dbjc4n r-13awgt0">
      <div
        class="css-1dbjc4n r-13awgt0"
        style="text-align: -webkit-center; align-items: center; flex-direction: row; justify-content: center; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: center;"
      >
        <div class="css-1dbjc4n r-1mlwlqe r-1udh08x r-1lgpqti" style="height: 20px; width: 127px;">
          <img style="height: 20px; width: 127px; background-size:cover;"
            src="//m.assets.shop.hisense.com/assets/files/hisense.46ef582304ee74ce.png"
            class="css-9pa8cd"
          >
        </div>
      </div>
    </div>
    <div
      class="css-1dbjc4n"
      style="align-items: center; flex-direction: row; justify-content: flex-end; width: 80px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: end;"
    >
      <div
        data-focusable="true"
        tabindex="0"
        class="css-1dbjc4n r-1niwhzg r-1loqt21 r-1otgn73 r-lrvibr"
      >
        <div
          class="css-1dbjc4n"
          style="align-items: center; justify-content: center; padding-right: 6px; padding-left: 6px; -webkit-box-align: center; -webkit-box-pack: center;"
        >
          <div class="css-1dbjc4n">
            <div
              dir="auto"
              class="css-76zvg2 css-bfa6kz"
              style="margin-right:10px; align-items: center; color: rgb(51, 51, 51); font-family: iconfont; font-size: 20px; font-style: normal; font-weight: normal; min-height: 20px; min-width: 20px; text-align: right; -webkit-box-align: center;"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    // 从仓库获取值
    isShowHeader() {
      return this.$store.state.isShowHeader;
    },
  },
})
</script>


