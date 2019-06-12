<template>
<div>

    <div class="top"><p class="top-one"><a><img src="http://img4.imgtn.bdimg.com/it/u=338765090,4226811588&fm=26&gp=0.jpg" alt=""></a><span><img src="//m.assets.shop.hisense.com/assets/files/hisense.46ef582304ee74ce.png" alt=""></span></p></div>
    <div class="loginType"><span>快捷登陆</span>|<span>密码登录</span></div>
    <div >
        <div class="loginText">
        <!-- <span>用户账户</span> -->
        <input type="text" placeholder="用户账号" v-model="userName">
        </div>
        <div class="loginText">
        <!-- <span>用户密码</span> -->
        <input type="text" placeholder="用户密码" v-model="userPassword">
        </div>
    </div>
    <div class="btn" @click="login">
        登录
    </div>
</div>
</template>
<script>
import { setCookie, getCookie, delCookie } from "../assets/cookie.js";
export default {
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },

  mounted() {
    // 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录

    if (getCookie("username")) {
      this.$router.push("/home");
    }
  },
  methods: {
    login() {
      if (this.userName == "" || this.userPassword == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.userName, password: this.password };
        /*接口请求*/
        this.$http
          .post(
            "https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/http:/localhost/vueapi/index.php",
            data
          )
          .then(res => {
            //测试用户 zhoujunsen 密码123
            console.log(res.data.data.username);
            console.log(this.userName);
            console.log(res.data.data.userPassword);
            console.log(this.userPassword);
            console.log(this.$store.state.userNameTo);
            /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
            // if (res.data == -1) {
            //   this.tishi = "该用户不存在";
            //   this.showTishi = true;
            // } else if (res.data == 0) {
            //   this.tishi = "密码输入错误";
            //   this.showTishi = true;
            // } else if (res.data == "admin") {
            //   /*路由跳转this.$router.push*/
            //   this.$router.push("/main");
            // } else {
            //   this.tishi = "登录成功";
            //   this.showTishi = true;
            //   setCookie("username", this.username, 1000 * 60);
            //   setTimeout(
            //     function() {
            //       this.$router.push("/home");
            //     }.bind(this),
            //     1000
            //   );
            // }
            if (res.data.data.username === this.userName) {
              if (res.data.data.userpass == this.userPassword) {
                // setCookie("username", this.userName, 1000 * 60);
                // this.$cookieStore.setCookie("name", this.userName);
                // localStorage.setItem（'username','zhangsan'）;
                localStorage.setItem("username", this.userName);
                this.$store.state.userNameTo = this.userName;
                this.$router.push("/hmine");
              } else {
                alert("密码错误");
              }
            } else {
              alert("用户名不存在");
              // console.log("用户名不存在");
            }
          });
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
  padding: 36px 20px;
  span {
    display: inline-block;
    width: 90px;
    text-align: center;
  }
  :first-child {
    color: #ccc;
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
