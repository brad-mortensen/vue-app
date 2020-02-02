<template>
  <div class="nav-bar">
    <router-link class=" link home-link" to="/">Home</router-link>
    <router-link class="link profile-link" to="/profile">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  a {
    text-decoration: none;
    width: 10%;
  }
}
</style>
