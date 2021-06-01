<template>
  <el-carousel :interval="4000" type="card" height="580px" class="move-card">
    <el-carousel-item v-for="item in 3" :key="item" :id="item" >
        <div class="movie-top">
          <img :src="partintroduction[item-1][String(item)]['a_image']" alt="" style="width:100%;height:100%">
          <!-- 照片显示有问题 -->
        </div>
        <!-- <slot name="activties"> -->
          <div class="movie-bottom">
            <div class="title">
              <span>{{partintroduction[item-1][String(item)]["a_date"]}}</span>
              <p>{{partintroduction[item-1][String(item)]["a_title"]}}</p>
            </div>
            <div class="more">
              <p>{{partintroduction[item-1][String(item)]["a_text"]}}</p>
            </div>
          </div>
          <div class="actpeople">
            <i class="el-icon-s-comment" id="actiocn"></i>
            <p>参加人数：{{partintroduction[item-1][String(item)]["a_number"]}}</p>
          </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .right .move-card{
    width:70%;
  }
  .right p{
    margin-bottom: 0px;
  } 
  .movie-top{
    width: 100%;
    height: 50%;
    background-color: rgb(145, 145, 145);
  }
  .movie-bottom{
    width: 100%;
    background-color: white;
    height: 230px;
  }
  .actpeople{
    width: 100%;
    height: 10%;
    background-color: black;
    display: flex;
  }
  .actpeople p{
    margin:0 0;
    color: rgba(193, 235, 130, 0.842);
    padding-left: 30px;
    padding-top: 10px;
    font-size: 20px;
  }
  .title{
    width: 100%;
    height: 50%;
    border-bottom-style: groove;
    border-color: rgba(211, 211, 211, 0.151);
  }
  .title span{
    position: relative;
    top:20px;
    left:20px;
    color: gray;
  }
  .title p{
    position: relative;
    top:10px;
    font-weight: 600;
    left: 20px;
    font-size: 27px;
    color: blue;
  }
  .more p{
    color: gray;
    padding: 5px 25px;
  }
  #actiocn{
    color: rgba(193, 235, 130, 0.842);
    font-size: 30px;
    position: relative;
    left:15px;
    top:10px;
  }
</style>

<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
  export default {
    props:['partintroduction'],
  };
</script>