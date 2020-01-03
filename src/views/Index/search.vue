<template>
  <div :class="{ 'active':!flag}">
    <div class="header">
      <van-search
        v-model="keywords"
        placeholder="请输入搜索关键词"
        :show-action="!flag"
        shape="round"
        @focus="onFocus"
        @search="onSearch"
        @cancel="onClick"
      ></van-search>
    </div>

    <div class="content" v-if="!flag">
      <!-- 搜索历史 -->
      <div v-for="item in searchHistory " :key="item.id" class="searchHistory">
        <span>{{item.name}}</span>
      </div>
      <!-- 搜索内容 -->
      <div>
        <div v-for="item in list" :key="item.id">
          <div class="cateBox" @click="history(item)">
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
      keywords: null,
      list: null,
      searchHistory: Array
    };
  },
  props: {
    flag: {
      type: Boolean,
      required: true
    }
  },
  components: {},
  methods: {
    onFocus() {
      this.$parent.flag = !this.$parent.flag;
    },
    onClick() {
      this.$parent.flag = !this.$parent.flag;
    },
    onSearch() {
      console.log(this.keywords);
      let keyword = this.keywords;
      this.$api
        .search(keyword, 1)
        .then(res => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    history(item) {
      let obj = { name: this.keywords };
      if (!this.$store.state.searchHistory.some(item=>item.name===obj.name)) {
        this.$store.state.searchHistory.push(obj);
        console.log(obj);
        console.log(this.$store.state.searchHistory);
      }

      this.$router.push({ path: "detail", query: { id: item.id } });
      // getters方法

      // localStorage
      //  localStorage.setItem('history',JSON.stringify(arr))
      //  console.log(this.keywords)
    }
  },
  mounted() {
    this.searchHistory=this.$store.state.searchHistory
    // this.searchHistory = this.$store.getters.historys;
    console.log(this.searchHistory);
    // this.searchHistory=JSON.parse(localStorage.getItem('history'))
    // console.log(this.$parent.flag)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.active {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.content {
  width: 100%;
  height: 80%;
  background: #fff;
  .searchHistory {
    float: left;
    background: #ccc;
    margin-left: 20px;
  }
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