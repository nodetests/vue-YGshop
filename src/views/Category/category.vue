<template>
  <div class="box">
    <div class="header">商品分类</div>
    <div class="list">
      <div class="side">
        <van-sidebar v-model="activeKey" @change="onChange" class="side-all">
          <van-sidebar-item :title="item.mallCategoryName" v-for="item in category" :key="item.id" />
        </van-sidebar>
      </div>
      <div class="nav">
        <!-- 内容上方点击 -->
        <van-tabs v-model="active" @click="onClick">
          <van-tab
            :title="item.mallSubName"
            v-for="item in bxMallSubDto"
            :key="item.id"
          ></van-tab>
        </van-tabs>
        <!-- 具体数据 -->
        <div v-for="item in list" :key="item.id" @click="jump(item)">
          <div class="cateBox">
            <div class="left">
              <img :src="item.image" alt />
            </div>
            <div class="right">
              <p>{{item.name}}</p>
              <p>
                <span class="mallPrice">￥{{item.present_price}}</span>
                <span class="price">￥{{item.orl_price}}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ids: null,
      id: null,
      activeKey: 0,
      active: 0,
      category: Array,
      list: Array,
      bxMallSubDto:null,
    };
  },
  components: {},
  methods: {
    //获得数据
    getRecommend() {
      this.$api
        .recommend()
        .then(res => {
          this.category = res.data.category;
          this. bxMallSubDto=this.category[this.activeKey].bxMallSubDto
          this.getData();
          // console.log(this.category);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 侧边栏的点击事件
    onChange(index) {
      this.ids = this.activeKey;
       this.getData();
      // console.log(this.ids);
    },
   //获取默认数据
    getData() {
        
         this.id = this.category[this.activeKey].bxMallSubDto[this.active].mallSubId;
      this.$api
        .category(this.id)
        .then(res => {
          this.list = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    
     
    },
  //内容上方点击事件
    onClick(index, title) {
      
      this.id = this.category[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.$api
        .category(this.id)
        .then(res => {
          this.list = res.dataList;
          // console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 跳转页面
    jump(item){
    this.$router.push({path:'detail',query:{id:item.id}})
    // console.log(item)
  },
  },
  mounted() {
    this.getRecommend();
    this.activeKey=this.$route.query.index-1?this.$route.query.index-1:0
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 100%;
  background: #fff;
}
.header {
  height: 5%;
  text-align: center;
}
.list {
  width: 100%;
  height: 95%;
}
.side {
  width: 25%;
  height: 100%;
  float: left;
  .side-all {
    width: 100%;
  }
}
.nav {
  width: 75%;
  height: 100%;
  float: left;
  // background: #ccc;
  .cateBox {
    width: 100%;
    height: 50px;
    .left {
      width: 48%;
      float: left;
      margin-left: 2%;
      margin-top: 20px;
      img {
        width: 100px;
        height: 90px;
      }
    }
    .right {
      width: 50%;
      height: 100px;
      float: left;
      font-size: 12px;
      margin-top: 20px;
    }
  }
}
</style>