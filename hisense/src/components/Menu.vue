<template>
  <div>
    <div class="tabBar" style="margin-top:44px;">
      <div style="width:auto;overflow:scroll;">
        <div
          class="tabBar_scrollView"
          :style="{'transform': 'translate3d('+menuLeft+'px, 0px, 0px) ', 'transition-duration': '0.9ms'}"
        >
          <div
            class="menutab"
            v-for="(item,index) in menu_text"
            :key="index"
            @click="HighLight(index)"
          >
            <router-link
              class="menu_txt"
              :to="item.tabUrl"
              :class="{'menu_txt_act':index==menusNum}"
              v-text="item.name"
            ></router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.tabBar {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border-width: 0px 0px 1px;
  border-color: rgb(210, 210, 210) rgb(210, 210, 210) rgb(255, 255, 255);
  border-style: solid;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  justify-content: flex-start;
}
.menutab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  height: 30px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px;
  padding-top: 3px;
  flex: 0 0 auto;
}
.menu_txt {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 14px;
  color: rgb(170, 170, 170);
  font-weight: 300;
  text-decoration: none;
}
.menu_txt_act {
  color: rgb(38, 38, 38) !important;
  font-weight: 800;
}
.tabBar_scrollView {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  position: relative;
  flex: 1 1 0%;
  padding-bottom: 10px;
  margin-bottom: -10px;
}
</style>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      menu_text: [
        {
          name: '推荐',
          tabUrl: '/',
        },
        {
          name: '618提前抢购',
          tabUrl: '/SnapUp',
        },
        {
          name: '电视',
          tabUrl: '/TvSale',
        },
        {
          name: '激光',
          tabUrl: '/Laser',
        },
        {
          name: '空调',
          tabUrl: '/AirConditioner',
        },
        {
          name: '冰箱',
          tabUrl: '/Refrigerator',
        },
        {
          name: '洗衣机',
          tabUrl: '/Washer',
        },
        {
          name: '手机',
          tabUrl: '/Telephone',
        },
        {
          name: '聚享家',
          tabUrl: '/Hardware',
        },
        {
          name: '厨卫',
          tabUrl: '/KitchenBath',
        },
      ],
      menusNum: 0,
      menuLeft: 0,
    };
  },
  methods: {
    HighLight(innum) {
      // console.log(indexnum);
      if (innum > 3 && innum < 6) {
        // 文字轮播
        if (innum > this.menusNum) {
          this.menuLeft += -57 * (innum - this.menusNum);
        } else {
          this.menuLeft += 57 * (this.menusNum - innum);
        }
      } else if (innum <= 3) {
        this.menuLeft = 0;
      } else {
        this.menuLeft = -225;
      }
      this.menusNum = innum;
    },
  },
});
</script>
