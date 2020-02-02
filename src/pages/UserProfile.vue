<template>
  <p>{{ title }} Component</p>
</template>

<script>
export default {
  name: "UserProfile",
  components: {},
  data: () => {
    return {
      title: "UserProfile"
    };
  },

  mounted() {
    console.log(this.$route);
  }
};
</script>

<style></style>
