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

    <van-row type="flex" justify="space-around" :style="{ fontSize: 3 + 'px' }">
      <van-col span="6"><van-icon name="passed" />网易自营品牌</van-col>
      <van-col span="6"><van-icon name="passed" />30天无忧退货</van-col>
      <van-col span="6"><van-icon name="passed" />48小时快速退款</van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);

import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import Header from "@/components/header/index.vue";
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
    };
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

<style scoped></style>
