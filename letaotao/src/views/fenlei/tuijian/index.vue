<template>
  <div class="tuijian">
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img12.360buyimg.com/pop/s1180x940_jfs/t1/150540/8/10156/91790/5fd31da6E90b66ccf/35e8c940edf82086.jpg.webp"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img11.360buyimg.com/da/s1180x940_jfs/t1/126486/4/18271/103287/5fab687dEba4bf813/58256ee1323b023b.jpg.webp"
            alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="fenlei">
      <figure @click="dianji">
        <img
          src="https://img30.360buyimg.com/jdcms/s300x300_jfs/t18238/314/2575768441/412034/fe21693/5b019eb2Nf6e556e7.jpg.webp"
          alt=""
        />
        <ficaption>员工精选</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img30.360buyimg.com/jdcms/s300x300_jfs/t1/84130/21/1447/129570/5cfbc186Ee5f507cb/cfc3b5740a8098d4.jpg.webp"
          alt=""
        />
        <ficaption>服饰特卖</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/119339/23/6994/125539/5ebf47f7E9fca7810/febe24b1d09712f5.jpg.webp"
          alt=""
        />
        <ficaption>回购好物</ficaption>
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
        path: "../fenleixiangqing/yuangong",
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
