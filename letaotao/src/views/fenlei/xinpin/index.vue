<template>
  <div class="tuijian">
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/148497/31/11776/161680/5f927660Ecd455e38/300c897d381eca70.jpg.webp"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/105894/1/11949/131389/5e400839E86949979/af563bf33f3bed7b.jpg.webp"
            alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="fenlei">
      <figure @click="dianji">
        <img
          src="https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/154954/38/8172/175413/5fc74df5E9e57a9ea/e82ac58e26213818.jpg.webp"
          alt=""
        />
        <ficaption>新品精选</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/102167/7/18638/132909/5e96c135E27784c3f/72c2f8142040cb70.jpg.webp"
          alt=""
        />
        <ficaption>新品特卖</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/130593/5/5567/213771/5f20ca50E35609d47/dcf08ef3e0d5ea1e.jpg.webp"
          alt=""
        />
        <ficaption>再次回购</ficaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    dianji() {
      this.$router.push({
        path: "../fenleixiangqing/fushi",
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
.fenlei {
  margin-left: 88px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
}
figure {
  margin-bottom: 15px;
}

img {
  width: 80px;
  height: 80px;
}
.isimg {
  width: 276px;
  height: 105px;
}
.van-sidebar-item {
  height: 50px;
}
.my-swipe {
  width: 277px;
  height: 100px;
  position: absolute;
  right: 10px;
  top: 60px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.active {
  color: #b4282d;
}
</style>
