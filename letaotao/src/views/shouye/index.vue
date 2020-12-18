<template>
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
      -<van-tab title="配件" to="/shouye/jujia"> </van-tab>
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
import Header from "@/components/header/index.vue";
import Footer from "../../components/footer/index";
export default {
  data() {
    return {
      value: "",
      active: 0,
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
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
