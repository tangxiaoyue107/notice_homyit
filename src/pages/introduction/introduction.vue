<template>
  <div id="app" >
    <div class="left">
      <personimg :src='src' :username='username' :email='email' class="personimg"></personimg>
      <apartment :apartment="apartment"></apartment>
      <div class="bottom">
        <i class="el-icon-back" id="back" @click="returnback()"></i>
      </div>
    </div>
    <div class="right">
      <h1>简介</h1>
      <p>Go where you want to go.Welcome to join us.</p>
      <div class="big-intro">
        <Card>
          <div slot="img" class="headimg">
          </div>
          <div slot="message">
            <span>{{introduction.data.department_name}}</span>
            <p class="text">欢迎你的加入！</p>
            <button>留言申请</button>
            <button style="margin-left:100px">邀请码加入</button>        
          </div>

        </Card>
        <div class="moreintro">
          <p>{{introduction.data.text}}</p>
        </div>
      </div>
      <div class="principal">
        <div v-for="(item,index) in introduction.data.members" :key="item" :index="index">
          <Card>
            <div slot="img">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
            </div>
            <div slot="message">
              <span>{{item[String(index+1)]["member_position"]}}:{{item[String(index+1)]["member_name"]}}</span>
              <p class="text">{{item[String(index+1)]["m_text"]}}</p>
              <button>给他留言</button>  
            </div>

          </Card>
        </div>
        
      </div>
      <h1>往期活动</h1>
      <p>Please watch our past activities.</p>
      <activities :partintroduction="introduction.data.activities">
        <div slot="activties">
            <div class="movie-bottom">
            <div class="title">
              <span>31 July,2020</span>
              <p>素拓活动</p>
            </div>
            <div class="more">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex sint iste, a dicta doloremque, voluptatibus iure vero </p>
            </div>
          </div>      
        </div>
      </activities>
    </div>

  </div>
</template>

<script>
import apartment from '../../components/apartment.vue'
import personimg from '../../components/personimg'
import Card from '../../components/card'
import activities from '../../components/activities'

export default {
    name: 'introduction',
    methods:{
        returnback(){
          window.open('/index.html','_self');
      }
      },
    data(){
      return {
        src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username:'xiaoxiao',
        email:'674115956@qq.com',
        apartment:['学生部','办公室','文艺部','体育部','女生部'],
        introduction:
          {
          "error_code": 0,
          "data": {
            "department_name": "办公室",
            "text": "学生会办公室是在校团委领导下、学校学生会指导下，隶属于学校学生会的学生组织学生会下设的部门之一。学习部主管学风建设和学术活动，以提高同学们学习意识、营造校园学习氛围为目的，开展各种同学喜闻乐见的活动，筹办学术讲座，了解反馈广大同学在学习方面的意见和要求，在师生之间搭起一座桥梁，促进师生的相互交流。",
            "minister": "吴系挂",
            "members": [
                {'1':{

                          "m_image":"",
                          "member_name":"小龙",
                          "member_position":"办公室部长",
                          "m_text" : "我是学生会办公室部长小龙",
                }},
                {'2':{

                          "m_image":"",
                          "member_name":"小吴",
                          "member_position":"办公室副部长",
                          "m_text" : "我是学生会办公室副部长小吴",
                }},
                {'3':{

                          "m_image":"",
                          "member_name":"小唐",
                          "member_position":"办公室副部长",
                          "m_text" : "我是学生会办公室副部长小唐",
                }}
              ],
            "activities":[
                     {'1':{
                          "a_image" : require("../../assets/img/井冈山.jpg"),
                          "a_date" : "2020-03-05",
                          "a_title" : "井冈山旅游",
                          "a_text" : "这次我们去了位于吉安市的井冈山革命博物馆，了解了井冈山精神，大家培养了团结的意识为以后的工作奠定了基础。",
                          "a_number" :15,
                      }},
                      {'2':{
                          "a_image" : require("../../assets/img/爬山.jpg"),
                          "a_date" : "2020-04-10",
                          "a_title" : "狮子峰爬山",
                          "a_text" : "在春天，我们举办了爬山活动，为的是动员大家在繁杂的工作中记得劳逸结合锻炼身体。这次活动成功举行，大家都很愉快。",
                          "a_number" :30,
                      }},
                        {'3':{
                          "a_image" : require("../../assets/img/游船.jpg"),
                          "a_date" : "2020-06-03",
                          "a_title" : "八一公园游船",
                          "a_text" : "在这个学期快结束的同时我们举行了最后一次团建活动，我们来到了八一公园游船，感受难得的欢乐时光。",
                          "a_number" :20,
                      }}
                    ],
                  }
          },
          }
        },
        
  components: {
    apartment,
    personimg,
    Card,
    activities,
  },

}
</script>

<style>
.headimg{
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/学生会.jpg);
  background-size: 100% 100%;
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
.right p{
  margin-bottom: 40px;
  color: gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  /* font-style: italic; */
}
.big-intro{
  width: 970px;
  height: 370px;
  display: flex;
  border-style: groove;
  border-color: rgba(241, 240, 240, 0.041);
  box-shadow: 5px 5px 5px rgba(128, 128, 128, 0.336);
}
.moreintro{
  width: 670px;
  height: 100%;
  background-color: white;
}
.moreintro p{
  font-size: 20px;
  font-weight: 200;
  padding:20px 30px;
  text-indent: 40px;
  /* display: none; */
}
.principal{
  margin-top: 20px;
  width: 970px;
  height: 370px;
  /* background-color: rgb(230, 123, 123); */
  display: flex;
  justify-content: space-between;
  margin-bottom: 170px;
}
</style>