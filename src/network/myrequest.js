import axios from 'axios'


export function myrequest(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000,
  })

  //3.发送真正的网络请求
  return instance(config)
}