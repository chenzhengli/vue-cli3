<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <img alt="Vue logo" :src="logo">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import logo from '../../../assets/logo.png';

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return {
      logo:logo,
    }
  },
  mounted() {
    console.log(121213332);
  },
};
</script>
