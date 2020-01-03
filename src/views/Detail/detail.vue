<template>
 <div class="box">
   <div class="header">
      <div class="banner">
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img v-lazy="imagePath" />
          </van-swipe-item>
           <van-swipe-item>
            <img v-lazy="imagePath" />
          </van-swipe-item>
        </van-swipe>
      </div>
   </div>
   <div class="content">
     <div class="goodPropty">
      <div> <h3>{{goods.name}}</h3></div>
      <div class="price">￥{{goods.orl_price}}</div>
     </div>

     <div class="good">
       <span class="view">运费:{{goods.__v}}</span>
       <span class="amount">剩余:{{goods.amount}}</span>
      
         <span class="collect">收藏 <van-icon name="like-o" color="#1989fa" /></span>
      
     </div>
     <div class="store">
       <span>
         <van-icon name="shop-collect-o" />
         有赞的店
         <van-tag type="warning">官方</van-tag>
         </span>
         <span class="enterShop">进入店铺></span>
     </div>
     <div  class="messge">
       <van-tabs v-model="active">
          <van-tab title="商品详情" v-html="goods.detail">{{goods.detail}}</van-tab>
          <van-tab title="商品评论">评论</van-tab>
        
        </van-tabs>
     </div>
   </div>
 
   <div class="bottom">
       <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"  />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买"  />
      </van-goods-action>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
           id:String,
           goods:null,
           imagePath:null,
           active:0,
     }
   },
   components: {

   },
   methods: {
        getDetail(id){     
            this.$api.goodOne(id).then(res=>{
                if(res.code===200){
                this.goods =res.goods.goodsOne
                this.imagePath= this.goods.image
                console.log(this.goods)
                          
                }
               
            }).catch(err=>{
              console.log('???');
            })
          } 
        
   },
   mounted() {
        this.id=this.$route.query.id  
         this.getDetail(this.id)          
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
*{
  margin:0;
  padding: 0;
}
 .box{
  position: relative;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
   .header{
     width: 100%;
     height: 20%;
     img{
       width: 100%;
       height: 300px;
     }
   }
   .content{
     width: 94%;
     height: 20%;
     margin-left: 3%;
     margin-top: 20px;
     .price{
       margin-top: 30px;
       color: red;
     }
      .store{
        font-size: 14px;
      }
      .good{
        font-size: 12px;
        display: inline-block;
        width: 100%;
        margin-top:30px;
        //  display: flex;
        //  justify-content: space-around;
        .view,.amount,.collect{
        display: inline-block;
        width: 33%;
        height: 50px;;
        }
      }
      .enterShop{
        float: right;
        margin-right: 5%;
      }
     .messge{
       width: 100%;
       margin-top: 30px;    
     }
   }
  
 }
</style>