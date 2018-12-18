<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

export default{
  mounted() {
    this.$axios.get("/mockdata")
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  },
}
</script>

