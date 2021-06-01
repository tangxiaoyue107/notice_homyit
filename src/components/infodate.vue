<template>
  <div class="block">
    <!-- <span class="demonstration">默认</span> -->
    <el-date-picker
      v-model="value1"
      type="datetime"
      >
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
      };
    }
  };
</script>
<style>
  .block{
    display: inline-block;
  }
</style>