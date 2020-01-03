<template>
  <div class="box">
    <div class="content">
      <!-- 顶部 -->
      <div class="header">
        <h2>注册/登录</h2>
      </div>
      <div class="from">
        <!-- 表单数据 -->
        <form action>
          <div class="user">
            <span>USRNAME</span>
            <br />
            <input type="text" v-model="username" />
          </div>

          <div class="user">
            <span>PASSWROD</span>
            <br />
            <input type="text" v-model="password" />
          </div>

          <div>
            <span>手机号</span>
            <br />
            <input type="text" v-model="tel" />
          </div>
          <div>
            <span>短信验证码</span>
            <br />
            <input type="text" v-model="telcode" />
          </div>

          <div>
            <p>验证码</p>
            <br />
            <input type="text" v-model="verify" />
            <span v-html="svg" class="svg" @click="reCode">{{svg}}</span>
          </div>
        </form>
      </div>
      <div class="bottom">
        <div>
          <van-button type="primary" class="login" @click="login">登录</van-button>
          <van-button type="warning" class="register" @click="register">注册</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svg: "",
      username: "",
      password: "",
      tel: "",
      telcode: "",
      verify: ""
    };
  },
  components: {},
  methods: {
    getCode() {
      this.$api
        .getAverify()
        .then(res => {
          this.svg = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    reCode() {
      this.$api
        .getAverify()
        .then(res => {
          // console.log(res);
          this.svg = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {
      this.$api
        .login(this.username, this.password, this.verify)
        .then(res => {
          let user = res.userInfo;
          //  console.log(user)
          if (res.code === 200) {
            // this.$router.push({ name: "my", params: { userInfo: user } });
             this.$router.push( {path: "/my"});
          }
          console.log(res);
          localStorage.setItem("username", this.username);
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      // let obj={
      //   username:this.username,
      //   password:this.password,
      //   coverify:this.verify,
      // }
      console.log(obj);
      this.$api
        .register(this.username,this.password,this.verify)
        .then(res => {
          if (res.code === 200) {
            this.$notify("注册成功");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("../../assets/login2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
  .content {
    width: 100%;
    width: 94%;
    margin-left: 3%;
    .header {
      margin-top: 5%;
    }
    .from {
      width: 100%;
      div {
        margin-top: 2%;
        width: 100%;
        height: 80px;
      }
      input {
        width: 60%;
        height: 36px;
      }
      .svg {
        float: right;
      }
      span {
        display: inline-block;
        width: 100px;
      }
    }
    .bottom {
      div{
        width: 70%;
        margin-top: 2%;
      }
      .van-button {
        width: 45%;
        height: 50px;
      }
      .register {
        margin-left: 5%;
      }
    }
  }
}
</style>