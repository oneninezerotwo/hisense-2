<template>
  <div class="TVsale">
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
      <h4>新品首发</h4>
      <img src="../assets/images/863957f9-2bb6-43b6-9d0d-8fbf4b35d509.webp" alt>
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
      <h4>无边全面屏</h4>
      <img src="../assets/images/e2b7e92a-9ff9-442a-8a94-9754aa183e6c.webp" alt>
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
      <img src="../assets/images/b44daed7-6310-4574-be4a-9c2a8f439ae2.webp" alt>
    </div>
    <div class="new_pro">
      <h4>AI人工智能</h4>
      <img src="../assets/images/b48f9d67-50e6-413f-bd37-9c92c12952ba.webp" alt>
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
      <img src="../assets/images/ea0fbf7f-96f7-4625-986d-ca546cadb2e9.webp" alt>
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
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
import img1 from "../assets/images/ed6df305-8453-4b77-a45f-12ad91baee0b.webp";
import img2 from "../assets/images/43cbc02b-91f3-4abe-a198-81f6dfc35e99.webp";
import img3 from "../assets/images/04ecb0ad-37ab-4063-ad30-af3cb57b36fd.webp";
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
      "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/tvconarea"
    );
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
    this.airlist1 = this.airlist.slice(0, 4);
    this.airlist2 = this.airlist.slice(4, 8);
    this.airlist3 = this.airlist.slice(8, 12);
    this.airlist4 = this.airlist.slice(12, 16);
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
.TVsale {
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
