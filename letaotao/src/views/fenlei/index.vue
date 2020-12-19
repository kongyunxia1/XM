<template>
  <div class="fenlei">
    <Footer></Footer>
    <div class="isFixed">
      <div class="search-wrap border-b">
        <router-link to="/search" class="search">
          <i class="iconfont icon-sousuo"></i>
          <input
            type="text"
            placeholder="搜索商品, 共10340款好物"
            :value="this.$route.query.keyword"
          />
        </router-link>
      </div>
    </div>
    <!-- <Footer></Footer> -->
    <div id="content">
      <div class="movie_menu">
        <div class="hot_swtich">
          <router-link tag="div" to="/fenlei/tuijian" class="hot_item"
            >推荐专区</router-link
          >
          <router-link tag="div" to="/fenlei/xinpin" class="hot_item"
            >新品专区</router-link
          >
          <router-link tag="div" to="/fenlei/jujia" class="hot_item"
            >居家生活</router-link
          >
        </div>
        <!-- <router-link tag="div" to="/shouye/search" class="search_entry">
          <van-icon name="search" />
        </router-link> -->
        <!-- 二级路由，在一级路由的下面 -->
      </div>
      <router-view></router-view>
    </div>
    <!-- 轮播 -->
    <!-- <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </van-swipe>
    </div> -->
  </div>
</template>

<script>
import Footer from "../../components/footer/index";
//import { Search } from 'vant';

//Vue.use(Search);
//import axios from "axios";
export default {
  data() {
    return {
      isActive: "",
      //foodsList: [],
      activeKey: 0,
      getcolor: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeActive(index) {
      // 选中
      this.isActive = index;
      //this.getOtherData(index);
    },
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
body {
  position: relative;
}
.isFixed {
  height: 40px;
  text-align: center;
  margin-top: 10px;
}
.iconfont {
  position: absolute;
  left: 75px;
  top: 17px;
}
.search-wrap .search input {
  /* border: 0; */
  width: 320px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #ece8e8;
  border: 0;
  border-radius: 5px;
}
/* .van-sidebar-item {
  height: 50px;
}
.my-swipe {
  width: 277px;
  height: 100px;
  position: absolute;
  right: 10px;
  top: 60px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.active {
  color: #b4282d;
} */
.hot_item {
  margin-top: 22px;
  color: rgb(132, 23, 23);
  font-size: 14px;
}
</style>
