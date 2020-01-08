import Axios from "axios";
//设置默认的基本路径
Axios.defaults.baseURL = "http://127.0.0.1:9999";

//获取轮播图数据
//返回的是一个promise对象
export let getSliders = ()=>{
   return Axios.get("./sliders");
};
