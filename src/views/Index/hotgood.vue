<template>
 <div>
    <div v-for="item in hotgood" :key="item.id"  @click="jump(item)">
      <div class="good">
         <img :src="item.image" alt />
        <p class="goodName">{{item.name}}</p>
        <p class="prices"> 
          <span class="mallPrice">￥{{item.mallPrice}}</span>
          <span class="price">￥{{item.price}}</span>
        </p>
      </div> 
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   props:{
     hotgood:{
       type:null,
       required:true,
       default:[],
     }
   },
   components: {

   },
   methods: {
      jump(item){
    this.$router.push({path:'detail',query:{id:item.goodsId}})
    console.log(item)
  }
   },
   mounted() {
  //  console.log(this.hotgood)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.good{
  width: 48%;
  float: left;
  margin-left: 2%;
 
  img{
    width: 100px;
    height: 100px;
      margin-left: 20px;
      margin-top: 20px;
  }
   .goodName{
          height: 40px;
          font-size: 14px;
          color: rgb(211, 31, 31);
        }
        .prices{
          height: 20px;
           font-size: 12px;
        }
        .mallPrice{
           color: rgb(211, 31, 31);
          font-size: 13px;
        }
        .price{
          font-size: 14px;
          margin-left: 15px;
          color: rgb(56, 53, 53);
          // 文本横线的位置
          text-decoration: line-through;
        }
}
</style>