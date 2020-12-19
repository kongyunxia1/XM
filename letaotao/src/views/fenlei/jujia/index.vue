<template>
  <div class="tuijian">
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/81441/24/15054/443285/5ddbc0dcE57fc5074/6cbdb159cbf377b6.jpg.webp"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            class="isimg"
            src="https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/130752/19/12063/346065/5f859090Effa337e8/eab820bed22b63ce.jpg.webp"
            alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="fenlei">
      <figure @click="dianji">
        <img
          src="https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/129589/40/18173/109370/5fc612f4E416de4e3/b99ef218b19ce6b9.jpg.webp"
          alt=""
        />
        <ficaption>居家必备</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/87075/21/13685/98673/5e5e037cE08486c63/92fa709552901015.jpg.webp"
          alt=""
        />
        <ficaption>特价商品</ficaption>
      </figure>

      <figure @click="dianji">
        <img
          src="https://img30.360buyimg.com/jdcms/s300x300_jfs/t1/58980/34/4722/123962/5d2700caE7d236cec/9b1bc11398f5d7c5.jpg.webp"
          alt=""
        />
        <ficaption>9.9包邮</ficaption>
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
        path: "../fenleixiangqing/huigou",
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
