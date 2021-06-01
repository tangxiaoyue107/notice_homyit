<template>
  <div id="app">
    <div class="left">
      <personimg :src='src' :username='username' :email='email' class="personimg"></personimg>
      <!-- <personimg :src='../../assets/img/dz.png' :username='username' :email='email' class="personimg"></personimg> -->
      <apartment :apartment="apartment" @itemclick="changeaprt"></apartment>
      <div class="bottom">
        <button @click="back">退出</button>
      </div>
    </div>
    <div class="right" v-if="title=='发布通知'">
      <h1>• 添加消息内容</h1>
      <div class="content">
        <div class="name">
          <i class="fa fa-user"></i>
          <span>Posted by</span>
          <input type="text" v-model="n_name">
        </div>
        <div class="title">
          <span class="t">T  </span>
          <span>Title</span>
          <input type="text" v-model="n_title">
        </div>
        <div class="time">
          <i class="fa fa-play-circle-o"></i>
          <span>Start Time</span>
          <input type="text" v-model="start_time">
          <div class="tribox">时间格式如2020-07-06 17:23</div>
          <i class="fa fa-stop-circle-o facss"></i>
          <span>End Time</span>
          <input type="text" v-model="end_time">
          <div class="tribox tribox2">时间格式如2020-07-06 17:23</div>
        </div>
        <div class="place">
          <i class="fa fa-map-marker"></i>
          <span>Place</span>   
          <input type="text" v-model="place">
        </div>              
      </div>
      <div class="contentBox">
        <textarea v-model="n_content"></textarea>
      </div>

      <h1>• 通知对象</h1> 
      <div class="selectBox">
        <i class="fa fa-sitemap"></i>
        <selectbox :data="apartData" class="select"></selectbox>
      </div>
      <div class="users">
        <checkbox :users="users"></checkbox>
        <!-- <page :totalmessages="users.length" class="pages"></page> -->
      </div>
      <button class="sub">确认发布</button>
    </div>
    <div class="right" v-else-if="title=='管理成员'">
    </div>
    <div class="right" v-else-if="title=='管往期通知与留言'">
    </div>
    <div class="right" v-else-if="title=='组织宣传'">
    </div>
    <div class="right" v-else>
      <!-- 跳转页面 -->
    </div>
  </div>
</template>
<style src="../../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<script>
import apartment from '../../components/apartment.vue'
import personimg from '../../components/personimg'
import selectbox from '../../components/select'
import checkbox from '../../components/checkbox'
import page from '../../components/page'

export default {
  name: 'page1',
  components: {
    apartment,
    personimg,
    selectbox,
    checkbox,
    page,
  },
  data(){
    return{
        // src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        src:require('../../assets/img/dz.png'),
        username:'李万龙',
        email:'2173674934@qq.com',
        apartment:['发布通知','管理成员','往期通知与留言','组织宣传','账号信息'],
        title: '发布通知',
        n_title:"开会",
        n_content:'校职协全体学干大会初定于9月28日下午2:30在大学生活动中心一楼半多媒体教室举办。大家要安排好时间哦~',
        n_name:"李万龙",
        start_time:'2020-06-23 14:00',
        end_time:'2020-06-23 16:00',
        place:'惟义楼',
        apartData:[
          {"oid" : "1","label" : "学生会","children" : [{"bid":1,"label":"组织部"},{"bid":2,"label":"文艺部"}]},
          {"oid" : "2","label" : "党站","children" : [{"bid":3,"label":"组织部"},{"bid":4,"label":"文艺部"}]},
          {"oid" : "3","label" : "社团","children" : [{"bid":5,"label":"蓝天环保社"},{"bid":6,"label":"轮滑社"}]},
        ],
        users: [
          {"uid" : 1,"real_name" : "小明","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 2,"real_name" : "小红","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 3,"real_name" : "小花","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 4,"real_name" : "小叶","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 5,"real_name" : "小姜","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 6,"real_name" : "小唐","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 7,"real_name" : "小吴","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 8,"real_name" : "小周","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 9,"real_name" : "小林","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 10,"real_name" : "小小","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 11,"real_name" : "小郭","h_url": require("../../assets/img/1.jpg")},
          {"uid" : 12,"real_name" : "小秦","h_url": require("../../assets/img/1.jpg")},
        ],
        members:[],
        
    }
  },
  methods: {
    changeaprt(item){
      this.title = item;
    },
    back(){
      window.open('/index.html','_self');
    }
  },
}
</script>
<style>
.left{
  width: 22.5%;
  height: 100%;  
  position: fixed;
  background-image: url(../../assets/img/背景.jpg);
}
.left button{
  width: 50px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px; 
  background-color: white;
  color: black;
  border: none;
  outline: none;
  /* background-color: #b8b9bb; */
  /* font-weight: 600; */
  /* border:0px; */
  /* border-style: outset; */
  position: relative;
  left: 20px;
  top:100px;
  cursor: pointer;
}
.left button:hover{
  background-color: #8ACEFF;
  /* color: white; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  background-color: rgba(247, 245, 245, 0.719);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding-top: 20px;
}
.right h1{
  padding-left: 50px;
  font-weight: 400;
}
.content{
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content>div{
  /* display: inline-block; */
  margin: .5rem;
}
.content i{
  color: gray;
  display: inline-block;
  margin-right:.5rem;
}
.content span{
  color: gray;
  font-size: 14px;
}
.content input{
  border: none;
  color: gray;
  border-bottom: 1px solid gray;
  width: 80px;
  text-align: center;
  background: transparent;
}
.content input:focus{
  outline: none;
}
.t{
  font-weight: bolder;
}
.time{
  position: relative;
}
.time input{
  width: 150px;
}

.tribox{
  display: none;
  width: 160px;
  /* display: inline-block; */
  position:absolute;
  top: -40px;
  left: 60px;
  font-size: 12px;
  color: white;
  line-height: 1.25rem;
  background: rgb(211, 175, 145);
  padding: 5px;
  border-radius: 5px;
}
.tribox:after{
  content: ' ';
  border-top: 8px solid rgb(211, 175, 145);
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  position: absolute;
  bottom: -8px;
  left: 50px;
}
.tribox2{
  left: 300px;
}
.time:hover .tribox{
  display: inline-block;
}
.facss{
  margin-left: .5rem;
}
/* 内容框 */
.contentBox{
  width: 90%;
  position: relative;
  margin: 1rem auto;
}
.contentBox textarea{
  width: 100%;
  border:0;
  color: white;
  font-size: 1.25rem;
  line-height: 1.5rem;
  background-color:#A7A9A8;
  height: 250px;
  padding: 20px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  /* 不支持缩放 */
}

/* 通知对象 */
.select{
  width: 40%;
  float:none;
  vertical-align: middle;
}
.selectBox i{
  color: gray;
  margin: 0 1.5rem;
  margin-left: 4rem;
  font-size: 1.5rem;
  /* vertical-align: middle; */
}
.sub{
  width: 90px;
  height: 35px;
  margin: 2rem auto;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
}
.sub:active{
  background-color: #553232;
}
</style>