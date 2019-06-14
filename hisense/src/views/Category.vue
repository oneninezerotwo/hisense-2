<template>

  <div class="css-1dbjc4n" style="width: 375px;">
    <div class="css-1dbjc4n r-13awgt0 r-1udh08x">
      <div class="css-1dbjc4n r-13awgt0">
        <router-link to="search" v-if="isShowSearch" class="css-1dbjc4n css-1dbjc4n1">
          <div
            class="css-1dbjc4n"
            style="align-items: center; background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(204, 204, 204); border-top-color: rgb(204, 204, 204); border-right-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); flex-direction: row; height: 44px; margin-top: 0px; padding-right: 8px; padding-left: 8px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
          >
            <div class="css-1dbjc4n r-13awgt0" style="text-align:center; line-height: 44px; ">
              <div
                class="css-1dbjc4n r-13awgt0"
                style="align-items: center; flex-direction: row; justify-content: center; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: center;"
              >
                <div
                  data-focusable="true"
                  tabindex="0"
                  class="css-1dbjc4n r-1loqt21 r-13awgt0 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr"
                >
                  <div
                    class="css-1dbjc4n r-13awgt0"
                    style="display:flex; align-items: center; flex-direction: row; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
                  >
                    <div
                      class="css-1dbjc4n r-13awgt0"
                      style="flex:7; margin-left: 12px; align-items: center; background-color: rgb(247, 247, 247); flex-direction: row; height: 32px;  -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
                    >
                      <div
                        dir="auto"
                        class="css-76zvg2 css-bfa6kz"
                        style="float:left; align-items: center; color: rgb(204, 204, 204); font-family: iconfont;line-height: 32px; font-size: 15px; font-style: normal; font-weight: normal; margin-right: 8px; margin-left: 8px; min-height: 15px; min-width: 15px; text-align: center; -webkit-box-align: center;"
                      ></div>
                      <div
                        dir="auto"
                        class="css-76zvg2 css-bfa6kz"
                        style="float:left; color: rgb(186, 186, 186); font-size: 12px; font-weight: 300; line-height: 32px;"
                      >6.12-6.13 不等618福利提前抢</div>
                    </div>
                    <div
                      dir="auto"
                      class="css-76zvg2 css-bfa6kz"
                      style="flex:1; align-items: center; color: rgb(102, 102, 102); font-family: iconfont; font-size: 22px; font-style: normal; font-weight: normal; margin-left: 14px; margin-right: 6px; min-height: 22px; min-width: 22px; text-align: center; -webkit-box-align: center;"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
        </router-link>
        
        <div class="css-1dbjc4n r-13awgt0" style="margin-top:44px;">
          <div class="css-1dbjc4n r-13awgt0" style="background-color: rgb(247, 247, 247);">
            <div class="css-1dbjc4n r-13awgt0">
              <div
                class="css-1dbjc4n r-13awgt0"
                style="flex-direction: row; min-height: 0px; -webkit-box-orient: horizontal; -webkit-box-direction: normal; width: 375px;"
              >
                <div
                  style="flex: 1 1 0%; display: flex; box-sizing: border-box; position: relative; overflow: hidden; width: 100%; height: 100%; flex-direction: row; background-color: rgb(255, 255, 255);"
                >
                  <div 
                    style="display: flex; position:fixed; left:0;top:44px; width:81px; height:100%-50px; z-index:1; flex-direction: column; box-sizing: border-box; border-width: 0px 1px 0px 0px; border-color: rgb(210, 210, 210) rgb(243, 243, 243) rgb(210, 210, 210) rgb(210, 210, 210); border-style: solid; width: 81px; background-color: rgb(255, 255, 255); overflow: hidden; justify-content: flex-start;"
                  >
                    <div
                      v-if="isShowList" id="NavList"
                      class="tabBar_scrollView"
                      style="display: flex; flex-direction: column; box-sizing: border-box; justify-content: flex-start; position: relative; flex: 1 1 0%; overflow: hidden scroll; padding-right: 10px; margin-right: -10px;"
                    >
                      <div
                        v-for="(b,index) in dataList"
                        :key="index" 
                        @click="toggle(index)"
                        class="left-list"
                        style="display: flex; flex-direction: row; box-sizing: border-box; justify-content: center; align-items: center; height: 50px; background-color: rgb(255, 255, 255);"
                      >
                        <span
                          :class="{ 'active': tab === index }"
                          style="display: flex; flex-direction: row; box-sizing: border-box; white-space: nowrap; font-size: 14px; color: rgb(170, 170, 170); "
                          v-text="b.current.name"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div
                    style="flex: 1 1 0%; margin-left:81px; display: flex; box-sizing: border-box; position: relative; overflow: hidden; width: 100%; height: 100%; flex-direction: column;"
                  >
                    <div
                      style="flex: 1 0 1100%; display: flex; flex-direction: column; transform: translateY(0px);"
                    >
                      <div v-for="(b,index) in dataList" :key="index" class="right-list"
                        style=" display: flex; overflow: hidden; min-height: 573px; width: 294px;"
                      >
                        <div
                          class="css-1dbjc4n"
                          style="background-color: rgb(255, 255, 255); flex: 3 1 0%; -webkit-box-flex: 3;"
                        >
                          <div style="flex: 1 1 0%; overflow: hidden scroll; position: relative;">
                            <div
                              class="css-1dbjc4n"
                              style="padding-right: 12px; padding-left: 12px;"
                            >
                              <div
                                data-focusable="true"
                                tabindex="0"
                                class="css-1dbjc4n r-1loqt21 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr"
                                style="margin-bottom: 20px; margin-top: 24px;"
                              >
                                <div
                                  class="flex"
                                  style="height: 106px;  background-repeat: no-repeat; background-size: 100% 100%; background-position: center center;"
                                >
                                  <img :src="b.carouselItems[0].url"
                                    style="height: 106px;  background-repeat: no-repeat; background-size: cover; background-position: center center;"
                                  >
                                </div>
                              </div>
                              <div v-for="(e,index) in b.carouselItems" :key="index"
                                class="css-1dbjc4n"
                                style="align-items: center; flex-direction: row; justify-content: center; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: center;">
                                <div  class="css-1dbjc4n" style="align-items: center; flex-direction: row; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;">
                                  <div
                                    class="css-1dbjc4n"
                                    style=" height: 0.5px; width: 16px;"
                                  ></div>
                                  <div v-text="e.title"
                                    dir="auto"
                                    class="css-76zvg2 css-bfa6kz"
                                    style="color: rgb(170, 170, 170); font-size: 12px; font-weight: 100; line-height: 16px; padding-right: 4px; padding-left: 4px;"
                                  >
                                  </div>
                                  <div
                                    class="css-1dbjc4n"
                                    style="background-color: rgb(170, 170, 170); height: 0.5px; width: 16px;"
                                  ></div>
                                </div>
                                    <div class="css-1dbjc4n" style="display:flex; background-color: rgb(255, 255, 255); flex-flow: row wrap; margin-bottom: 12px; padding-right: 12px; padding-left: 12px; padding-top: 4px; -webkit-box-orient: horizontal; -webkit-box-direction: normal;">
                                <div v-for="(d,index) in b.children" :key="index" data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr" style="height: 100px; width: 33.3333%;">
                                  <div  class="css-1dbjc4n r-13awgt0"  style="align-items: center; justify-content: center; margin-bottom: 12px; -webkit-box-align: center; -webkit-box-pack: center;">
                                    <div class="flex" style="height: 70px; width: 70px; margin-bottom: 4px; background-image: background-repeat: no-repeat; background-size: contain; background-position: center center;">
                                      <img :src="d.current.logo" alt="" style="height: 70px; width: 70px; margin-bottom: 4px; background-image: background-repeat: no-repeat; background-size: contain; background-position: center center;">
                                    </div>
                                    <div v-text="d.current.name"  dir="auto" class="css-76zvg2 css-bfa6kz" style="color: rgb(91, 91, 91); font-size: 12px; font-weight: 300; line-height: 16px;"></div>
                                  </div>
                                </div>
                              </div>
                              </div>
                              <!-- <div class="css-1dbjc4n" style="display:flex; background-color: rgb(255, 255, 255); flex-flow: row wrap; margin-bottom: 12px; padding-right: 12px; padding-left: 12px; padding-top: 4px; -webkit-box-orient: horizontal; -webkit-box-direction: normal;">
                                <div v-for="(d,index) in b.children" :key="index" data-focusable="true" tabindex="0" class="css-1dbjc4n r-1loqt21 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr" style="height: 100px; width: 33.3333%;">
                                  <div  class="css-1dbjc4n r-13awgt0"  style="align-items: center; justify-content: center; margin-bottom: 12px; -webkit-box-align: center; -webkit-box-pack: center;">
                                    <div class="flex" style="height: 70px; width: 70px; margin-bottom: 4px; background-image: background-repeat: no-repeat; background-size: contain; background-position: center center;">
                                      <img :src="d.current.logo" alt="" style="height: 70px; width: 70px; margin-bottom: 4px; background-image: background-repeat: no-repeat; background-size: contain; background-position: center center;">
                                    </div>
                                    <div v-text="d.current.name"  dir="auto" class="css-76zvg2 css-bfa6kz" style="color: rgb(91, 91, 91); font-size: 12px; font-weight: 300; line-height: 16px;"></div>
                                  </div>
                                </div>
                              </div> -->
                            </div>
                            <div data-focusable="true"  tabindex="0" class="css-1dbjc4n r-1loqt21 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr" style="padding-right: 12px; padding-left: 12px;">
                              <div class="css-1dbjc4n" style="display:flex; align-items: center; background-color: rgba(0, 166, 170, 0.1); flex-direction: row; height: 40px; justify-content: center; margin-bottom: 24px; margin-top: 24px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: center;">
                                <router-link :to="b.carouselItems[0].link" dir="auto" class="css-76zvg2 css-bfa6kz" style="color: rgb(0, 166, 170); font-size: 14px; font-weight: 300; line-height: 20px; text-align: center;" v-text="b.current.name + '频道'"></router-link>
                                <div dir="auto" class="css-76zvg2 css-bfa6kz" style="align-items: center; color: rgb(0, 166, 170); font-family: iconfont; font-size: 20px; font-style: normal; font-weight: normal; min-height: 20px; min-width: 20px; text-align: center; -webkit-box-align: center;"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import $ from 'jquery';
var TIMER = null;
export default {
   name: 'home',
  data() {
    return {
      dataList: [],
      cateList: [],
      tab: 0,
      
    };
  },
  created() {
    this.$store.state.isShowFooter = true;
    this.getDataList(() => {});
  },
  mounted() {
    window.addEventListener("scroll", this.scroll, true);
    // this.initPage();
  },
  methods: {
    async getDataList(callback) {
      const data = await this.$axios(
        "https://www.easy-mock.com/mock/5cfe16dba34d9a70829f61a6/example_copy/hisense"
      );
      // console.log(data);
      this.dataList = [
        ...this.dataList,
        ...data.data.serviceData.body_2._DATA_
      ];
      // this.cateList = [...this.cateList, ...data.data.designData.category];
      console.log(this.dataList)
      // console.log(this.dataList[0].carouselItems[0].src);
    },

    toggle(index) {
      this.tab = index;
      var _this = this;
      let right_list = $('.right-list'),
          right_offsetTop = right_list[index].offsetTop - right_list[0].offsetTop,
          window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
          timer = {
              step: 50,
              times: 0,
              RIGHT_OFFSETTOP: right_offsetTop,
          };
          // console.log({index,offsetTop:timer.RIGHT_OFFSETTOP});
      if(window_scrollTop > right_offsetTop){
        _this.toggleUp(timer);
      } else if (window_scrollTop == right_offsetTop){
        return false;
      } else {
        _this.toggleDown(timer);
      }
    },
    toggleUp (timer){
      var _this = this;
      clearInterval(TIMER);
      TIMER = setInterval(()=>{
        let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(window_scrollTop <= timer.RIGHT_OFFSETTOP){
          document.documentElement.scrollTop = timer.RIGHT_OFFSETTOP;
          document.body.scrollTop = timer.RIGHT_OFFSETTOP;
          clearInterval(TIMER);
        }else{
          document.documentElement.scrollTop = window_scrollTop - timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    toggleDown(timer){
      var _this = this;
      clearInterval(TIMER);
      TIMER = setInterval(() => {
          let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (window_scrollTop >= timer.RIGHT_OFFSETTOP) {
              document.documentElement.scrollTop = timer.RIGHT_OFFSETTOP;
              document.body.scrollTop = timer.RIGHT_OFFSETTOP;
              clearInterval(TIMER);
          } else {
              document.documentElement.scrollTop = window_scrollTop + timer.step;
              document.body.scrollTop = window_scrollTop - timer.step;
          }
      }, timer.times);
    },
    // rightSrcollAddEventListener(){
    //   var _this = this;
    //   let left_list = document.getElementById("NavList").getElementsByClassName("left-list");
    //   console.log(left_list)
    //   let right_list = document.getElementsByClassName("right-list");
    //       left_list[0].className = 'left-list active';
    //   window.onscroll = function(){
    //       let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //       for (let i = 0, len = right_list.length; i < len; i++) {
    //           let right_offsetTop = right_list[i].offsetTop - right_list[0].offsetTop;
              
    //           if (window_scrollTop >= right_offsetTop) {
    //               for (let n = 0, len = left_list.length; n < len; n++) {
    //                left_list[n].className = "left-list" + (i === n ? "active" : "");
    //               }
    //           }
    //       }
    //   };
    // },
    // initPage () {
    //     var _this = this;
    //     _this.rightSrcollAddEventListener();
    // },



    scroll() {
      this.$store.state.isShowSearch = true;
      this.$store.state.isShowList = true;
      // console.log(this.$store.state.isShowList)
      // console.log(11)
    },
    destroyed() {
      window.onscroll = null;
      window.removeEventListener("scroll", this.scroll, false);
    },
    
  },
  computed: {
    // 从仓库获取值
    isShowSearch() {
      return this.$store.state.isShowSearch;
    },
    isShowList() {
      return this.$store.state.isShowList;
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.active {
  color: rgb(38, 38, 38) !important;
  font-weight: bold !important;
}
.css-1dbjc4n1{
  position: fixed;
  top:0;
  left:0;
  right:0;
  // height: 44px;
  z-index: 1;
}
</style>
