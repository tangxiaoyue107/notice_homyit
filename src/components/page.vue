<template>
  <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="totalmessages" :size="6" class="el-pagination">
  </el-pagination>
</div>
</template>
<script>
export default {
  props:['totalmessages']
}
</script>
<style>
.block{
  transform: scale(1.5);
  margin-top: 30px;
  padding-bottom: 10px;
}
.el-pagination{
  box-shadow: 2px 2px 5px gray;
  padding: 0 0;
}
</style>