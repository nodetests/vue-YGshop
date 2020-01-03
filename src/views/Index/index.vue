<template>
  <div class="box">
    <!-- 首页上方搜索栏 -->
    <div class="header">
     <search :flag='flag'></search>
    </div>
    <div v-if="flag">
         <!-- 轮播图 -->
    <div class="slides">
      <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(item,index) in slides" :key="index">
            <img v-lazy="item.image" />
          </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 分类列表 -->
    <div class="cateGory">
      <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in category" :key="item.id" @click="jump(item)">
        <van-image :src="item.image" /><span class="cateGory-text">{{item.mallCategoryName}}</span>
      </van-grid-item> 
      </van-grid>
    </div>
    <!-- 首页宣传 -->
    <div class="advertesPicture">
        <img :src="PICTURE_ADDRESS" alt="">
    </div>
    <!-- 商品推荐 -->
        <div>
            <recommend :recommend='recommend'></recommend>
        </div>
        <!-- floor层 -->
        <div class="floor">
          <div class="f1">
            <span>1F</span>
            <span>休闲食品</span>
          </div>
          <div class="floor1">
            <floor1 :floor1='floor1'></floor1>
          </div>
          <div class="f2">
            <span>2F</span>
            <span>新鲜水果</span>
          </div>
          <div class="floor2">
            <floor2 :floor2='floor2'></floor2>
          </div>
          <div class="f3">
            <span>3F</span>
            <span>营养奶品</span>
          </div>
          <div class="floor3">
            <floor3 :floor3='floor3'></floor3>
          </div>
        </div>
        <!-- 热销商品 -->
        <div class=" hotgoods">热销商品</div>
        <div class="hotgood">
          <hotgood :hotgood='hotgood'></hotgood>
        </div>
    </div>
  </div>
   
</template>

<script>
import recommend from './recommend'
import floor1 from './floor1'
import floor2 from './floor2'
import floor3 from './floor3'
import hotgood from './hotgood'
import search from './search'
export default {
  
  data() {
    return {
      flag: true,
      slides:null,
      category:null,
      advertesPicture:null,
      recommend:null,
      floor1:null,
      floor2:null,
      floor3:null,
      hotgood:null,
      PICTURE_ADDRESS:String
    };
  },
  components: {
    recommend,
    floor1,
    floor2,
    floor3,
    hotgood,
    search,
  },
  methods: {
    getRecommend() {
      this.$api
        .recommend()
        .then(res => {
         this.slides =res.data.slides
         this.category =res.data.category
         this.advertesPicture=res.data.advertesPicture
         this.PICTURE_ADDRESS=this.advertesPicture.PICTURE_ADDRESS
         this.recommend=res.data.recommend
         this.floor1=res.data.floor1
         this.floor2=res.data.floor2
         this.floor3=res.data.floor3
         this.hotgood=res.data.hotGoods         
          //  console.log(res.data)

        })
        .catch(err => {
          console.log(err);
        });
    },
    jump(item){
      // console.log(item.mallCategoryId);
      this.$router.push({path:'category',query:{index:item.mallCategoryId}})
    },
   
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.slides{
margin-top: 7px;

 img{
  width: 100%;
   height: 200px;
 } 
}
.cateGory{
  margin-top: 5px;
  .cateGory-text{
  font-size: 12px;
}
}
.advertesPicture{
  margin-top: 5px;
   margin-bottom: 5px;
  img{
    width: 100%;
  }
}
.floor{
  background: #fff;
.f1,.f2,.f3{
  background: #ccc; 
}
}
.hotgoods{
 background: #ccc
}

</style>