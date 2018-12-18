<template>
  <div class="about">
    <h1>mapMutations</h1>
  </div>
</template>
<script>

export default{
  mounted() {
    this.$axios.get("/mockdata/data.json")
    .then((res)=>{
      
      console.log(1111,res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },
}
</script>

