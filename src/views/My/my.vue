<template>
 <div class="box">
  <div class="beforeLogin" v-if="flag">
      <div class="header">
         <div class="iconSetting" @click="userSetting" ><van-icon name="setting" color="#fff" size="27" /></div>
        <div class="logo"> <img src="../../assets/login1.jpg" alt=""></div>
        <div class="loginClick" v-if="!this.usernames">
          <van-button type="default" size='small' @click="login">登录</van-button>
          <van-button type="default" size='small'>注册</van-button>
        </div>
        <div class="loginClick" v-if="this.usernames">欢迎您:{{usernames}}</div>
      </div>
      <div class="cate">
         <div>   
          <van-grid  :column-num="5">
            <van-grid-item icon="photo-o" text="待付款" />
            <van-grid-item icon="photo-o" text="待发货" />
            <van-grid-item icon="photo-o" text="待收货" />
            <van-grid-item icon="photo-o" text="评价"/>
            <van-grid-item icon="photo-o" text="已完成" />
          </van-grid>
         </div>
      </div>  
      <div class="bottom">
        <div class="list1">
          <div class="left">
             <van-icon name="balance-list-o"  class="icon" size="2rem" />
             <span>全部订单</span>
          </div>
          <span class="right">></span>
        </div>
         <div class="list1">
          <div class="left">
             <van-icon name="balance-list-o"  class="icon" size="2rem" />
             <span>收藏商品</span>
          </div>
          <span class="right">></span>
        </div>
         <div class="list1">
          <div class="left">
             <van-icon name="balance-list-o" class="icon" size="2rem" />
             <span>地址管理</span>
          </div>
          <span class="right">></span>
        </div>
         <div class="list1">
          <div class="left">
             <van-icon name="balance-list-o"  class="icon" size="2rem" />
             <span>最近浏览</span>
          </div>
          <span class="right">></span>
        </div>
      </div>
  </div>
  <div class="afterLogin" v-if="!flag">
    <div class="header">
      <div class="iconBack" @click="iconBack"> <van-icon name="arrow-left" size="27" /> </div>
      <h2 class="userInfo">用户资料</h2>
    </div>
    <div class="content">
      <div>github</div>
      <div class="userimg"></div>
      <div>用户名<input type="text" v-model= "username" ></div>
      <div>昵称<input type="text"   v-model="nickname" ></div>
      <div>性别<input type="text"   v-model="gender"> </div>
      <div>请输入邮箱：<input type="text"></div>
       <div>出生年月：<input type="text" v-model="date"></div> 
      
    </div>
       
  </div>
  
 </div>
</template>

<script>
 export default {
   data () {
     return {
      usernames:'',
      username:'',
      password:'',
      gender:'',
      email:'',
      date:'',
      flag:true,
      userInfo:null,
      show: false,
     }
   },
   components: {
    
   },
   methods: {
        showPopup() {
      this.show = true;
    },
       login(){
         this.$router.push({path:'/login'})
       },
       userSetting(){
       this.flag=!this.flag
       },
       iconBack(){
         this.flag=!this.flag
       },
       getuserInfo(){
         this.$api.user().then(res=>{
           console.log(res)
           this.data=res.userInfo
           this.userInfo=res.userInfo
           
           this.username=this.userInfo.username
           
           this.nickname=this.userInfo.nickname
           this.gender=this.userInfo.gender
           }).catch(err=>{
             console.log(err)
             })
       }
      
   },
   mounted() {
       this.usernames=localStorage.getItem('username')
       this.getuserInfo()
      //  this.userInfo=this.$route.params.userInfo
      //  console.log(this.userInfo)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
*{margin:0;
padding:0}
 .box{
   width: 100%;
   height: 100%;
   background: #fff;
   .beforeLogin{
     width: 100%;
     height: 100%;
   
    
   .header{
      width: 100%;
      height: 40%;
      background: #123123;
      .iconSetting{
        position: fixed;
        top: 0;
        right: 10px;
        .van-icon{
        cursor: pointer;
        }
        
      }
      .logo{
          img{
        width: 50%;
        height: 40%;
        margin-left: 25%
        }
      }
      .loginClick{
        width: 50%;
        margin-left: 35%;
        margin-top: 1%;
      }
    }
    .list1{
      display: flex;
       justify-content:space-between;
       .left{
       width: 30%;
       height: 50px;
       .icon{
         float: left;
       }
         span{
           float: left;
           text-align: center;
           line-height: 30px;
         }
    }
      .right{
        line-height: 30px;
        margin-right: 15px;
      }
    }
   
   }
   .afterLogin{
     width: 100%;
     height: 100%;
     .header{
        width: 100%;
        height: 15%;
        text-align: center;
      .iconBack{
      position: fixed;
      left: 0;
      top: 0;
     }
     }
     .content{
       width: 100%;
       div{
         margin-top: 20px;
       }
     }
    
   }
 }

</style>