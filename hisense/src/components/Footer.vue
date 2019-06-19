<template>
    <div
      v-if="isShowFooter"
      class="css-1dbjc4n css-1dbjc4n2"
      style="z-index:10; position: fixed; bottom: 0; left: 0; right:0;  background-color: rgb(255, 255, 255); display:flex; border-top-color: rgba(0, 0, 0, 0.3); border-top-width: 1px; flex-direction: row; height: 50px; justify-content: flex-end; padding-top: 5px; padding-bottom: 5px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: end;"
    >
      <a 
        v-for="(a,index) in tabs"
        :key="index"
        @click="toggle(index)"
        data-focusable="true"
        tabindex="0"
        :class="{'r-1niwhzg1': tab === index}"
        :style="{background:a.background}"
        class="r-1niwhzg r-1loqt21 r-13awgt0 r-1otgn73 css-1dbjc4n"
        style="align-items: stretch; flex: 1; height: 40px; justify-content: space-between; position: relative; -webkit-box-align: stretch; -webkit-box-pack: justify;"
      >
        <div class="css-1dbjc4n r-16y2uox">
          <div
            class="r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af css-1dbjc4n"
            style="align-items: center; justify-content: center; opacity: 1; -webkit-box-align: center; -webkit-box-pack: center;"
          >
            <div class="css-1dbjc4n" style="padding-top: 1.5px;">
              <div
                dir="auto"
                class="css-76zvg2 css-bfa6kz"
                style="align-items: center; font-family: iconfont; font-size: 18px; font-style: normal; font-weight: normal; min-height: 18px; min-width: 18px; text-align: center; -webkit-box-align: center;"
                v-text="a.ifcon"
              ></div>
            </div>
          </div>
        </div>
        <div
          v-text="a.name"
          dir="auto"
          class="r-1niwhzg css-76zvg2 css-bfa6kz"
          style="font-size: 12px; font-weight: 300; line-height: 16px; margin-bottom: 1.5px; margin-left: 0px; margin-top: 0px; text-align: center;"
        ></div>
      </a>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      tabs: [
        {
          name: '首页',
          ifcon: '',
          url: '/',
          color: 'rgb(0, 166, 170)',
          background: '',
        },
        {
          name: '分类',
          ifcon: '',
          url: 'category',
          color: 'rgb(0, 166, 170)',
          background: '',
        },
        {
          name: '',
          ifcon: '',
          url: 'flex',
          color: 'rgb(0, 166, 170)',
          background:
            'url(//img.shop.hisense.com/2019/06/10/a88fd698-dfaa-4d85-b198-38c52dfbe04e.png) ',
        },
        {
          name: '购物车',
          ifcon: '',
          url: 'cart',
          color: 'rgb(0, 166, 170)',
          background: '',
        },
        {
          name: '我',
          ifcon: '',
          url: 'me',
          color: 'rgb(0, 166, 170)',
          background: '',
        },
      ],
      tab: 0,
    };
  },
  methods: {
    toggle(index) {
    // this.tab=0,
      // console.log(this);
      // router.push(...)
      // 编程式导航，代替了传统的<router-link>
      this.$router.push({
        // path
        name: this.tabs[index].url,
      });0
      //   记录位置
      this.tab = index; 

      // index 你点击的当前所在位置
      console.log(index);
    },
  },
  computed: {
    // 从仓库获取值
    isShowFooter() {
      return this.$store.state.isShowFooter;
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.r-1niwhzg1 {
  color: rgb(0, 166, 170);
}
.r-1niwhzg {
  background-size: cover !important;
}
.css-1dbjc4n2 a:nth-child(3){
  margin-top:-3px;
}
</style>


