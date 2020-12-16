<template>
  <div class='mine_header' @click="gomine">
    
    <van-icon class="home" name="wap-home-o" />
    <span class="wz" >网易严选</span>
    <van-icon class="search" name="search" />
    <van-icon class="cart" name="shopping-cart-o" /> 
    
  </div>
  
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    gomine(){
      this.$router.push('/mine')
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
  components: {},
}
</script>

<style scoped>
.mine_header{
  width: 100%;
    height: 50px;
    border-bottom:1px solid red;
    color:#333;
    margin-bottom:50px;
}
.mine_header .top{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
}
.wz{
  position: absolute;
  top:12px;
  font-size:20px;
  margin-left:100px;
}
.home,.search,.cart{
  font-size:30px;
  margin-top:12px;
}
.home{
  margin-left:10px;
}
.search{
  margin-left:255px;
}
.cart{
  margin-left:10px;
}
</style>