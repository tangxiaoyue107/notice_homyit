<template>
<div class="box">
  <div class="top">
    <button class="check" style="background-color: rgba(196, 2, 2,0.9);">
        <img src="../assets/img/icons/已办.png" alt="">
      <span>已办</span>
    </button>
    <button class="check" style="background-color:rgba(196, 2, 2,0.7)">
      <img src="../assets/img/icons/待办.png" alt="">
      <span>待办</span>
    </button>
    <button class="check" style="  background-color:rgba(196, 2, 2,0.5);">
      <img src="../assets/img/icons/查看.png" alt="">
      <span>查看</span>
    </button>
  </div>
  <div class="center">
    <div class="text-more">
      <p class="p">{{notice.text}}</p>
    </div>
    <div class="infomation">
      <div class="details">
        <i class="el-icon-user-solid"></i>
        <span>已查看人数：{{notice.checked}}</span>
      </div>
      <div class="details">
        <i class="el-icon-check"></i>
        <span>已办人数：{{notice.finished}}</span>
      </div>
      <div class="details">
        <i class="el-icon-s-tools"></i>
        <span>发布人：{{notice.publisher}}</span>
      </div>
    </div>
  </div>
  <div class="bottomnotice">
    <span class="bottomnoticep" @click="changepart">More</span>
    <div class="publisher">
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
      <span>{{notice.o_name}}</span>
    </div>
  </div>
</div>
</template>
<style src="../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<style>
.box{
  width: 350px;
  margin:20px 20px;
  height: 500px;
  background-color: rgb(255, 255, 255);
  border-right-style: groove;
  border-color: rgba(255, 255, 255, 0.068);
  box-shadow: 10px 10px 10px rgb(187, 187, 187);
}
.top{
  width: 100.5%;
  height: 40%;
  /* background-color: rgb(199, 197, 197); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.check{
  width: 101%;
  height: 33.3%;
  display: flex;
  align-items: center;
  margin:0 0;
  outline: none;
  border:0px;
}
.check span{
  color: rgba(255, 255, 255, 0.863);
  font-size: 23px;
  font-weight: 100;
}
/* button:hover{
  background-color: teal;
  cursor: pointer;
} */
.check img{
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-left: 115px;
  opacity: 0.863;
}
.center{
  width: 100%;
  height: 45%;
  background-color: white;
}
.text-more{
  width: 100%;
  height: 40%;
  border-bottom-style: groove;
  border-color: rgba(128, 128, 128, 0.082);
}
.p{
  padding: 5px 20px;
  font-size: 23px;
  font-style: normal;
  color: rgba(255, 0, 0, 0.521);
  font-weight: 600;

}
.infomation{
  width: 100%;
  height: 55%;
}
.details{
  width: 101%;
  padding-top: 2px;
  height:33%;
  margin:0px 0;
  display: flex;
  align-items: center;
  opacity: 0.7;
  /* background-color: rgb(124, 85, 85); */
}
.details i{
  margin-left: 30px;
  font-size: 22px;
  color: rgba(119, 136, 153, 0.726);
}
.details span{
  margin-left: 15px;
  font-size: 17px;
    color: rgba(119, 136, 153, 0.726);
}
.bottomnotice{
  width: 101%;
  height: 15%;
  background-color: black;
}
.bottomnoticep{
  color: yellowgreen;
  font-size: 25px;
  position: relative;
  left: 20px;
  top:20px;
  margin:0 0;
  cursor: pointer;
}
.publisher{
  width: 120px;
  height: 120px;
  /* background-color: blanchedalmond; */
  position: relative;
  left: 230px;
  top:-80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.publisher img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-style: solid;
  border-color: rgba(148, 148, 148, 0.404);
}
.publisher span{
  color: white;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 200;
}
</style>

<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
  export default {
    props:['notice'],
    methods:{
      changepart(){
        this.$emit('moreclick');
      }
    }
  }

</script>