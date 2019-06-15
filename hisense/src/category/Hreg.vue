<template>
<div>

    <div class="top"><p class="top-one"><a><img src="http://img4.imgtn.bdimg.com/it/u=338765090,4226811588&fm=26&gp=0.jpg" alt=""></a><span><img src="//m.assets.shop.hisense.com/assets/files/hisense.46ef582304ee74ce.png" alt=""></span></p></div>
    <div class="loginType"><span>新用户注册</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAAAXNSR0IArs4c6QAABJZJREFUSA2tVm9sU1UUf/f1D23a161qVIpjuqyrcUAkY4uGVWcgLhQwGWHidCZqYjLFxBj4SvzAJzP9pIngVwHd2NA49ydKyFwdUDrYAAd2W6ZMGcswTN97/bOtfc9zXnsvt127scBLXu655/zOOfece869VxAy35vh8/spfXdsP6GLEVn2U06pU0oYNDD10p6uOBUIY6raZEzGFCUNYSKeAOkJAaymobLcmgVnAmqMVwW66ue+KYOF7nNkAjOLgnFdXxMYHOhaAkLNiUSiHAUvD/SHqBZBgc/lIrzG3gtnt0kmy3NCXn+IxATxGkvoiKIEcTG8oKK3SxF0XRR9kuTXVFVF83Qxz7iKuwRCtKyFRGKxGiGZDFErvr4fKSmUOyVlIrDbxRhIoAJahfSezBJwk8ahoSIMwNrZpiGb4Do12D6T1eott9kmOGx+EpRtJpMuatHoB4i4JyXAvfTY4xcTqVQ6RFzmuCx/mt9FDhc81p45/SfjojL+k/F4KWNyxNN93TLGGAj2tyM7K6vIGItGd+mp1DdAOmlWN7sfmh7eXl+C24CYgh949kdU9cDuweDRN8bHs7cgo5XlEasBdr6WWqQecd7i9TUf2Vx1nMrYSGPMTVLL8HDdms52DeNrGAwOMAUkwNMiKubWHg/a+FPvNCofGB3da/AxGctlk1e2YNWAMvLETAaFMrv9Bg/KR+9Zv34n8ndeueLG3nESQjD9K35t1c/3Isgdjx4ymo7o+vSKWhxASSWfMhR1QnZw/BVJj93eLUArdWByVkQDYHv/mTBLToUkGekdk+XzyykfnJlxnJ6d2eJzFckMB15b0Gsh5XdGRmoNT5mtQEVWcqis6/qXBpOQa5Cw3reHLjT8+s9sGfJEIupa42tGTnC+5KMxG3GDB3NHm9YcDn2cC2QecwV0jpUlaNpbsJp64Dkpn28As2jSNxYV3aosdn91bEvN4eXaL69DI1xB+Bw6zEwd4AgFdg2Gy1gv+0cu+WPJ5CN/JeKeG6pi43GYjlc86779fqv/dZ6PdJZDPq8ZYchssey7l/JHPG7auVt/91xXZAnn+AXWek72+OteTc84h/yZAasIEUl60UvIPAWuZsQS+2E4PAMBGFuApRapD7hZqvkNzz1vVuMoF8saAoqIHuB45eLLYgDBuEfQKJW5ivczxwcK3eP3vBXvioIo1lCD2AuUflBjmcMxSm3djMV2ibBf7ISCQ8dDhQ9qlBcWHqW2XGbLpEgcjlPAUJEJvdZEnzoUdD/jvvC5HRfn7pSgDbz25+yOwyJWIjGZ0m8/EGiLi78VuoxX4xyfXqemprqpTtOTZYe6N22aY31oPIlSqUHa7FBAHcTpbF5ta+Ar6Pc7t69f/XduLTqzQmQf+iobWzds6MQ5c4gT/OAkboVL4GB6ZlTuPBTTF8RqPVLoAYRX9aTy3ye/3J6tnk8lmc2GdSXB77b6X6C2cGRCnol0JuLPIGL2gOAx/FnK8/GBuM3jef/os1XHeD6lCzqkADr+oeu2BUWpJqL4BGTA89HlS3UmQm4WWyxXteKHvz7u9d69uKhSnvF/Fq9WTJ5IyBIAAAAASUVORK5CYII=" alt=""></div>
    <div >
        <div class="loginText" >
        <span   >手机号</span>
        <input type="text"  v-model="newUsername">
        </div>
        <div class="loginText">
        <span>短信验证码</span>
        <input type="text">
        <a href="###">发送验证码</a>
        </div>
    </div>
    <div class="btn" @click="logBtn">
       注册
    </div>
</div>
</template>
<script>
export default {
  // 表单聚焦时  font-size 为8px magin-top 为0
  data() {
    return {
      num: "",
      newUsername: "",
      newPassword: ""
    };
  },
  created(){
    this.$store.state.isShowFooter = false;
  },
  methods: {
    focusclick() {
      console.log(this.focusState);
      this.focusState = 8;
      this.maginT = 0;
      console.log(this.num);
    },
    logBtn() {
      // console.log(this.message);
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.newUsername, password: this.newPassword };
        this.$http
          .post(
            "https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/http:/localhost/vueapi/index.php",
            data
          )
          .then(res => {
            console.log(res);
            if (res.data == "ok") {
              this.tishi = "注册成功";
              this.showTishi = true;
              this.username = "";
              this.password = "";
              /*注册成功之后再跳回登录页*/
              setTimeout(
                function() {
                  this.showRegister = false;
                  this.showLogin = true;
                  this.showTishi = false;
                }.bind(this),
                1000
              );
            }
          });
      }
    }
  },
  directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function(el, value) {
        //第二个参数传进来的是个json
        if (value) {
          el.focus();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 375px;
  padding: 26px 8px 0px 8px;
  box-sizing: border-box;
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span {
    display: inline-block;
    width: 127px;
    height: 20px;
    padding-left: 150px;
    margin-top: -5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.loginType {
  padding: 36px;
  span {
    display: inline-block;
    width: 90px;
    text-align: center;
  }
  img {
    display: inline-block;
    width: 12px;
    height: 12px;
  }
}
.loginText {
  padding: 0px 36px;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  margin-bottom: 2px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #cccccc;
  }
  span {
    position: absolute;
    top: 0px;
    font-size: 14px;
    margin-top: 15px;
    color: #ccc;
  }
  a {
    position: absolute;
    display: inline-block;
    width: 100px;
    right: 20px;
    line-height: 65px;
    text-decoration: none;
    color: #ccc;
    font-size: 12px;
  }
}
.btn {
  background-color: rgb(0, 166, 170);
  border-radius: 2px;
  height: 42px;
  width: 303px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  line-height: 42px;
  color: #ccc;
}
</style>



