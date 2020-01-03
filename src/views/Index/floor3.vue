<template>
 <div class="box">
    <div v-for="item in floor3" :key="item.id" class="content" @click="jump(item)">
      <div class="floor-all">
        <img :src="item.image" alt="">
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
      floor3:{
       type:null,
       rquired:true,
       default:'',
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
    //  console.log(this.floor3)
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box{
 background: #fff;
  width: 100%;
  height: 300px;
  
  .floor-all{
    float: left;
    width: 50%;
   img{
     width: 100%;
     height: 100px;  
   }
}
.content:nth-child(1) img{ 
      height: 200px;
}
}

</style>