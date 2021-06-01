<template>
  <div id="app">
      <div class="left">
        <personimg :src='src' :username='username' :email='email' class="personimg"></personimg>
        <apartment :apartment="apartment" @itemclick="changeaprt"></apartment>
        <div class="bottom">
          <i class="el-icon-back" id="back" @click="returnback()"></i>
        </div>
      </div>
      <div class="right"  v-if="title=='日程表'">
        <div class="month">
          <month></month>
        </div>
        <table>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Tursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
              <th>31</th>
              <th>
                <div class="tips green" >9：00 外语社朗读</div>
              </th>
              <th>2</th>
            </tr>
            <tr>
              <th>3</th>
              <th><div class="tips red">10：00 学生会开会</div></th>
              <th><div class="tips yellow">8：00 党站素拓会</div></th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
            <tr>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th><div class="tips red">10：00 学干第二轮面试</div></th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
            </tr>
            <tr>
              <th>17</th>
              <th>18</th>
              <th><div class="tips blue">8：00 志愿活动</div></th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
            </tr>
            <tr>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right" v-else-if="title=='账号信息'">
        <h1>账号信息</h1>
        <p>Please perfect your message.</p>
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" id="userimg">
        <div class="name">
          <span>{{username}}</span>
          <!-- <img src="../../assets/img/icons/消息中心账号信息昵称编辑.png" alt=""> -->
          </div>
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息昵称编辑.png" alt="" class="left-img">
            <span>昵称</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="username">
          </div>
        </div>
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息学号.jpg" alt="" class="left-img">
            <span>学号</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="mymes.data.stu_number">
          </div>
        </div>
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息年级.png" alt="" class="left-img">
            <span>年级</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="mymes.data.grade">
          </div>
        </div>        
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息专业.png" alt="" class="left-img">
            <span>专业</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="mymes.data.major">
          </div>
        </div>
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息组织1.png" alt="" class="left-img">
            <span>组织</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="mymes.data.organizations" disabled>
          </div>
        </div>
        <div class="grade">
          <div class="left-title">
            <img src="../../assets/img/icons/消息中心账号信息个人简介.png" alt="" class="left-img">
            <span>简介</span>
          </div>
          <div class="right-mymes">
            <input type="text" :placeholder="mymes.data.introduction">
          </div>
        </div>
        <button>提交</button>
      </div>
      <div class="right" v-else>
        <div class="apartmentbutton">
          <button class="checked button" @click="changebtn(0)">待办</button>
          <button class="button" @click="changebtn(1)">已办</button>
          <button class="button" @click="changebtn(2)">未查看</button>
        </div>
        <p>Please check all your information.Have a good time!</p>
        <infocentercard></infocentercard>
      </div>
  </div>
</template>

<script>
import apartment from '../../components/apartment.vue'
import personimg from '../../components/personimg'
import month from '../../components/month'
import infocentercard from '../../components/infocentercard'

export default {
  name: 'date',
  components: {
    apartment,
    personimg,
    month,
    infocentercard,
  },
  methods:{
    changeaprt(item){
      this.title = item;
    },
    changebtn(index){
      var button = document.getElementsByClassName('button');
      // alert("change");
      for (var i = 0;i<3;i++){
        if (i == index) button[i].classList.add("checked");
        else button[i].classList.remove("checked");
      }
    },
    returnback(){
      window.open('/index.html',"_self")
    }
  },
  data(){
        return {
        src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username:'xiaoxiao',
        email:'674115956@qq.com',
        apartment:['日程表','账号信息','吉他社','外语社','学生会办公室'],
        title:'日程表',
        mymes: {
          "error_code": 0,
          "data": {
            "image": "",
            "name": "小明",
            "grade": "2019级",
            "stu_number": 201926202151 ,
            "major": "计算机科学与技术",
            "organizations": 
                [
                  "学生会",
                  "吉他社",
                  "外语社",
                ],
            "introduction" : "otaku",
          }
        }
      }
  }
}
</script>
<style>

.tips{
  width: 90%;
  height: min-content;
  background-color: gray;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin:0 auto;
  padding:5px 5px;
  border-radius: 5px;
}
.green{
  background-color: yellowgreen;
}
.red{
  background-color: tomato;
}
.yellow{
  background-color: rgb(255, 208, 0);
}
.blue{
  background-color: rgb(0, 174, 255);
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
  position: absolute;
  top:660px;
  left:30px;
}
#back:hover{
  color: rgb(158, 219, 243);
  cursor: pointer;
  transform: scale(3.5);
  transition: linear.2s;
}
.right h1{
  margin:0 0;
  font-size: 40px;
  font-weight: 300;
  text-align: center;
}
.right>p{
  margin-bottom: 40px;
  color: gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: italic;
  text-align: center;
}
.month{
  margin:20px auto;
}
.right>img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border-style: outset;
  margin: 0 auto;
  margin-bottom: 0px;
}
.grade{
  margin:10px 0;
  display: flex;
}
.right-mymes{
  width: 750px;
  height: 60px;
  /* background-color: gray; */
  margin-left: 20px;
}
.right-mymes input{
  width: 750px;
  height: 60px;
  background: rgba(226, 225, 225, 0.658);
  outline: none;
  border:0px;
  padding-left: 30px;
  /* padding-top: 5px; */
  color: black;
  font-size: 20px;
  border-radius: 3px;
}
.right-mymes ::-webkit-input-placeholder{
    color: black;
    font-size: 20px;
}
.right>button{
  width: 150px;
  height: 35px;
  margin:0 auto;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 0px;
  background-color: rgb(223, 67, 67);
  color:white;
  cursor: pointer;
}
.right>button:hover{
  background-color: yellowgreen;
  color:white;
  cursor: pointer;
}
.left-img{
  width: 30px;
  height: 30px;
  border-radius: 50%;

}
.left-title{
  width: 200px;
  height: 60px;
  border-right-style: groove;
  border-color: red;
    margin-left: 100px;
    display: flex;
    align-items: center;
}
.left-title span{
  color: black;
  font-size: 25px;
  font-weight: 500;
  margin-left: 30px;
}
.tac .el-col-5{
  width: 100%;
  background-color: white;
}
.right{
  float: right;
  /* padding-top: 20px; */
  width:77.5%;
  height:100vh;
  background-color: rgba(224, 224, 224, 0.219);
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  padding-top: 40px;
}
.name{
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.name span{
  color: rgb(116, 115, 115);
  font-weight: 500;
  font-size: 22px;
}

.right table{
  background-color: rgb(212, 212, 212);
  margin: 0 20px;
}
.right thead,.right tbody{
  height: min-content;
  width: min-content;
}
.right thead tr th{
  width: 50px;
  height: 30px;
  background-color: rgba(230, 228, 228, 0.774);
}
.right tbody tr th{
  color: rgb(206, 205, 205);
  font-size: 15px;
  font-weight: 400;
  width: 150px;
  height: 110px;
  background-color: rgb(255, 255, 255);
  
}
.right tbody tr th div:hover{
  cursor: pointer;
}
.month{
  position: relative;
  margin-bottom: 20px;
}
.apartmentbutton{
  display: flex;
  align-items: center;
  justify-content: center;
}
.button{
  margin:10px 20px;
  width: 100px;
  height: 35px;
  background-color: rgb(223, 79, 79);
  border-radius: 5px;
  border:0px;
  color: white;
  font-size: 17px;
  box-shadow: 3px 3px 5px rgb(175, 175, 175);
  cursor: pointer;
  outline: none;
}
.checked{
  background-color: rgb(109, 173, 13);
}
</style>