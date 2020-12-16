<template>
  <div class='uresgiest'>
    <Header></Header>
    <router-view></router-view>
    <span class="wz" >网易严选</span><br>
    <div class="form">
      <van-form>
        <div class="tu">
          上传头像
          <img src="../../../public/img/timg.jpg" alt="">
          <!-- <van-uploader :after-read="afterRead" v-model="file"/> -->
        </div>
        
        <van-field
          v-model="username"
          name="邮箱"
          label="手机号/邮箱"
          placeholder="请填写手机号或邮箱"
          :rules="[{ required: true, message: '请填写手机号或邮箱' }]"
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
          <van-button square block type="danger" native-type="submit" @click="onSubmit">
            注册
          </van-button>
        </div>
      </van-form>
      <div class="res">
        <span>已有账号，</span>
        <router-link to="/loging" href="">去登录 ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Header from "../login/components/header/index"
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
    onSubmit() {
      axios.post("http://localhost:3009/api/v1/auth/reg", {
          userName: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data)
           if (res.data.code == 'success') {
             alert('注册成功')
              this.$router.push({
                path: "/loging", 
              });
            }else{
              alert(res.data.message)
            } 
        });
    },
    // 图片上传之前处理
    /* handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(11111,res)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type == 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 上传图片
      UploadImage(param) {
        let uploadData = new FormData();
        uploadData.append('avatar', param.file);
         // 上传图片的接口  传上去后让后台返回一个地址
        axios.post('/upload',uploadData).then(res=>{
          this.imageUrl=res.data.path
        })
      }, */
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
.wz{
  font-size:30px;
  margin-left:120px;
}
.form{
  margin-top:80px;
}
.res{
  margin-left: 120px;

}
.tu{
  margin-left: 15px;
  font-size: 14px;
  color: #666;
}
.tu img{
  width: 100px;
  height: 100px;
  border:1px solid red;
  border-radius: 50%;
  margin-left: 16px;
}
</style>