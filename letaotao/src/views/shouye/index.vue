<template>
  <div class=''>
     <router-view></router-view>
  <div class="">
  
    <Header></Header>
    <!--  <van-tabs v-model="active">
      <van-tab title="推荐" to="/shouye/tuijian">
        <router-view></router-view>
      </van-tab>

      <van-tab title="居家" to="/shouye/jujia">
        <router-view></router-view>
      </van-tab>
      <van-tab title="配件" to="/shouye/jujia">
        <router-view></router-view>
      </van-tab>

      <van-tab title="服装" to="/shouye/jujia">
        <router-view></router-view
      ></van-tab>
      <van-tab title="电器" to="/shouye/jujia">
        <router-view></router-view
      ></van-tab>
      <van-tab title="洗护" to="/shouye/jujia">
        <router-view></router-view
      ></van-tab>
      <van-tab title="饮食" to="/shouye/jujia">
        <router-view></router-view
      ></van-tab>
    </van-tabs> -->

    <van-tabs v-model="active">
      <van-tab title="推荐" to="/shouye/tuijian"> </van-tab>
      <van-tab title="居家" to="/shouye/jujia"> </van-tab>
      <van-tab title="配件" to="/shouye/jujia"> </van-tab>
      <van-tab title="服装" to="/shouye/jujia"> </van-tab>
      <van-tab title="电器" to="/shouye/jujia"> </van-tab>
      <van-tab title="洗护" to="/shouye/jujia"> </van-tab>
      <van-tab title="饮食" to="/shouye/jujia"> </van-tab>
      <router-view></router-view>
    </van-tabs>

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
      value: "",
      active: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
    detail(id) {
      console.log(id);
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
  }

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

