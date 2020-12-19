<template>
  <div class="search">
    <div class="header">
      <form action="/">
        <van-search
          v-model="keywords"
          show-action
          placeholder="搜索商品，共3000+好物"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="left">
      <van-sidebar v-model="activeKey">
        <li
          class="van-sidebar-item"
          v-for="(title, index) in foodsList"
          :key="index"
          @click="changeActive(index)"
        >
          {{ title }}
        </li></van-sidebar
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      keywords: "",
      activeKey: 0,
      foodsList: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSearch(keywords) {
      //alert(111);
      axios
        .post("http://localhost:3000/cloudsearch?keywords=" + keywords)
        .then((res) => {
          console.log(res);
          if (res.data.code == "200") {
            alert(res);
            let arr = res.data.result.songs;
            for (let i = 0; i < arr.length; i++) {
              console.log(arr[i].name);
              this.foodsList.push(arr[i].name);
            }
            console.log(arr);
            console.log(this.foodsList);
          }
        });
      // Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    /* search() {
      
    }, */
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

<style lang="scss" scoped></style>
