<template>
  <div class="">
    <div class="cart-list">
      <van-checkbox
        v-model="product.check"
        class="check"
        @click.native="changeCheck"
      >
      </van-checkbox>

      <van-card
        :price="product.price"
        :title="product.title"
        :thumb="product.image"
      />

      <van-icon
        name="delete"
        size="20"
        color="red"
        @click="deletes(product.lid)"
      />

      <van-stepper
        v-model="product.count"
        theme="round"
        button-size="22"
        disable-input
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        this.$store.state.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return Number(preValue) + item.price * Number(item.count);
          }, 0)
          .toFixed(2) * 100
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.check;
      }).length;
    },
    //
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.$store.state.cartList.filter((item) => !item.check).length;

      // return !this.cartList.find((item) => !item.check);
    },
  },
  watch: {},
  methods: {
    changeCheck() {
      this.product.check = !this.product.check;
    },
    deletes(id) {
      this.$store.dispatch("deleteCart", id);
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
.van-icon {
  position: relative;
  right: -50px;
  top: 30px;
  font-size: 16px;
}
.check {
  margin-right: 10px;
  width: 10%;
}
.cart-list {
  display: flex;
  justify-content: space-around;
}
.van-card {
  width: 70%;
  margin-top: 10px;
  background: white;
}
img {
  width: 100px;
}
.van-card__title {
  font-size: 15px;
  font-weight: 600;
}
.van-card__price-integer {
  color: red;
  font-size: 20px;
}
.van-card__num {
  color: red;
  font-size: 16px;
}
.van-stepper {
  height: 25px;
  width: 25%;
  margin-top: 80px;
}
</style>
