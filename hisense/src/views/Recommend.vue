<template>
  <div id="recon_cont">
    <section class="reco_main">
      <router-link to="/SnapUp" @click="showHeadMenu()">
        <img src="../assets/images/1.jpg" alt>
      </router-link>
      <router-view></router-view>
    </section>
    <div class="reco_find">
      <div class="find_img">
        <img src="../assets/images/find.jpg" alt>
      </div>
      <div class="channel_find">
        <ul>
          <li>
            <img src="../assets/images/tv.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/refrigerator.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/airconditioner.jpg" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="pinzhi">
      <div class="pinzhi_img">
        <img src="../assets/images/pinzhihead.jpg" alt>
      </div>
      <div class="channel_pinzhi">
        <ul class="pinzhi1">
          <li>
            <img src="../assets/images/tvchannel.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/airconchannel.jpg" alt>
          </li>
        </ul>
        <div class="pinzhi2">
          <ul class="pinzhi21">
            <li>
              <img src="../assets/images/lighttv.jpg" alt>
            </li>
            <li>
              <img src="../assets/images/hxbx.jpg" alt>
            </li>
          </ul>
          <ul class="pinzhi22">
            <li>
              <img src="../assets/images/rsbx.jpg" alt>
            </li>
            <li>
              <img src="../assets/images/xiyiji.jpg" alt>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="enjoylife">
      <div class="enjoylife_head">
        <img src="../assets/images/enjoylife.jpg" alt>
      </div>
      <div class="enjoylife_cont">
        <ul>
          <li>
            <img src="../assets/images/qskt.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/wxws.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/bxyx.jpg" alt>
          </li>
          <li>
            <img src="../assets/images/hyzq.jpg" alt>
          </li>
        </ul>
        <div class="enjoy_search">
          <img src="../assets/images/serachicon.jpg" alt>
        </div>
      </div>
    </div>
    <div class="nice_comment">
      <div class="nice_comment_head">
        <img src="../assets/images/nicecomm.jpg" alt>
      </div>
    </div>
    <el-carousel indicator-position="outside" style="height:120px;overflow:hidden;">
      <el-carousel-item
        v-for="(item,index) in img_scroll"
        :key="index"
        style="width:100%;height:134px"
      >
        <img class="img-img" :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="xuangou">
      <img src="../assets/images/xggl.jpg" alt>
    </div>
    <div class="guanfang">
      <img src="../assets/images/gfzx.jpg" alt>
    </div>
    <div class="foot">
      <img src="../assets/images/foot.jpg" alt>
    </div>
    <!-- <router-link></router-link> -->
  </div>
</template>

<style lang="scss" scoped>
#recon_cont {
  width: 100%;
  height: auto;
  ul,
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  .reco_main {
    width: 100%;
    height: 600px;
    img {
      width: 100%;
    }
  }
  .reco_find {
    width: 100%;
    // height: 75px;
    .find_img {
      width: 100%;
      height: 35px;
      img {
        width: 100%;
      }
    }
    .channel_find {
      width: 100%;
      height: 97px;
      background: #db0100;

      ul {
        display: flex;
        margin: 0;
        padding: 0;
        li {
          flex: 0.5;
          padding: 0 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .pinzhi {
    width: 100%;
    .pinzhi_img {
      width: 100%;
      height: 34.45px;
      img {
        width: 100%;
        height: 100%；;
      }
    }
    .channel_pinzhi {
      width: 100%;
      background: #db0100;
      .pinzhi1 {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding-bottom: 5px;
        // padding-top: 10px;

        li {
          flex: 0.45;
          margin: 0 2px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .pinzhi2 {
        display: flex;
        justify-content: center;
        // padding-bottom: 3px;
        // padding-top: 3px;
        .pinzhi21 {
          padding-left: 15px;
          // box-sizing: border-box;
          li:nth-child(1) {
            margin-left: -4px;
          }
          li:nth-child(2) {
            margin-right: -4px;
          }
        }
        .pinzhi22 {
          padding-right: 10px;
          li:nth-child(1) {
            margin-left: -10px;
          }
        }
        .pinzhi21,
        .pinzhi22 {
          flex: 0.5;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          li {
            flex: 0.45;
            margin: 0 1px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .enjoylife {
    width: 100%;
    .enjoylife_head {
      width: 100%;
      height: 35px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .enjoylife_cont {
      width: 100%;
      height: 125px;
      background: #e20001;
      ul {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        box-sizing: border-box;
        li {
          flex: 0.2;
          margin-left: 7px;
          // margin-right: 7px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .enjoy_search {
        width: 100%;
        height: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .nice_comment {
    width: 100%;
    .nice_comment_head {
      width: 100%;
      height: 34.45px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .img-img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__container {
    height: 100px !important;
  }
  .el-carousel--horizontal {
    width: 100%;
    height: 130px;
  }
  .xuangou {
    width: 100%;
    height: 288.16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .guanfang {
    width: 100%;
    height: 218.27px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .foot {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import img1 from "../assets/images/lunbo1.jpg";
import img2 from "../assets/images/lunbo2.jpg";
import img3 from "../assets/images/lunbo3.jpg";
export default Vue.extend({
  data() {
    return {
      img_scroll: [img1, img2, img3],
      img_num: 0
    };
  },
  methods: {
    shouHeadMenu() {}
  }
});
</script>
