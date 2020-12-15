<template>
  <div class="">
    <Header></Header>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img
          v-lazy="image"
          :style="{ width: 420 + 'px', height: 150 + 'px' }"
        />
      </van-swipe-item>
    </van-swipe>

    <van-row
      type="flex"
      justify="space-around"
      :style="{
        fontSize: 3 + 'px',
        marginBottom: 12 + 'px',
      }"
    >
      <van-col span="6"><van-icon name="passed" />网易自营品牌</van-col>
      <van-col span="6"><van-icon name="passed" />30天无忧退货</van-col>
      <van-col span="6"><van-icon name="passed" />48小时快速退款</van-col>
    </van-row>

    <!--   <van-row>
      <van-col span="12" offset="8" :style="{ marginTop: 3 + 'px' }"
        >品牌制造商直供</van-col
      >
    </van-row> -->
    <p :style="{ textAlign: 'center', verticalAlign: 'middle' }">
      品牌制造商直供
    </p>

    <van-row type="flex" justify="space-around">
      <van-col span="12"
        ><van-card
          v-for="item in list"
          :key="item._id"
          :title="item.name"
          :price="item.price"
          :thumb="item.coverImg"
          @click="detail(item._id)"
      /></van-col>
      <van-col span="12"
        ><van-card
          v-for="item in list"
          :key="item._id"
          :title="item.name"
          :price="item.price"
          :thumb="item.coverImg"
          @click="detail(item._id)"
      /></van-col>
    </van-row>
    <div
      class="tea"
      :style="{
        width: 413 + 'px',
        height: 120 + 'px',
        background: ' #ebe6e6',
      }"
    >
      <p
        :style="{
          textAlign: 'center',
          verticalAlign: 'middle',
          lineHeight: 120 + 'px',
        }"
      >
        新品首发>
        <router-link to="/shouye" tag="a"> </router-link>
      </p>

      <van-row type="flex" justify="space-around">
        <van-col span="12"
          ><van-card
            v-for="item in list1"
            :key="item._id"
            :title="item.name"
            :price="item.price"
            :thumb="item.coverImg"
            @click="detail(item._id)"
        /></van-col>
        <van-col span="12"
          ><van-card
            v-for="item in list1"
            :key="item._id"
            :title="item.name"
            :price="item.price"
            :thumb="item.coverImg"
            @click="detail(item._id)"
        /></van-col>
      </van-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);

import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import { Card } from "vant";

Vue.use(Card);

import Header from "@/components/header/index.vue";
import Footer from "../../components/footer/index";
export default {
  data() {
    return {
      images: [
        "http://yanxuan.nosdn.127.net/aef1dfa6e25c61c96a8fcaa24e756b83.jpg?imageView&thumbnail=750x0&quality=75",
        "http://yanxuan.nosdn.127.net/0260e7764f00606950ee0933ceadc84e.jpg?imageView&thumbnail=750x0&quality=75",
        "http://yanxuan.nosdn.127.net/e6d195c3ed656777e0e34c142a496c88.jpg?imageView&thumbnail=750x0&quality=75",
        "http://yanxuan.nosdn.127.net/41bf0751457a405e1137f01d66d7f843.jpg?imageView&thumbnail=750x0&quality=75",
        "http://yanxuan.nosdn.127.net/574dafc21b52e225d80bd660dc4f8b99.jpg?imageView&thumbnail=750x0&quality=75",
      ],
      list: [],
      list1: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail(id) {
      console.log(id);
    },
  },
  async created() {
    const res = await axios.get("http://localhost:3009/api/v1/products", {
      params: {
        per: 5,
        page: parseInt(Math.random() * 10),
      },
    });
    console.log(res);
    this.list = res.data.products.splice(0, 2);
    this.list1 = res.data.products.splice(0, 2);
  },
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
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
