<template>
  <div class="about">
    <div class="top">
      <div class="area" :class="{'showtop':top_show}">
        <ul>
          <li>商品</li>
          <li>评价</li>
          <li>详情</li>
          <li>服务</li>
        </ul>
      </div>
      <router-link to="KitchenBath" class="back">&lt;</router-link>
      <div class="more">...</div>
    </div>
    <div class="swipers">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in img_scroll" :key="index">
            <img :src="item" alt>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content">
      <div class="price">
        ￥1499
        <span>已售37台</span>
        <span>降价提醒</span>
      </div>
      <div class="txt">
        <p>【活动价1499元，限量抢购】</p>
        <p>①13-18号每天10点/15点/20点下单前3单返30元；</p>
        <p>②晒图评价咨询客服返30元!</p>
        <p>30天保价/送货入户保障/官方正品</p>
        <p>6.5英寸超高清水滴屏/8000mAh电池CP/充能护甲/HelioP70处理器/人脸识别/钻石切割纹理</p>
        <p>权威官网汇聚精品</p>
      </div>
      <div class="advi_img">
        <img
          src="//img.shop.hisense.com/2019/06/14/ddd32e6e-865d-4261-a7b6-5dababe354da.jpg?x-oss-process=image/resize,m_fixed,w_200,h_200/format,webp"
          alt
        >
      </div>
      <div class="getpro">
        <div class="songzhi">
          <span>送至</span>
          <span>广东省广州市荔湾区</span>

          <span>&gt;</span>
        </div>
        <div class="songzhi">
          <span>已选</span>
          <span>1件</span>

          <span>&gt;</span>
        </div>
        <div class="service">
          <span>服务</span>
          <ul>
            <li>30天保价</li>
            <li>七天无理由</li>
            <li>全场包邮</li>
            <li>全国联保</li>
            <li>电子发票</li>
          </ul>

          <span class="rigth_icon">&gt;</span>
        </div>
        <div class="imgs" ref="detail">
          <div class="imgs_txt" :class="{'mountingmenu':mounting}">
            <ul>
              <li>图片详情</li>
              <li>参数</li>
            </ul>
          </div>

          <img src="//img.shop.hisense.com/2019/05/21/f413d7c7-3aea-4ffd-b13c-8065d3e86e47.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/28cd1ea0-5ba5-463b-a7fb-2a9672c15023.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/c5ed7dbf-457f-4260-8928-f585cd84d63c.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/229e409d-707d-430f-ae30-48ae53132fe8.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/34da7c96-1ebe-47ad-af8e-7786098295f4.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/5f8c22fe-5034-4640-9357-c0b86575c23e.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/1ddf0377-19aa-4934-9d33-2ba10ad20168.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/7adaa3ed-fc1e-4e0c-83c0-268e6243c435.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/a889f57d-6da0-4740-aca4-c63ffe3f26ca.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/790bad9f-111c-4964-8e06-e4af861d06c3.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/5cd210e0-2ac6-441e-8026-ec75f5c5ec97.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/545db9c8-ab8d-495a-9965-40b18828a645.jpg" alt>
          <img src="//img.shop.hisense.com/2019/05/21/fce3de37-e00d-4856-9d13-50b35ae72021.jpg" alt>
        </div>
      </div>
    </div>
    <div class="foot">
      <ul>
        <li>购物车</li>
        <li>客服</li>
      </ul>
      <ul>
        <li>加入购物车</li>
        <li>提醒我</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Swiper from "swiper";
export default Vue.extend({
  data() {
    return {
      img_scroll: [
        "//img.shop.hisense.com/2019/05/21/151a4877-ab2e-45d4-bb98-184e839cd3a2.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/22/3f5dfeb7-dea5-4882-b711-a33e2b70a0dc.png?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/e514e804-1f33-4f0c-82ff-e077ad766e27.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/756f3af9-9e37-4a7a-a56c-140b02dd94bc.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/11b85cb4-d1a1-426c-9790-6e02bbdce129.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/680914c9-ec81-49e9-823f-dde3ccf7be6d.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/a57110cb-0d38-45ea-9cac-3d8e5201a094.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70",
        "//img.shop.hisense.com/2019/05/21/a07873db-42ab-4334-91ea-0b9609f18055.jpg?x-oss-process=image/resize,m_fixed,w_750,h_750/format,webp/quality,q_70"
      ],
      top_show: false,
      mounting: false //吸顶的判断值
    };
  },
  created(){
    this.$store.state.isShowFooter = false;
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
    window.onscroll = e => {
      this.$store.state.isShowFooter = false;
      // console.log(111);
      if (window.scrollY > 50) {
        this.top_show = true;
      } else {
        this.top_show = false;
      }
      // console.log(this.top_show);
      if (this.$refs.detail.getBoundingClientRect().top < 40) {
        //吸顶

        this.mounting = true;
        console.log(this.mounting);
      } else {
        this.mounting = false;
        console.log(this.mounting);
      }
    };
  },
  
});
</script>

<style lang="scss" scoped>
.showtop {
  display: block !important;
}
.mountingmenu {
  position: fixed;
  top: 40px;
}
img {
  width: 100%;
}
.about {
  position: relative;
  width: 100%;
  ul,
  li {
    list-style: none;
  }
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  .top {
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0;
    top: 0;
    z-index: 1000;
    .back {
      width: 50px;
      height: 40px;
      position: absolute;
      left: 0px;
      top: 0px;
      font-size: 30px;
      // z-index: 1000;
      color: #333;
    }
    .more {
      width: 50px;
      height: 40px;
      position: absolute;
      right: 0px;
      top: 0px;
      font-size: 30px;
      // z-index: 1000;
      color: #333;
      line-height: 24px;
    }
    .area {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      position: absolute;
      left: 0; // z-index: 999;
      background: white;
      display: none;
      ul {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-left: 70px;
        li {
          flex: 1;
          align-items: center;
          height: 100%;
          line-height: 40px;
        }
      }
    }
  }

  .swipers {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
  .content {
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 100px;
     text-align: left;
    .price {
      color: red;
      font-size: 20px;
      position: relative;
      span {
        color: #666;
        font-size: 14px;
        &:nth-child(2) {
          display: inline-block;
          width: 70px;
          height: 20px;
          background: #ddd;
          border-radius: 5px;
          text-align: center;
          position: absolute;
          right: 10px;
          top: 5px;
        }
      }
    }
    .txt {
      margin-top: 5px;
      p {
        color: #666;
       
      }
    }
    .advi_img {
      margin-top: 10px;
    }
    .getpro {
      .songzhi {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #eee;
        position: relative;
        span {
          color: #666;
          display: inline-block;
          line-height: 40px;
          margin-left: 10px;
          &:nth-child(3) {
            position: absolute;
            right: 3px;
            font-size: 20px;
            color: #666;
          }
        }
      }
    }
    .service {
      width: 100%;
      height: 80px;
      position: relative;
      padding-top: 20px;
      box-sizing: border-box;

      ul {
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        float: left;
        padding-left: 40px;
        li {
          flex: 30%;
          color: #666;
        }
      }
      span {
        color: #666;
        display: inline-block;
        line-height: 40px;
        margin-left: 10px;
        float: left;
      }
      .rigth_icon {
        position: absolute;
        right: 3px;
        font-size: 20px;
        color: #666;
        // float: right;
      }
    }
    .imgs {
      width: 100%;

      .imgs_txt {
        width: 100%;
        padding-left: 100px;
        box-sizing: border-box;
        background: white;
        ul {
          width: 70%;
          height: 30px;
          display: flex;
          justify-content: center;

          li {
            flex: 1;
            height: 100%;
            line-height: 30px;
            text-align: center;
          }
        }
      }
      img {
        margin-top: -3px;
      }
    }
  }
  .foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #eeeeee;
    background: white;
    display: flex;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        align-content: center;
        height: 100%;
        line-height: 50px;
      }
    }
    ul:nth-child(1) {
      flex: 0.3;

      li {
      }
    }
    ul:nth-child(2) {
      flex: 1;

      li {
        color: white;
        &:nth-child(1) {
          background: #666;
        }
        &:nth-child(2) {
          background: red;
        }
      }
    }
  }
}
</style>
