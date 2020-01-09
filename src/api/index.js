import Axios from "axios";
//设置默认的基本路径
Axios.defaults.baseURL = "http://127.0.0.1:9999";

//拦截器
Axios.interceptors.response.use((res)=>{
  return res.data;//在这里统一拦截结果，把结果处理成res.data
});
//获取轮播图数据
//返回的是一个promise对象
export let getSliders = ()=>{//首页轮播图
   return Axios.get("./sliders");
};

export let getHotBook = () =>{//热门图书
  return Axios.get('./hot');
}
