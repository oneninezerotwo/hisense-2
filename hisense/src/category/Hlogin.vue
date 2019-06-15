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
    <div class="btn" @click="login()">
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
    this.$store.state.isShowFooter = false;
    if (getCookie("username")) {
      this.$router.push("/");
    }
  },
  methods: {
    login() {
      localStorage.setItem("username", this.userName);
             this.$store.state.userNameTo = this.userName;
               this.$router.push("/");
      // if (this.userName == "" || this.userPassword == "") {
      //   alert("请输入用户名或密码");
      // } else {
      //   let data = { username: this.userName, password: this.userPassword };
        /*接口请求*/
        // this.$http
        //   .post(
        //     "https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/http:/localhost/vueapi/index.php",
        //     data
        //   )
        //   .then(res => {
        //     //测试用户 zhoujunsen 密码123456
        //     console.log(res)
        //     console.log(res.data.data.username);
        //     console.log(this.userName);
        //     console.log(res.data.data.userPassword);
        //     console.log(this.userPassword);
        //     console.log(this.$store.state.userNameTo);

        //     if (res.data.data.username === this.userName) {
        //       if (res.data.data.userpass == this.userPassword) {
        //         //本都存储
        //         localStorage.setItem("username", this.userName);
        //         this.$store.state.userNameTo = this.userName;
        //         this.$router.push("/me");
        //       } else {
        //         alert("密码错误");
        //       }
        //     } else {
        //       alert("用户名不存在");
        //       // console.log("用户名不存在");
        //     }
        //   });
      // }
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
