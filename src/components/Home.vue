<template>
  <div>
    <MHeader :back="true" >首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
    </div>

  </div>

</template>

<script>
    import MHeader from "../base/MHeader";
    import Swiper from "../base/Swiper";
    import {getSliders} from "../api";

    export default {
        name: "Home",
        components:{
            MHeader,Swiper
        },
        async created() {
            //给data起别名 对象中的属性名字必须和得到的结果名称一致
          let {data:sliders} =   await getSliders();
          console.log(sliders);
          this.sliders = sliders;
        },
        data(){
            return{
                sliders:[]
            }
        }
    }
</script>

<style scoped>

</style>
