<template>
  <div class="detail">
    <!-- 头部导航 -->
    <van-nav-bar title="网易严选" fixed>
      <template #left>
        <van-grid clickable icon-size="15">
          <van-grid-item icon="home-o" to="../shouye" />
        </van-grid>
      </template>
      <template #right>
        <van-grid clickable icon-size="15">
          <van-grid-item icon="search" to="../fenlei" />
          <van-grid-item icon="cart-o" to="../cart" badge="5" />
        </van-grid>
      </template>
    </van-nav-bar>
    <!-- 轮番 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <!-- 描述 -->
    <div class="info_list">
      <ul>
        <li @click="getshoplist()">
          <h3>商品标题</h3>
          <p>描述信息</p>
          <p class="pr">price="2.00"</p>
        </li>
      </ul>
    </div>
    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-button type="danger" text="立即购买" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { NavBar } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Grid, GridItem, Toast } from "vant";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Card } from "vant";

Vue.use(Card);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onClickButton() {
      Toast("加入成功");
    },
    getshoplist() {
      axios.get("http://localhost:3009/api/v1/products/:id").then((res) => {
        return res.data[id];
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 350px;
  text-align: center;
  background-color: #39a9ed;
}
.info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.info_list h3 {
  font-size: 16px;
  line-height: 18px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_list p {
  font-size: 12px;
  color: #666;
  line-height: 18px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_list .pr {
  color: red;
  font-size: 18px;
  font-weight: 700;
}
</style>
