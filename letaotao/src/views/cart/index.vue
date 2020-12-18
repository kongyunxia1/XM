<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      class="header-nav"
      @click-left="onClickLeft"
      flxed="false"
    />
    <!-- 商品列表 -->

    <cart-list></cart-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartList from "./childComps/CartList";

export default {
  data() {
    return {};
  },
  computed: {
    // cartLength() {
    //   return this.$store.getters.cartLength;
    // },
    // ...mapGetters(["cartLength"]),
    ...mapGetters({
      cartCount: "cartLength",
    }),
  },
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
  created() {},
  mounted() {
    window.onunload = function() {
      alert(111);
      // this.getcartList();
    };
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: { CartList },
};
</script>

<style scoped>
.header-nav {
  background: red;
  color: white;
  position: fixed;
  font-size: 20 px;
  height: 50px;
  width: 100%;
}
</style>
