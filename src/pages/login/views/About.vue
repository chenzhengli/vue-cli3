<template>
  <div class="about">
    <h1>nihao</h1>
  </div>
</template>
<script>

export default{
  mounted() {
    this.$axios.get("/mockdata/data.json")
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  },
}
</script>

