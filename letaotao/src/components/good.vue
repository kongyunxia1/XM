<template>
  <ul class="goods">
  <li v-for="(item, index) in goods" :key="index">
    <router-link :to="{path:'/goodsDetail',query:{id:item.id}}" class="goods-item">
      <div class="img">
        <img :src="item.imgSrc" :alt="item.name">
        <span class="tag tag-hollow tag-h" v-if="item.tagColor">{{item.tagColor}}</span>
      </div>
      <div class="txt">
        <span v-for="(tag,index) in item.tags" :key="index" :class="['tag',tag.class]">{{tag.name}}</span>
        <p class="name">{{item.name}}</p>
        <p class="descript" v-if="item.descript">{{item.descript}}</p>
        <p class="price">{{item.price.item.yuan | priceFomat(item.price,item.yuan)}}</p>
        <span class="tag tag-hollow" v-if="item.tagNew">{{item.tagNew}}</span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
    props: {
    goods: {},
  },
  data() {
    return {};
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
