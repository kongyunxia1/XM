<template>
  <div class="nowplaying">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img
          src="https://img12.360buyimg.com/pop/s1180x940_jfs/t1/150540/8/10156/91790/5fd31da6E90b66ccf/35e8c940edf82086.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/126486/4/18271/103287/5fab687dEba4bf813/58256ee1323b023b.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/153264/37/3043/222832/5f8fe928Ea0b2447b/14fe73879e80cb7a.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/134138/31/19622/105140/5fd35e5bE892d90ae/2d8b666bb92c2f8b.jpg.webp"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 热卖 -->
    <van-row type="flex" justify="center" class="text1">
      <van-col>员工心仪好物</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="text2">
      <van-col>员工喜爱热销TOP榜</van-col>
    </van-row>
    <!-- <h4 class="ish4">热卖爆款</h4>
    <h5 class="ish5">大家都在买，家电热销TOP榜</h5> -->
    <!-- 商品 -->
    <van-col span="12">
      <van-card
        v-for="(title, index) in lists"
        :key="index"
        :num="title.quantity"
        :price="title.price"
        :title="title.name"
        :thumb="title.coverImg"
        @click="goxiangqing(title._id)"
      />
    </van-col>
    <van-col span="12">
      <van-card
        v-for="(title, index) in lists"
        :key="index"
        :num="title.quantity"
        :price="title.price"
        :title="title.name"
        :thumb="title.coverImg"
        @click="goxiangqing(title._id)"
      />
    </van-col>
    <h4 class="ish4">员工必买</h4>
    <h5 class="ish5">防寒取暖/热敷艾灸</h5>
    <van-col span="12">
      <van-card
        v-for="(title, index) in lists"
        :key="index"
        :num="title.quantity"
        :price="title.price"
        :title="title.name"
        :thumb="title.coverImg"
        @click="goxiangqing(title._id)"
      />
    </van-col>
    <van-col span="12">
      <van-card
        v-for="(title, index) in lists"
        :key="index"
        :num="title.quantity"
        :price="title.price"
        :title="title.name"
        :thumb="title.coverImg"
        @click="goxiangqing(title._id)"
      />
    </van-col>
    <!-- <section class="sect" v-for="(title, index) in lists" :key="index">
      <a class="title" href="">
        <img src="title.coverImg" alt="" />
        <p>{{ title.name }}</p>
        <p>{{ title.price }}</p>
      </a>
    </section> -->
    <!-- <van-loading color="#1989fa" />
    <van-loading type="spinner" color="#1989fa" /> -->
    <van-loading color="#1989fa" />
    <van-loading type="spinner" color="#1989fa" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lists: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch() {
      //alert(111);
      axios.get("http://localhost:3009/api/v1/products").then((res) => {
        //console.log(res);
        if (res.status == "200") {
          let arr = res.data.products;
          for (let i = 0; i < arr.length; i++) {
            this.lists.push(arr[i]);
            //console.log(this.lists);
            this.lists = this.lists.splice(0, 3);
          }
        }
      });
    },
    goxiangqing(id) {
      //alert(id);
      this.$router.push({
        path: "../detail",
        query: { id },
      });
    },
  },
  created() {
    this.onSearch();
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
.my-swipe {
  margin-top: 50px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 180px;
  height: 180px;
  text-align: center;
  background-color: #39a9ed;
}
img {
  width: 100%;
  height: 200px;
}
.van-card {
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 100px;
}
.ish4 {
  text-align: center;
  margin-top: 20px;
}
.ish5 {
  text-align: center;
  margin-top: 5px;
  color: #cecece;
}
.nowplaying {
  margin-bottom: 300px;
}
.text1 {
  margin-top: 10px;
  font-size: 18px;
}
.text2 {
  color: #cecece;
  font-size: 13px;
}
</style>
