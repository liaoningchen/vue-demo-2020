<template>
  <div>home
    <MHeader :back="true" >首页</MHeader>
  </div>

</template>

<script>
    import MHeader from "../base/MHeader";
    export default {
        name: "Home",
        components:{
            MHeader
        }
    }
</script>

<style scoped>

</style>
