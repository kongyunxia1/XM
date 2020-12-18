<template>
  <div class="resgiest">
    <Header></Header>
    <router-view></router-view>
    <span class="wz">网易严选</span><br />
    <div class="form">
      <van-form>
        <van-field
          v-model="username"
          name="手机号"
          label="手机号"
          placeholder="请填写手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button
            square
            block
            type="danger"
            native-type="submit"
            @click="gomine"
          >
            登录
          </van-button>
        </div>
      </van-form>
      <div class="res">
        <input type="checkbox" v-model="checked" />
        <span
          >我同意<a href="#">《服务条款》</a>和<a href=""
            >《网易隐私政策》</a
          ></span
        >
      </div>
      <div class="gores">
        <span>还没有账号，</span>
        <router-link to="/resgiest">去注册 ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../login/components/header/index";
export default {
  data() {
    return {
      checked: true,
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    gomine() {
      axios
        .post("http://localhost:3009/api/v1/auth/login", {
          userName: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.code == "success") {
            if (localStorage.getItem("token")) {
              localStorage.removeItem("token");
            }
            localStorage.setItem("token", JSON.stringify(res.data.token));
            this.$router.push({
              path: "/",
            });
          } else {
            // alert(res.data.message);
          }
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
  components: {
    Header,
  },
};
</script>

<style scoped>
.wz {
  font-size: 30px;
  margin-left: 120px;
}
.form {
  margin-top: 80px;
}
.res {
  margin-left: 10px;
}
.gores {
  margin-top: 40px;
  margin-left: 100px;
}
</style>
