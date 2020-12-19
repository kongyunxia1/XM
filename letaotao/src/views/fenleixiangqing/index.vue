<template>
  <div class="fenleixiangqing">
    <Header></Header>
    <div id="content">
      <div class="movie_menu">
        <div class="hot_swtich">
          <router-link tag="div" to="/fenleixiangqing/yuangong" class="hot_item"
            >员工精选</router-link
          >
          <router-link tag="div" to="/fenleixiangqing/fushi" class="hot_item"
            >服饰特卖</router-link
          >
          <router-link tag="div" to="/fenleixiangqing/huigou" class="hot_item"
            >回购好物</router-link
          >
        </div>
        <!-- <router-link tag="div" to="/shouye/search" class="search_entry">
          <van-icon name="search" />
        </router-link> -->
        <!-- 二级路由，在一级路由的下面 -->
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/index";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    Header,
  },
};
</script>

<style scoped>
body {
  position: relative;
}
.hot_item {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 22px;
  color: rgb(132, 23, 23);
  font-size: 14px;
}
.fenleixiangqing .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  margin-top: -30px;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
  margin-top: 70px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 24px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 24px;
  font-weight: 700;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>
