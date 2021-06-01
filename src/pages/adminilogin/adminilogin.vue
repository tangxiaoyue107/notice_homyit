<template>
      <div class="container" >
    <!-- 登录页面 -->
    <div class="form-container sign-in-container" id="Login-container">
      <form onsubmit="return false;" method="POST">
        <h2>登录</h2>
        <p>为您制作最简单的消息表单，和复杂说拜拜</p>
        <p>WELCOME</p>
        <div class="social-container">
          <div class="input-box" style="display: flex" >
            <i class="fa fa-user"></i>
            <div class="icon-right">
              <span>用户名</span>
              <input type="text" name="username" id='username'  v-model="username" autocomplete="off">
            </div>
          </div>
          <div class="input-box" style="display: flex" >
            <i class="fa fa-unlock-alt"></i>
            <div class="icon-right">
              <span>密码</span>
              <input type="password" name="password" id="password"  v-model="password" autocomplete="off">            
            </div>
          </div>
          <div class="input-box" style="display: flex" >
            <i class="fa fa-sitemap"></i>
            <div class="icon-right">
              <!-- <span>部门</span> -->
              <selectlogin :data="data"></selectlogin>
            </div>
          </div>
          </div>
          <div class="forget">
            <a href="#" style="text-decoration: none;">忘记密码?</a>
            <div>
              <input type="checkbox" v-model="isAgree">
              <span class="remember">记住密码</span>
              
            </div>
          </div>
          <button type="submit" class="signUp" @click="adminifor">Login Now</button>
      </form>
    </div>
      


    <!-- 注册页面 -->
    <div class="form-container sign-up-container" id="sign-container">
      <form>
        <h2>注册</h2>
        <p>为您制作最简单的消息表单，和复杂说拜拜</p>
        <p>WELCOME</p>
        <div class="social-container" style="margin-top: 10px;">
          <div class="input-box" style="display: flex" >
            <i class="fa fa-user"></i>
            <div class="icon-right">
              <span>用户名</span>
              <input type="text" name="username" id='username'  v-model="username" autocomplete="off">
            </div>
          </div>
          <div class="input-box" style="display: flex" >
            <i class="fa fa-envelope-square"></i>
            <div class="icon-right">
              <span>邮箱</span>
              <input type="email" name="email" id='email'  v-model="email" autocomplete="off">
            </div>
          </div>
          <div class="input-box" style="display: flex" >
            <i class="fa fa-unlock-alt"></i>
            <div class="icon-right">
              <span>密码</span>
              <input type="password" name="password" id="password"  v-model="password" autocomplete="off">            
            </div>
          </div>
          <div class="input-box" style="display: flex" >
            <i class="fa fa-unlock-alt"></i>
            <div class="icon-right">
              <span>确认密码</span>
              <input type="password" name="password" id="password"  v-model="check_password" autocomplete="off">                   
            </div>
          </div>
          <button type="submit" class="signUp">Create My Account</button>
        </div>
      </form>
    </div>


    <!-- 覆盖容器 -->
    <div class="overlay-container">
      <div class="overlay">
        <!-- 左边覆盖 -->
        <div class="overlay-panel overlay-left-container">
          <h2>Welcome back！</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button class="signUp" id="sign-in" @click="one()">重新登录</button>
        </div>

        <!-- 右边覆盖 -->
        <div class="overlay-panel overlay-right-container">
          <h2>Hello Friends！</h2>
          <p>Enter your personal details and start journey with us</p>
          <button class="signUp" id="sign-up">WELCOM</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../../assets/css/login.css"></style>
<style src="../../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<script>
import selectlogin from "../../components/select"
export default {
  name: 'login',
  components:{
    selectlogin,
  },
    data(){
          return {
          "code": 200,
          "message":"success",
          "username":"",
          "password":"",
          "data": [
              {
                "oid" : "1",
                "label" : "学生会",
                "children" : [
                        {
                            "bid":1,
                            "label":"组织部"
                        },
                        {
                            "bid":2,
                            "label":"文艺部"
                        }
                ]
            },
            {
                "oid" : "2",
                "label" : "党站",
                "children" : [
                        {
                            "bid":3,
                            "label":"组织部"
                        },
                        {
                            "bid":4,
                            "label":"文艺部"
                        }
                ]
            }
          ]
          }
        },
  methods:{
    one(){
      // alert('one');
      var container = document.getElementsByClassName('container')[0];
      // console.log(container);
      container.classList.remove('active');
    },
    two(){
      // alert('two');
      const container = document.getElementsByClassName('container')[0];
      // console.log(container);
     container.classList.add('active');
    },
    adminifor(){
      window.open('/admini.html','_self');
    }
  }
}
</script>
<style>
  .overlay{
  left: -100%;
  position: absolute;
  width: 200%;
  height: 100%;
  background-image: linear-gradient(to top,#1d6bf1,#1acffc);
}
.signUp{
  background-color:#1d6bf1;
  width: 250px;
  height: 40px;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  outline:none;
  border: 1px solid transparent;
  font-size: 15px;
  font-weight: 100;
  margin-top: 20px;
}
.signUp:hover{
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  color: #1d6bf1;
  border-color: #1d6bf1;
  transition: linear .15s;
  /* transform: scale(.9); */
}
.overlay-panel button:hover{
  background-color: white;
  color: #1d6bf1;
  transition: linear .05s;
}
</style>