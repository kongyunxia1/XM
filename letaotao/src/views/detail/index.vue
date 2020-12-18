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
          <van-grid-item icon="cart-o" to="./cart" :badge="count" />
        </van-grid>
      </template>
    </van-nav-bar>
    <!-- 轮番 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item> <img :src="listimage" alt=""/></van-swipe-item>
      <van-swipe-item> <img :src="listimage" alt=""/></van-swipe-item>
      <van-swipe-item> <img :src="listimage" alt=""/></van-swipe-item>
      <van-swipe-item> <img :src="listimage" alt=""/></van-swipe-item>
      <!-- <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
    </van-swipe>
    <van-grid direction="horizontal" :column-num="3">
      <van-grid-item :icon="listimage" text="文字" />
      <van-grid-item :icon="listimage" text="文字" />
      <van-grid-item :icon="listimage" text="文字" />
    </van-grid>
    <!-- 描述 -->
    <div class="info_list">
      <ul>
        <li class="getshoplist()">
          <h3 :name="name">{{ name }}</h3>
          <p :name="name">{{ name }}</p>
          <p class="pr">￥{{ price }}</p>
        </li>
      </ul>
    </div>
    <!-- 评价规格 -->
    <!-- <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :message-config="messageConfig"
    /> -->
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
import { Sku } from "vant";
import { mapGetters } from "vuex";
//import { add } from "../../ser/cart";
// import { delCar, getCar, add, delCars } from "../ser/cart";

Vue.use(Sku);
import { Dialog } from "vant";

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
    return {
      id: this.$route.query.id,
      listimage: "",
      name: "",
      des: "",
      price: "",
      count: this.$store.state.cartList.length,
    };
  },
  computed: { ...mapGetters(["cartList"]) },
  watch: {},
  methods: {
    onClickButton() {
      let token = JSON.parse(localStorage.getItem("token"));

      if (token) {
        const product = {};
        product.image = this.listimage;
        product.title = this.name;
        product.desc = this.des;
        product.price = this.price;
        product.lid = this.id;
        product.token = token;

        //将商品添加购物车
        // this.$store.cartList.push(product);
        this.$store.dispatch("addCart", product);

        Toast("加入成功");
        this.$store.dispatch("addCart", product);
        this.$router.push("/cart");
        localStorage.setItem("cartList", product);
      } else {
        Dialog.confirm({
          title: "请登录",
          message: "点击登录",
        })
          .then(() => {
            this.$router.push("/loging");
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    getshoplist(id) {
      axios.get("http://localhost:3009/api/v1/products/" + id).then((res) => {
        this.listimage = res.data.coverImg;
        this.name = res.data.name;
        this.price = res.data.price;
        this.des = res.data.descriptions;
      });
    },
    getCart() {
      let userCart = this.cartList;

      //同步到localStorage
      localStorage.setItem("userinfo", JSON.stringify(userCart));
    },
  },
  created() {
    this.getshoplist(this.id);
    this.getCart();
  },
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

  text-align: center;
}
.info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.info_list h3 {
  font-size: 16px;
  line-height: 18px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_list p {
  font-size: 12px;
  color: #666;
  line-height: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info_list .pr {
  color: red;
  font-size: 18px;
  font-weight: 700;
}
img {
  display: inline-block;
  width: 100%;
  height: 100%+20px;

  margin-top: 40px;
}
</style>
