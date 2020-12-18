<template>
  <div>
    <van-empty description="你的购物车空空如也" class="empty" v-if="len === 0">
      <van-button round type="danger" class="bottom-button" @click="shopping">
        去购买
      </van-button>
    </van-empty>
    <div class="cart-list" v-else>
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"
      >
      </cart-list-item>

      <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="isSelectAll" @click.native="checkClick"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";

export default {
  data() {
    return {
      len: this.$store.state.cartList.length,
    };
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
      // return !this.$store.state.cartList.filter((item) => !item.check).length;
      if (this.cartList.length === 0) {
        return false;
      }
      return !this.cartList.find((item) => !item.check);
    },
  },

  watch: {},
  methods: {
    onSubmit() {},
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.check = false));
      } else {
        this.cartList.forEach((item) => (item.check = true));
      }
    },
    shopping() {
      this.$router.push("/");
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
  components: {
    CartListItem,
  },
};
</script>
<style scoped>
.cart-list {
  position: absolute;

  top: 50px;
  margin-bottom: 50px;
}
/* .my-scroll-bar {
} */
/* override gemini-scrollbar default styles */

/* vertical scrollbar track */
/* .gm-scrollbar.-vertical {
  background-color: #f0f0f0;
} */

/* horizontal scrollbar track */
/* .gm-scrollbar.-horizontal {
  background-color: transparent;
} */

/* scrollbar thumb */
/* .gm-scrollbar .thumb {
  background-color: rebeccapurple;
}
.gm-scrollbar .thumb:hover {
  background-color: fuchsia;
} */
</style>
