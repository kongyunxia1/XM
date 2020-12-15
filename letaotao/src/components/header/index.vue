<template>
  <div class="">
    <van-cell-group>
      <van-field
        v-model="value"
        label="网易严选"
        placeholder="搜索商品，共9747款好物"
      />
    </van-cell-group>

    <van-tabs v-model="active">
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="居家">配件</van-tab>
      <van-tab title="服饰">服饰</van-tab>
      <van-tab title="电器">电器</van-tab>
      <van-tab title="洗护">洗护</van-tab>
      <van-tab title="饮食">饮食</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {},
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

<style lang="scss" scoped></style>
