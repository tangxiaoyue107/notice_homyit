<template>
  <el-carousel class="zouma" :interval="4000" type="card" height="500px">
    <el-carousel-item  v-for="(item,index) in 4" :key="item" :id="index">
      <div class="top" >
        <div class="imgdiv">
          <span style="position:relative;left:34px;top:55px;font-size:17px;">{{data[index].p_month}}</span>
          <span style="position:relative;top:80px;left:2px;color:gray;">{{data[index].p_date}}</span>
          <img src="../assets/img/icons/日历.png" alt="">
        </div>
        <div class="righttext">
          <span class="title">{{data[index].title}}</span>
          <span class="position">发布者：{{data[index].position}}/{{data[index].name}}</span>
        </div>
      </div>
      <div class="bottomdate">
        <infotime></infotime>
        <p>"小萌新们！为加强我们吉他社的全体凝聚力，方便以后的工作，大家要把每个人都加为好友。我们于2020年10月29日会在校三食堂开展迎新聚会。期待你的到来！"</p>
        <button>LEAVE A MESSAGE</button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import infotime from './infotime'
export default {
  data(){
    return {
    "error_code": 0,
    "data":
      [
         {
          "nid": 1,
          "text": "通知的内容为。。。。",
          "name": "小明",
          "position":'社长',
          "title":'吉他社招新',
          "p_month":'SEP',
          "p_date":'21st',
          "p_time":"2020-12-12",
        },
         {
          "nid": 2,
          "text": "通知的内容为。。。。",
          "name": "小花",
          "position":'社长助理',
          "title":'内部迎新聚会',
          "p_month":'OCT',
          "p_date":'29st',
          "p_time":"2020-12-12",
        },
         {
          "nid": 3,
          "text": "通知的内容为。。。。",
          "name": "小唐" ,
          "position":'成员',
          "title":'校跨年晚会表演',
          "p_month":'DEC',
          "p_date":'31st',
          "p_time":"2020-12-12",
        },
        {
          "nid": 4,
          "text": "通知的内容为。。。。",
          "name": "小龙" ,
          "position":'成员',
          "title":'吉他社内部培训',
          "p_month":'Nov',
          "p_date":'15st',
          "p_time":"2020-12-12",
        },
      ]
    }
  },
  components:{
    infotime,
  }
}
</script>
<style>
.zouma{
  width: 80%;
  margin:0 auto;
}
.imgdiv{
  padding-left: 30px;
}
.position{
  font-size: 15px;
  position: relative;
  top:10px;
  left:25px;
  color: rgb(168, 168, 168);
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.el-carousel__item{
      width: 450px;
      background-color: rgb(221, 219, 219);
      /* margin-left: 0px; */
      /* border-style: groove; */
      box-shadow: 5px 5px 5px rgba(202, 202, 202, 0.719)
    }
.top{
  width: 100%;
  height: 40%;
  background-color: rgba(252, 252, 252, 0.664);
  display: flex;
}
.top>img{
  width: 100px;
  height: 100px;
  position: relative;
  left: 30px;
  top:30px;
}
.bottomdate{
  width: 100%;
  height: 60%;
  background-color: white;
  /* margin:10px 5%; */
    display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 20px;
  align-items: center;
  
}
.bottomdate>button{
  width: 170px;
  height: 40px;
  background-color: rgb(240, 77, 18);
  position: relative;
  top:20px;
  border-radius: 5px;
  color: white;
  border:0px;
  cursor: pointer;
}
.bottomdate>button:hover{
  transform: translateY(-3px);
  transition: linear .3s;
}
.bottomdate>p{
  padding:10px 30px;
  color:rgb(148, 112, 64);
  text-indent: 20px;
  font-size: 17px;
  font-weight: 200;
}
.righttext{
  width: 90%;
  height: 100%;
  /* background-color: green; */
  /* margin-left: 50px; */
  padding-top: 40px;
  display: flex;
  flex-direction: column;

}
.title{
  font-size: 30px;
  font-weight: 200;
  padding-left: 20px;

}
</style>