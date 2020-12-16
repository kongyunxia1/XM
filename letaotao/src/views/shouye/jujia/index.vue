<template>
  <div class="jujia">
    <a href=""><van-image width="100%" fit="contain" :src="banner" /></a>
    <van-row type="flex" justify="center" class="text1">
      <van-col>床品件套</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="text2">
      <van-col>MUJI等品牌制造商出品</van-col>
    </van-row>
    <van-row type="flex" justify="space-between">
      <van-col span="12">
        <van-card
          v-for="item in list"
          :key="item._id"
          :price="item.price"
          :title="item.name"
          :thumb="item.coverImg"
          @click="detail(item._id)"
        />
      </van-col>
      <van-col span="12">
        <van-card
          v-for="item in list0"
          :key="item._id"
          :price="item.price"
          :title="item.name"
          :thumb="item.coverImg"
          @click="detail(item._id)"
        />
      </van-col>
    </van-row>
    <!-- 复制黏贴 -->
    <van-row type="flex" justify="center" class="text1">
      <van-col>被枕</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="text2">
      <van-col>守护你的睡眠时光</van-col>
    </van-row>
    <van-row type="flex" justify="space-between">
      <van-col span="12">
        <van-card
          v-for="item in list1"
          :key="item._id"
          :price="item.price"
          :title="item.name"
          :thumb="item.coverImg"
          @click="detail(item._id)"
        />
      </van-col>
      <van-col span="12">
        <van-card
          v-for="item in list2"
          :key="item._id"
          :price="item.price"
          :title="item.name"
          :thumb="item.coverImg"
          @click="detail(item._id)"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      banner:
        "http://yanxuan.nosdn.127.net/8feb4f8712ae2f2ed6c6d7e5df1a0043.jpg?quality=85&thumbnail=750x0&imageView",
      list: [],
      list0: [],
      list1: [],
      list2: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    detail(id) {
      //获取点击商品的id
      console.log("当前被点击的id=" + id);
    },
  },
  async created() {
    const res = await axios.get("http://localhost:3009/api/v1/products", {
      params: {
        per: 10,
        page: parseInt(Math.random() * 10),
      },
    });
    console.log(res);
    this.list = res.data.products.splice(0, 2);
    this.list0 = res.data.products.splice(0, 2);
    this.list1 = res.data.products.splice(0, 2);
    this.list2 = res.data.products.splice(0, 2);
    console.log(this.list1);
    console.log(this.list2);
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
.jujia .text1 {
  margin-top: 10px;
  font-size: 18px;
}
.jujia .text2 {
  color: #cecece;
}
</style>