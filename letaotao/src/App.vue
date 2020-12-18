<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    if (localStorage.getItem("userinfo")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("userinfo"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("userinfo", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style></style>
