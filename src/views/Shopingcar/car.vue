<template>
 <div class="box">
   <div class="beforeLogin">
     <h4 class="header">购物车</h4>
     <div class="logo">
       <img src="../../assets/car.png" alt="">
     </div>
     <div class="textIn">请先登录哦</div>
     <div class="btn"><button>去登陆</button></div>
   </div>
    
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

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
  
  width: 100%;
  height: 100%;
  background: #fff;
  
  .beforeLogin{
    width: 50%;
    height: 100%;
    margin:  0 auto;
  .header{
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
  .logo{
    width: 100%;
    height: 20%;
    img{
      width: 120px;
      height: 120px;
      margin-left: 20px;
    }
  }
  .textIn{
    text-align: center;
  }
  .btn{
    width: 100%;
    height: 20%;
    button{
       width: 100%;
       height: 30%;
       border-radius: 5px;
       margin-top: 3%;
    }
  }
  }
}
</style>