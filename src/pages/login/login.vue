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
          </div>
          <div class="forget">
            <a href="#" style="text-decoration: none;">忘记密码?</a>
            <div>
              <input type="checkbox" v-model="isAgree">
              <span class="remember">记住密码</span>
            </div>
          </div>
          <button type="submit" class="signUp" @click="loginnow">Login Now</button>
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
              <button id="send-email">验证码</button>
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
          <button class="signUp" id="sign-up" @click="two()">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="../../assets/css/login.css"></style>
<style src="../../assets/font-awesome-4.7.0/css/font-awesome.css"></style>
<script>

export default {
  name: 'login',
  methods:{
    one(){
      var container = document.getElementsByClassName('container')[0];
      container.classList.remove('active');
    },
    two(){
      const container = document.getElementsByClassName('container')[0];
     container.classList.add('active');
    },
    loginnow(){
      alert('登入成功');
      window.open('/index.html',"_self");
    }
  },
  data(){
    return {
      username:'',
      password:'',
      isAgree:false,
    }
  }
}
</script>
<style>
#send-email{
  width: 70px;
  height: 30px;
  cursor: pointer;
  background-color: rgb(236, 53, 53);
  border:0px;
  color: white;
  border-radius: 7px;
  font-size: 14px;
  position: relative;
  top:-3px;
  font-weight: 500;
}
#send-email:hover{
  background-color: rgb(255, 255, 255);
  color:rgb(236, 53, 53) ;
  border:groove 1.5px;
  border-color: rgb(236, 53, 53);
  transition: linear .2s;
}
</style>
