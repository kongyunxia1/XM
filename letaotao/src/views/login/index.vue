<template>
  <div class='login'>
    <Header></Header>
    <router-view></router-view>
    <span class="wz" >网易严选</span><br>
    <div class="btn">
      <van-button class="btn1" type="danger" size="large" @click="gologin">
        <van-icon name="orders-o"/>
        手机号快捷登录
        </van-button>
      <van-button class="btn2" size="large"  plain hairline type="danger" @click="gores">
        
        没有账号，去注册
        </van-button>
    </div>
    <div class="bot">
      <ul>
        <a>
          <van-icon name="user-circle-o" />
          微信
          <span>|</span>
        </a>
        <a>
          <van-icon name="user-circle-o" />
          QQ
          <span>|</span>
        </a>
        <a>
          <van-icon name="user-circle-o" />
          微博
        </a>
      </ul>
    </div>
    
    
    
  </div>
</template>

<script>
import Header from "./components/header/index"
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
    gologin(){
      this.$router.push('/loging')
    },
    gores(){
      this.$router.push('/resgiest')
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
    Header,
  },
}
</script>

<style scoped>
.form{
  margin-top:200px;
}
.wz{
  font-size:30px;
  margin-left:120px;
}
.btn{
  margin-top:100px;
}
.btn2{
  margin-top: 15px;
}
.bot{
  margin-top: 250px;
  margin-left:80px;
}
span{
  margin-left:12px;
  margin-right:12px;
}
</style>