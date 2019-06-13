<template>
  <div class="css-1dbjc4n" style="width: 375px;">
    <div class="css-1dbjc4n r-13awgt0 r-1udh08x">
      <div class="css-1dbjc4n r-13awgt0">
        <div
          class="css-1dbjc4n"
          style="align-items: center; background-color: rgb(255, 255, 255); border-bottom: 1px solid rgb(204, 204, 204); border-top-color: rgb(204, 204, 204); border-right-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204);  flex-direction: row; height: 44px; margin-top: 0px; padding-right: 8px; padding-left: 8px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
        >
          <div
            class="css-1dbjc4n"
            style="align-items: center; flex-direction: row; width: 80px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
          ></div>
          <div class="css-1dbjc4n r-13awgt0">
            <div
              class="css-1dbjc4n r-13awgt0"
              style="align-items: center; flex-direction: row; justify-content: center; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: center;"
            >
              <div
                data-focusable="true"
                tabindex="0"
                class="css-1dbjc4n r-1loqt21 r-1otgn73 r-eafdt9 r-1i6wzkk r-lrvibr"
                style="flex-direction: row; -webkit-box-orient: horizontal; -webkit-box-direction: normal;"
              >
                <div
                  dir="auto"
                  class="css-76zvg2 css-bfa6kz"
                  style="align-items: center; color: rgb(170, 170, 170); font-family: iconfont; font-size: 16px; font-style: normal; font-weight: normal; margin-right: 8px; margin-top: 4px; min-height: 16px; min-width: 16px; text-align: center; -webkit-box-align: center;"
                ></div>
                <div
                  dir="auto"
                  class="css-76zvg2 css-bfa6kz"
                  style="color: rgb(38, 38, 38); font-size: 18px; font-weight: 500; line-height: 24px;"
                >购物车</div>
              </div>
            </div>
          </div>
          <div
            class="css-1dbjc4n"
            style="align-items: center; flex-direction: row; justify-content: flex-end; width: 80px; -webkit-box-align: center; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-box-pack: end;"
          ></div>
        </div>
        <div
          class="css-1dbjc4n r-150rngu r-eqz5dr r-16y2uox r-1wbh5a2 r-11yh6sk r-1rnoaur r-1sncvnh"
          style="background-color: rgb(245, 245, 245); height:100%; min-height:573px;"
        >
          <div class="css-1dbjc4n">
            <div
              class="am-flexbox am-flexbox-dir-column am-flexbox-align-center"
              style="height: 380px;"
            >
              <div class="css-1dbjc4n r-1niwhzg r-13awgt0">
                <div
                  class="css-1dbjc4n r-13awgt0"
                  style="align-items: center; -webkit-box-align: center;"
                >
                  <div
                    class="flex"
                    style="margin-top: 110px; width: 148px; height: 148px; margin-bottom: 16px; background-image: url(&quot;//m.assets.shop.hisense.com/assets/files/cart-empty.27c2747601484e9d.png&quot;); background-repeat: no-repeat; background-size: contain; background-position: center center;"
                  ></div>
                  <div
                    dir="auto"
                    class="css-76zvg2 css-bfa6kz"
                    style="text-align:center; color: rgb(30, 30, 30); font-size: 14px; font-weight: 300; line-height: 20px; margin-bottom: 24px;"
                  >暂无添加的商品</div>
                </div>
              </div>
              <router-link to='/'
                data-focusable="true"
                tabindex="0"
                class="css-1dbjc4n r-1loqt21 r-1otgn73 r-lrvibr"
                style="align-items: center; background-color: rgb(217, 22, 28); border-radius: 2px; height: 42px; justify-content: center; width: 152px; -webkit-box-align: center; -webkit-box-pack: center;"
              >
                <div
                  dir="auto"
                  class="css-76zvg2 css-bfa6kz"
                  style="text-align:center; color: rgb(255, 255, 255); font-size: 16px; font-weight: 300; line-height: 42px;"
                >马上去购物</div>
                <!-- <router-view/> -->
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.state.isShowFooter = true;
  }
};
</script>