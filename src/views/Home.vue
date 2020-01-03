<template>
 <div>
   <div class="box">
     <div class="main">
          <router-view></router-view>
     </div>
     <!-- <div class="noe"></div> -->
      <div class="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click="push('/')">首页</van-tabbar-item>
        <van-tabbar-item icon="search" @click="push('category')">分页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="push('car')">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o" @click="push('my')">我的</van-tabbar-item>
      </van-tabbar>
      </div>
     
   </div>
  
 </div>
</template>

<script>

 export default {
   data () {
     return {
       active:0,
       category:null,
     }
   },
   components: {

   },
   methods: {
     push(item){
       this.$router.push(item)
     },     
   },
   mounted() {
   
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
 background: #ccc;
}
  .main{
  width: 100%;
  height: 95%;
 
  }
  // .noe{
  //   height: 3000px;
  // }
.bottom{
  width: 100%;
  
//  margin-top: 3000px;
}

</style>