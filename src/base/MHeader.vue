<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-withdraw" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
        props:{
          back:{
              type:Boolean,
              default:false
          }
        },
        methods:{
            goBack(){
               this.$router.go(-1);
            }
        },
        name: "MHeader"
    }
</script>

<style scoped lang="less">
   .header{
     background: coral;
     height: 40px;
     text-align: center;
     line-height: 40px;
     font-weight: bold;
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     i{
        position: absolute;
       left: 10px;
       font-size: 20px;
     }
   }
</style>
