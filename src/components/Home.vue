<template>
  <div>
    <MHeader :back="true" >首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
      <div class="container">
        <h3>热门图书</h3>
        <ul>
          <li v-for="hot in hotBooks">
            <img :src="hot.bookCover" alt="">
            <b>{{hot.bookName}}</b>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
    import MHeader from "../base/MHeader";
    import Swiper from "../base/Swiper";
    import {getSliders,getHotBook} from "../api";

    export default {
        name: "Home",
        components:{
            MHeader,Swiper
        },
         created() {
            this.getSlider();//获取轮播图
             this.getHot();//获取首页图书
        },
        data(){
            return{
                sliders:[],
                hotBooks:[]
            }
        },
        methods:{
            async getSlider(){
                //给data起别名 对象中的属性名字必须和得到的结果名称一致
                this.sliders = await getSliders();
            },
            async getHot(){
                this.hotBooks = await getHotBook();
            }
        }
    }
</script>

<style scoped lang="less">
  h3{
    color: #999;
    padding: 5px 0;
  }
  .container{
    width: 90%;
    margin: 0 auto;
    ul{
      display: flex;
      flex-wrap: wrap;/*默认不换行*/
      padding-bottom: 10px;
      li{
        width: 50%;
        text-align: left;
        margin: 5px 0;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
