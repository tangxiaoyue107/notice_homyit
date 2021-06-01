<template>
<el-row class="tac">
  <el-col :span="5">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item  v-for="(item,index) in apartment" :key="item" :index="index" @click="classadd(item,index)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    props:['apartment'],
    data() {     
      return {
        tabPosition: 'left',
      };
    },
    methods:{
      classadd(item,index){
        var first = document.getElementsByClassName('el-menu-item');
        console.log(index);
        for (var i=0;i< first.length;i++){
          if (index == i) first[index].classList.add('is-active');
          else first[i].classList.remove('is-active');
        }
        console.log(item);
        this.$emit('itemclick',item);
    }
    }
  };
</script>
<style>
.tac{
  height: 40vh;
}
</style>


