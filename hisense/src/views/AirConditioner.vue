<template>
  <div class="air_conditioner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in img_scroll" :key="index">
          <img :src="item" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="last_new">
      <h4>最新资讯</h4>
      <span>什么是双模变频？</span>
    </div>
    <div class="shop">
      <img src="../assets/images/1e6359f8-47b9-4084-bb56-61c1762ea29b.webp" alt>
    </div>
    <div class="new_pro">
      <h4>新品首发</h4>
      <img src="../assets/images/7425f435-0650-4d88-b5f2-b83dd466c3e8.webp" alt>
    </div>
    <div class="air_list1">
      <ul>
        <li v-for="(item,index) in airlist1" :key="index">
          <img :src="item.imgUrl" :alt="item.name">
          <p v-text="item.name"></p>
          <span v-text="'￥'+item.pri"></span>
        </li>
      </ul>
    </div>
    <div class="new_pro">
      <h4>静音空调</h4>
      <img src="../assets/images/8a96fca3-9ee9-49f2-b8c3-38c2e22929d1.webp" alt>
    </div>
    <div class="air_list1">
      <ul>
        <li v-for="(item,index) in airlist2" :key="index">
          <img :src="item.imgUrl" :alt="item.name">
          <p v-text="item.name"></p>
          <span v-text="'￥'+item.pri"></span>
        </li>
      </ul>
    </div>
    <div class="shop">
      <img src="../assets/images/b3b1e4fd-5ef6-4ba9-b77c-d121efea99a0.webp" alt>
    </div>
    <div class="new_pro">
      <h4>智能自清洁</h4>
      <img src="../assets/images/e9c02431-560c-4660-bea3-996deb372f6a.webp" alt>
    </div>
    <div class="air_list1">
      <ul>
        <li v-for="(item,index) in airlist3" :key="index">
          <img :src="item.imgUrl" :alt="item.name">
          <p v-text="item.name"></p>
          <span v-text="'￥'+item.pri"></span>
        </li>
      </ul>
    </div>
    <div class="new_pro">
      <h4>好评优选</h4>
      <img src="../assets/images/9a949fb6-6d5a-452f-9631-f003c919b0fb.webp" alt>
    </div>
    <div class="air_list1">
      <ul>
        <li v-for="(item,index) in airlist4" :key="index">
          <img :src="item.imgUrl" :alt="item.name">
          <p v-text="item.name"></p>
          <span v-text="'￥'+item.pri"></span>
        </li>
      </ul>
    </div>
    <div class="shop" style="padding-bottom:0px">
      <img src="../assets/images/ff5a2b14-f3ea-4b80-a3ec-5abba131cf07.webp" alt>
    </div>
    <div class="shop" style="padding-bottom:0;margin-top:-2px">
      <img src="../assets/images/497f58ec-b60d-4606-b8fc-fa76f84f7680.webp" alt>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
import img1 from "../assets/images/aircon_scroll1.webp";
import img2 from "../assets/images/aircon_scroll2.webp";
import img3 from "../assets/images/aircon_scroll3.webp";
import img4 from "../assets/images/aircon_scroll4.webp";
import img5 from "../assets/images/aircon_scroll5.webp";
export default Vue.extend({
  data() {
    return {
      img_scroll: [img1, img2, img3, img4, img5],
      airlist: [],
      airlist1: [],
      index: 0,
      airlist2: [],
      airlist3: [],
      airlist4: []
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // pagination: ".swiper-pagination",
      autoplay: true,
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  async created() {
    const data2 = await this.$axios(
      "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/airconarea#!method=get"
    );
    const data3 = data2.data.serviceData;
    // console.log(data3);
    for (let item in data3) {
      //数据处理
      // console.log(data3[item]._DATA_);
      data3[item]._DATA_.map(
        function(item2) {
          if (data3[item]._DATA_.length == 2) {
            var pro_name = item2.skus[0].name.split("】");
            // console.log(pro_name[pro_name.length - 1]);
            var pro_name2 = pro_name[pro_name.length - 1];
            var airlist_obj = {
              name: pro_name2,
              imgUrl: item2.item.mainImage,
              pri: (item2.skus[0].price / 100).toFixed(2)
            };
            this.airlist[this.index] = airlist_obj;
            this.index++;
          }
        }.bind(this)
      );
    }
    // console.log(this.airlist);
    this.airlist1 = this.airlist.slice(0, 4);
    this.airlist2 = this.airlist.slice(4, 8);
    this.airlist3 = this.airlist.slice(8, 12);
    this.airlist4 = this.airlist.slice(12, 16);
    // console.log(this.airlist1);
  }
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.swiper-container-horizontal > .swiper-scrollbar {
  height: 188px;
}
img {
  width: 100%;
  // height: 100%;
}
.air_conditioner {
  width: 100%;
  background: #eeeeee;
  h4 {
    margin: 0;
  }
  ul,
  li {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .last_new {
    width: 100%;
    height: 40px;
    background: white;
    // margin-bottom: 8px;
    position: relative;
    h4 {
      width: 80px;
      font-size: 12px;
      padding-left: 5px;
      box-sizing: border-box;
      display: inline-block;

      height: 50px;
      line-height: 50px;
      margin: 0;
      position: absolute;
      left: 0;
      top: 0;
      &::after {
        content: "";
        border: 1px solid #cccccc;
        height: 15px;
        margin-left: 4px;
      }
    }
    span {
      margin-left: 5px;
      position: absolute;
      left: 80px;
      top: 0;
      font-size: 12px;
      font-display: inline-block;
      height: 50px;
      line-height: 50px;
    }
  }
  .shop {
    width: 100%;
    padding-bottom: 6px;
    box-sizing: border-box;
  }
  .new_pro {
    width: 100%;
    padding-bottom: 8px;
    box-sizing: border-box;
    h4 {
      font-size: 18px;
      text-align: center;
      background: white;
      font-weight: 600;
      color: #555;
      padding-top: 5px;
      box-sizing: border-box;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 30%;
        top: 55%;
        border-top: 1px solid #555;
        width: 20px;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        right: 30%;
        top: 55%;
        border-top: 1px solid #555;
        width: 20px;
      }
    }
  }
  .air_list1 {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: -5px;
      margin-bottom: 5px;
      li {
        width: 47%;
        height: 250px;
        background: white;
        margin-bottom: 5px;
        position: relative;
        &:nth-child(2n) {
          margin-left: 5px;
        }
        p {
          font-size: 13px;
          padding: 0 3px 0 5px;
          box-sizing: border-box;
        }
        span {
          font-size: 18px;
          color: red;
          display: inline-block;
          padding-left: 3px;
          margin-top: 5px;
          position: absolute;
          bottom: 2px;
        }
      }
    }
  }
}
</style>
