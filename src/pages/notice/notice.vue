<template>
  <div id="xixi">
    <div class="left">
      <personimg :src='src' :username='username' :email='email' class="personimg"></personimg>
      <apartment :apartment="apartment"></apartment>
      <div class="bottom">
        <i class="el-icon-back" id="back" @click="returnback"></i>
      </div>
    </div>
    <div class="right">
      <h1>通知</h1>
      <p class="small-text">Recieve your message.</p>
      <div class="notice-part">
        <infocard style="display:inline-block;" v-for="(item,index) in notice.data" :key="item" :index="index" :notice="notice.data[String(index)]" :id="index" @moreclick="changepage"></infocard>
      </div>
      <pages :totalmessages="notice.messages"></pages>
      <div class="morepage">
        <div class="boxcover">
          <div class="leftcover">
            <h2>Content</h2>
            <h4>请各位学干通知组员迎新晚会排练。</h4>
            <p>可爱的学生会办公室小伙伴们，紧张的跨年校迎新晚会就要开始啦！我们要开始热火朝天的排练了！请同学们在2019年12月25日下午2：00在教学楼四栋进行节目排练。</p>
            <div class="bottom-mes">
              <div class="onebox">
                <i class="fa fa-map-pin"></i>
                <span>Place:教学楼四栋</span>
              </div>
              <div class="onebox">
                <i class="fa fa-bell"></i>
                <span>Organization:学生会</span>
              </div>
              <div class="onebox">
                <i class="fa fa-codepen"></i>
                <span>Department:办公室</span>
              </div>
              <div class="onebox">
                <i class="fa fa-leaf"></i>
                <span>Time:2020-12-25 14：00</span>
              </div>
            </div>
          </div>
          <div class="rightcover">
            <div class="rightimg">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
              <h2>小花</h2>
            </div>
            <button class="over">查看完毕</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style src="../../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<script>
import apartment from '../../components/apartment.vue'
import personimg from '../../components/personimg'
import infocard from '../../components/infocard'
import pages from "../../components/page"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: 'page3',
  data(){
      return {
        src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username:'xiaoxiao',
        email:'674115956@qq.com',
        apartment:['学生部','办公室','文艺部','体育部','女生部'],
        notice:{
          "error_code": 0,
          "messages":60,
          "totle_page":"5",
          "data":{
          "1":
            {
            "m_id" : 1,
              "image": "",
              "o_name" : "办公室",
              "publisher": "小花",
              "checked": 4,
              "finished": 70 ,
              "text": "请各位学干通知组员迎新晚会排练。",
              "status_code":1,
            },
          "2":
            {
              "m_id" : 1,
              "image": "",
              "o_name" : "办公室",
              "publisher": "小草",
              "checked": 5,
              "finished": 10 ,
              "text": "请各位学干通知上交报名表。",
              "status_code":1,
            },
          '3':
            {
              "m_id" : 1,
              "image": "",
              "o_name" : "办公室",
              "publisher": "小强",
              "checked": 8,
              "finished": 30 ,
              "text": "请各位学干通知明天早上八点集合。",
              "status_code":1,
            },
          '4':
            {
              "m_id" : 1,
              "image": "",
              "o_name" : "办公室",
              "publisher": "小火",
              "checked": 7,
              "finished": 15 ,
              "text": "请各位学干通知相应组员团建时间。",
              "status_code":1,
            },
        }
        }
      }},
  components: {
    apartment,
    personimg,
    infocard,
    pages,
  },
  methods:{
    changepage(){
      var more = document.getElementsByClassName('morepage')[0];
      more.style.display = 'flex';
      var over = document.getElementsByClassName('over')[0];
      over.onclick=function(){
        more.style.display = 'none';
      }

    },
    returnback(){
      window.open('/index.html','_self');
    }
  }
}
</script>
<style>
.morepage{
  width: 100%;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.521);
  position:fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.boxcover{
  width: 700px;
  height: 400px;
  background-color: white;
  display: flex;
  /* padding-bottom: 50px; */
}
.leftcover{
  width: 70%;
  background-color: rgb(253, 253, 253);
  height: 100%;
  padding:0 20px;
}
.leftcover h2{
  color:rgba(245, 72, 72, 0.795);
  font-size: 30px;
  margin:20px auto;
  text-align: center;
}
.leftcover h4{
  color:rgba(0, 0, 0, 0.795);
  font-size: 20px;
  margin:20px auto;
  text-align: center;
  font-weight: 700;
}
.leftcover p{
  text-indent: 30px;
  margin-top: 50px;
}
.bottom-mes{
  width: 100%;
  height: 80px;
  margin-top: 40px;
  margin-left: 15px;
}
.rightcover{
  width: 30%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.801);
  margin:0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rightcover button{
  width: 90px;
  height: 30px;
  border-radius: 15px;
  border:0px;
  background-color: rgb(235, 81, 81);
  color:white;
  cursor: pointer;
  outline: none;
}
.onebox{
  width: 50%;
  height: 50%;
  background-color: #fff;
  display: inline-block;
  opacity: 0.7;
  color:gray;
}
.onebox span{
  margin-left: 10px;
}
.rightimg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  flex-direction: column;
}
.rightimg img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.left{
  width: 22.5%;
  height: 100%;  
  position: fixed;
  background-image: url(../../assets/img/背景.jpg);
}
#back{
  color: white;
  transform: scale(2.5);
  position: relative;
  top:120px;
  left:30px;
}
#back:hover{
  color: rgb(158, 219, 243);
  cursor: pointer;
  transform: scale(3.5);
  transition: linear.2s;
}
#xixi {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  /* display: flex; */
  margin:0 0;

}
.tac .el-col-5{
  width: 100%;
  background-color: white;
}
.right{
  float: right;
  width:77.5%;
  height:min-content;
  background-color: rgba(224, 224, 224, 0.445);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding-top: 20px;
}
.right h1{
  margin:0 0;
  font-size: 40px;
  font-weight: 300;
}
.small-text{
  margin-bottom: 40px;
  color: gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: italic;
}
.notice-part{
  width: 100%;
  height: min-content;

}
</style>