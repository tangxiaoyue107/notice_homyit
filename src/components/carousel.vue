<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(img,index) in imgList" :key="index">
                        <h3><img v-bind:src="img.url"></h3>
                    </el-carousel-item>
                </el-carousel>
    </div>
</template>
<script>
export default {
    name:'carousel',
    data() {
        return {
            imgList:[
                {
                    url:require('../assets/img/lanqiu.jpg')
                },{
                    url:require('../assets/img/banner2.jpg')
                },
                {
                    url:require('../assets/img/banner1.jpg')
                }
            ],
        }
    },
}
</script>
<style >
/* @import '//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css'; */
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>