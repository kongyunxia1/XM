<template>
  <div class="nowplaying">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img
          src="https://img14.360buyimg.com/pop/s1180x940_jfs/t1/154736/17/10044/92599/5fd898ceE909a3584/59a46d8ddc86f06f.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://img12.360buyimg.com/da/s1180x940_jfs/t1/154220/30/1979/72450/5f82f0b2Eb5486b08/0c09f1404ca81573.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/132442/19/12281/62375/5f86e13cEabea17c4/71c3079016b3c832.jpg.webp"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="https://imgcps.jd.com/ling4/100006341283/5aSn5Yib55Sf5rS76aaG/54Ot6ZSA54iG5qy-5aW96LSn6LSt/p-5bd8253082acdd181d02fa09/2ab4a034/cr/s/q.jpg"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 热卖 -->
    <van-row type="flex" justify="center" class="text1">
      <van-col>员工回购</van-col>
    </van-row>
    <van-row type="flex" justify="center" class="text2">
      <van-col>员工回购热销TOP榜</van-col>
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
    <h4 class="ish4">秋冬必买</h4>
    <h5 class="ish5">空气净化/热敷艾灸</h5>
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
