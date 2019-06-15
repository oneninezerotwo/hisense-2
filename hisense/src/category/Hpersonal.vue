<template>
    
<div class="setup">
    <div class="top">
        <router-link to="/me"><</router-link>
        <a>设置</a>
        <a></a>
    </div>
    <div class="continer">
        <div class="list" v-for="(i,index) in title" :key="index">
            <span v-text="i"></span><span>></span>
        </div>
    </div>
    <div class="footer" @click="moveBtn">
        退出登录
    </div>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      title: ["个人信息", "修改手机号", "修改密码", "关于我们"]
    };
  },
  created() {
    this.$store.state.isShowFooter = false;
    console.log(localStorage.getItem("username"));
  },
  methods: {
    moveBtn() {
      localStorage.removeItem("username");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.top {
  background-color: #fff;
  color: #262626;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #dce0e0;
  display: flex;
  justify-content: space-around;
  a {
    flex: 1;
    line-height: 45px;
  }
  :first-child {
    text-align: left;
    // padding-left: 20px;
    margin-left: 20px;
    font-size: 22px;
    color: #636262;
  }
  :nth-child(2) {
    text-align: center;
    font-size: 18px;
  }
}
.footer {
  width: 100%;
  height: 42px;
  text-align: center;
  color: red;
  position: fixed;
  bottom: 0;
}
.continer {
  width: 100%;
  height: 547px;
  background: #f8f4f4cc;
  padding-top: 15px;
  color: #636262;
  .list {
    width: 100%;
    height: 44px;
    background: white;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
  }
  :nth-child(4) {
    margin-top: 15px;
  }
}
</style>
