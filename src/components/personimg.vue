<template>
  <div class="demo-type">
    <div>
      <el-avatar :src='src' id="img"></el-avatar>
      <div class="message">
        <h2>{{username}}</h2>
        <h4>{{email}}</h4>        
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props:['src','username','email'],
  };
</script>
<style>
.demo-type{
  width: 100%;
  height: 35vh;
  /* background-color: rgb(0, 0, 0); */
}
.demo-type div{
  width: 100%;
  height: 100%;
}
.demo-type div span{
  position: relative;
  left:50px;
  top:50px;
  transform: scale(2);
}
.message{
  /* position: sticky; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
}
h2,h4{
  margin: 10px 0;
  color: white;
  font-weight: 200;
}
</style>