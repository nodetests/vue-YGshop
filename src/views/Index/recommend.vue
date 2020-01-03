<template>
  <div class="recommend">
    <h4>商品推荐</h4>
    <div class="wraper" ref="personWrap">
      <div class="content" ref="personTab">
          <div v-for="item in recommend" :key="item.id" class="scroll" @click="jump(item)">
            <img :src="item.image" alt />
            <p class="goodName">{{item.goodsName}}</p>
            <p class="prices"> 
              <span class="mallPrice">￥{{item.mallPrice}}</span>
              <span class="price">￥{{item.price}}</span>
            </p>
            <div class="icon">
               <div class="icon1">
                 <span>  <van-icon name="shopping-cart-o" color="#fff" size=25 /></span> 
               </div>
               <div class="icon2">
               查看详情
               </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default: [],
      require: true
    }
  },
  components: {},
  methods: {
    personScroll() {
        // let num =this.recommend.length
         let width = 17 * 143;
        this.$refs.personTab.style.width = width + "px";
        // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });   
    },
  jump(item){
    this.$router.push({path:'detail',query:{id:item.goodsId}})
    // console.log(item)
  }
  },
  mounted() {
    this.$nextTick(() => {
      this.personScroll();
    });
    // console.log(this.recommend);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

.recommend {
  background: #fff;
  .wraper {
    width: 100%;
    overflow: hidden;
  }
}
.content {
  display: flex;
    .scroll{
      width: 115px;
      margin-left: 15px;
      margin-top: 10px;
      font-size: 12px;
          img{
        width: 100px;
        height: 100px;
        }
        .goodName{
          height: 30px;
          color: rgb(46, 42, 42);
        }
        .prices{
          height: 20px;
        }
        .mallPrice{
          font-size: 16px;
        }
        .price{
          font-size: 14px;
          margin-left: 15px;
          color: rgb(56, 53, 53);
          // 文本横线的位置
          text-decoration: line-through;
        }
        .icon{
          width: 115px;
          height: 50px;
          border-radius: 10px; 
          color: #fff;
         
         
         .icon1{
            border-radius: 10px 0 0 10px;
            width: 35px;
            height: 35px;
            background: rgb(254,202,58);
            float: left;
          .van-icon{
           line-height: 35px;
           margin-left: 5px;
          }
         }
         .icon2{
           width: 70px;
            height: 35px;
           border-radius: 0 10px 10px 0;
            background:#EE2C2C;
            float: left;
            font-size: 14px;
            text-align: center;
            line-height: 40px;
         }
        }
    }

   
   
  
}
</style>