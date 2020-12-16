<template>
  <div class="mine">
    <div class="top">
      <van-skeleton class="touxiang" title avatar :row="1" />
    </div>
    <div class="zichan">
      <p>我的资产</p>
    </div>
    <div class="gongge">
      <van-grid>
        <van-grid-item icon="photo-o" text="红包" />
        <van-grid-item icon="photo-o" text="优惠券" />
        <van-grid-item icon="photo-o" text="津贴" />
        <van-grid-item icon="photo-o" text="礼品卡" />
      </van-grid>
    </div>
    <div class="duoge">
      <van-grid class="gesize">
        <van-grid-item icon="orders-o" text="我的订单" />
        <van-grid-item icon="user-circle-o" text="账号管理" />
        <van-grid-item icon="phone-o" text="我的手机号" />
      </van-grid>
      <van-grid class="gesize">
        <van-grid-item icon="location-o" text="地址管理" />
        <van-grid-item icon="certificate" text="支付安全" />
        <van-grid-item icon="records" text="意见反馈" />
    </van-grid>
    
  </div>
  <div class="logout">
    <van-button type="default" size="large" @click="logout">退出登录</van-button>
  </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/footer/index"
import { Toast } from 'vant';
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    logout(){
      Toast({
        message: '退出登录成功',
        position: 'bottom',
        duration:700,
      });
      this.$router.push('/login')
    }
  },
  created() {

  },
  mounted() {

  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    Footer,
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 160px;
<<<<<<< HEAD
   /* background: url('../../../public/img/center-bg.d069279.png') no-repeat center/cover; */
=======
  background: url('https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3942751454,1089199356&fm=26&gp=0.jpg') no-repeat center/cover;
>>>>>>> kong
  overflow: hidden;
}
.zichan {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #cecece;
}
.zichan p {
  margin-left: 20px;
}
.duoge {
  margin-top: 15px;
}
.logout {
  margin-top: 15px;
}
.gesize {
  display: flex;
  justify-content: space-between;
}
.touxiang {
  margin-top: 35px;
}
</style>
