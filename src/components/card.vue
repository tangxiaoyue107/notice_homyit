<template>
<div class="box">
      <div class="top">
        <slot name="img"><img class="aaaa" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></slot>
      </div>

      <div class="bottompart">
        <p class="date">December 4,2016</p>
        <slot name="message">
          <span>办公室部长：小红</span>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum aspernatur,</p>
          <button>给他留言</button>
        </slot>
      </div>
</div>
</template>
<style>
.box{
  width: 300px;
  height: 100%;
  /* background-color: rgb(199, 198, 198); */
  border-right-style: groove;
  border-color: rgba(255, 255, 255, 0.068);
  /* box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.336); */
  /* margin: 0 20px; */
}
.top{
  width: 100%;
  height: 40%;
  background-color: rgb(199, 197, 197);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/学生会.jpg);
  opacity: 0.85;
  background-size: 100% 100%;
}
.top img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border:0px
}
.bottompart{
  background-color: #fff;
  width: 100%;
  height: 60%;
}
.date{
  font-size: 12px;
  font-style: italic;
  font-weight: 100;
  color: rgba(128, 128, 128, 0.651);
  margin: 0 0;
  position: relative;
  top:30px;
  left:20px;
}
.bottompart span{
  position: relative;
  top:10px;
  left:20px;
  font-size: 20px;
  font-weight: 600;
}
.text{
  position: relative;
  top:15px;
  padding-left: 20px;
  width: 80%;
  margin:0 0;
  margin-right: 0px;
  text-indent: 20px;
  padding-top: 20px;
  color: rgba(128, 128, 128, 0.651);
}
.bottompart button{
  position: relative;
  top:0px;
  left:20px;
  width: 80px;
  color: white;
  background-color: #1282f1;
  height: 35px;
  border:1px;
  border-radius: 2px;
  outline: none;
  cursor: pointer
}
.bottompart button:hover{
  background-color: #0bbe38;
}
</style>

<script>
  export default {
    props:['introduction'],
  }

</script>