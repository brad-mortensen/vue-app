<template>
  <div class="landing-page">
    <p>{{ title }} Component</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => {
    return {
      title: "HomePage"
    };
  }
};
</script>

<style lang="less" scoped>
.landing-page {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-color: rgb(51, 51, 51);
  background-size: cover;
  background-position: center center;
  height: 650px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  flex-flow: column nowrap;
}
</style>
