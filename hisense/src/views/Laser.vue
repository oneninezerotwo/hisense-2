<template>
  <div class="Refrigetor">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in img_scroll" :key="index">
          <img :src="item" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="shop">
      <img src="../assets/images/1e6359f8-47b9-4084-bb56-61c1762ea29b.webp" alt>
    </div>
    <div class="new_pro">
      <h4>核心技术</h4>
      <img src="../assets/images/5e77e506-bd87-447e-a55f-b88733085a52.webp" alt>
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
      <h4>变频省电</h4>
      <img src="../assets/images/9075ee60-9cc5-4d70-bcc1-93c2962dd8d3.webp" alt>
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
    <!-- <div class="shop">
      <img src="../assets/images/b44daed7-6310-4574-be4a-9c2a8f439ae2.webp" alt>
    </div>-->
    <div class="new_pro">
      <h4>图书馆静音</h4>
      <img src="../assets/images/77e6c8d8-4a20-4ca2-80bd-0a8e1569f2e9.webp" alt>
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
      <img src="../assets/images/db24816a-0462-47d6-ab0e-6286737520d6.webp" alt>
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
      <img src="../assets/images/06db0ede-f062-4f28-8c48-991efc4c8901.webp" alt>
    </div>
    <div class="shop" style="padding-bottom:0;margin-top:-2px">
      <img
        src="../assets/images/c91828d5-bd2f-4959-afe4-9923b5661faf.webp"
        style="margin-top:-2px;"
        alt
      >
      <img
        src="../assets/images/3958b31e-2c66-4659-bd61-9fed3aa98e24.webp"
        style="margin-top:-3px;"
        alt
      >
      <img
        src="../assets/images/005ff1dd-88b2-43ab-82a7-e8a1c4a11078.webp"
        style="margin-top:-3px;"
        alt
      >
      <img
        src="../assets/images/d1374ce2-0f49-40e0-9172-c249106032aa.webp"
        style="margin-top:-4px;"
        alt
      >
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
import img1 from "../assets/images/17f553b5-c5aa-4a6a-9e4d-c64f8228ccd9.webp";
import img2 from "../assets/images/d883d0d9-8fd6-4fd4-8290-31a59217ead5.webp";
import img3 from "../assets/images/77e6c8d8-4a20-4ca2-80bd-0a8e1569f2e9.webp";
import img5 from "../assets/images/aircon_scroll5.webp";
export default Vue.extend({
  data() {
    return {
      img_scroll: [img1, img2, img3, img5],
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
      //   scrollbar: ".swiper-scrollbar",
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  async created() {
    const data2 = await this.$axios(
      " https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/refrigator#!method=get"
    );
    // console.log(data2);
    const data3 = data2.data.serviceData;
    // console.log(data3);
    for (let item in data3) {
      data3[item]._DATA_.map(
        function(item2) {
          // console.log(item2);
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
    this.airlist1 = this.airlist.slice(0, 2);
    this.airlist2 = this.airlist.slice(2, 4);
    this.airlist3 = this.airlist.slice(4, 6);
    this.airlist4 = this.airlist.slice(6, 8);
  }
});
</script>

<style lang="scss" scoped>
.swiper-container-horizontal > .swiper-scrollbar {
  height: 188px;
}
img {
  width: 100%;
}
.Refrigetor {
  width: 100%;
  background: #eeeeee;
  ul,
  li {
    list-style: none;
  }
  ul,
  p,
  h4,
  span {
    margin: 0;
    padding: 0;
  }
  .shop {
    width: 100%;
    padding-bottom: 3px;
    box-sizing: border-box;
  }
  .new_pro {
    width: 100%;
    padding-bottom: 5px;
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
          font-size: 12px;
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
