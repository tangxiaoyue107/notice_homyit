<template>
<div class="contactdiv">
  <header id="header">
    <div id="logo">
        <img :src="Logo" alt="">
    </div>
    <nav>
        <!--导航栏-->
        <ul class="firstHeader">
            <li>
                <a href="/index.html">首页</a>
            </li>
            <li v-for="list in firstHead" :key="list">
                <div class="all">
                    <a href="#">{{list}}</a>
                    <div class="triangle"></div>
                </div>
                <div class="borderBox">
                    <ul class="secondHeader">
                      <li>
                          <a href="/introduction.html" class="leval2">简介</a>
                      </li>
                      <li>
                          <a href="/notice.html" class="leval2">通知</a>
                      </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="/contact.html">联系我们</a>
            </li>
        </ul>
    </nav>
    <div id="avatar">
        <div class="face">
            <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
        </div>
        <div class="triangle"></div>
        <div v-if="flag" class="faceHeader" style="position:relative;top:-17px;">
                <ul>
                    <li>
                        <a href="/login.html" class="leval2">登录</a>
                        <a href="/login.html" class="leval2">注册</a>
                    </li>
                </ul>
            </div>
            <div v-else class="faceHeader">
                <ul>
                    <li>
                        <a href="/date.html" class="leval2">消息中心</a>
                        <a href="/index.html" class="leval2" @click="out">退出</a>
                    </li>
                </ul>
            </div>
    </div>
  </header>
  <div class="center-content">
    <div class="box">
      <div class="topbox"></div>
      <div class="middlebox">
        <h3>CONTACT US</h3>
        <p>欢迎您的建议，我们会认真采纳并及时反馈。</p>
      </div>
      <div class="contact">
        <h3>Leave A Message</h3>
        <div class="main-contact">
          <div class="leftbox" id="contacts">
            <div class="message">
              <input type="text" name="name" placeholder="YOUR NAME"  v-model.lazy="name">
              <input type="email" name="email" placeholder="YOUR EMAIL"  v-model.lazy="email">
            </div>
            <div class="text">
              <textarea name="text" cols="78" rows="16">YOUR MESSAGE</textarea>
              <button @click="btnclick">SUBMIT MESSAGE</button>
            </div>
          </div>
          <div class="rightbox">
            <img src="../../assets/img/homyit.png" alt="" style="width:80%;height:80%；">
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
  <div class="footerbox">
    <div class="icon">
      <img src="../../assets/img/icons/联系我们地址.png" alt="#">
    </div>
    <div class="our-message">
      <h5>Address</h5>
      <p>江西师范大学计算机信息工程学院宏奕工作室</p>
    </div>
  </div>
  <div class="footerbox">
    <div class="icon">
      <img src="../../assets/img/icons/联系我们电话.png" alt="#">
    </div>
    <div class="our-message">
      <h5>Phone Numbers</h5>
      <p>15879179865</p>
    </div>
  </div>
  <div class="footerbox">
    <div class="icon">
      <img src="../../assets/img/icons/联系我们email.png" alt="#">
    </div>
    <div class="our-message">
      <h5>Email</h5>
      <p>674115956@qq.com</p>
    </div>
  </div>
</footer>
</div>
</template>
<style src="../../assets/css/contact.css"></style>
<style src="../../assets/css/nav.css"></style>
<style>
.contactdiv{
  width: 100%;
  height: 250px;
  background-image: url(../../assets/img/icons/联系我们木板背景.jpg);
}
footer{
  background-image: url(../../assets/img/icons/联系我们木板背景.jpg);
}
</style>
<script>

export default {
  name: 'contact',
  methods:{
    btnclick(){
          alert('提交');
        }
      },
  data(){
    return{
      name:'',
      email:'',
      message:'',
      Logo: require('../../assets/img/notice.png'),
      firstHead: ['学生会', '党员服务站', '社团', '科创平台'],
      secondHead: ['简介', '通知'],
      goin: ['登录', '注册'],
      wentout: ['昵称', '消息中心', '退出'],  
      flag: false,
      imgPath: '/img/1.jpg'      
    }
  },
  
}
</script>