<template>
  <div class="container">
    <div class="block">
      <el-date-picker
        v-model="value2"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
  </div>
</template>
<script>
</script>
<script>
  export default {
    data() {
      return {
        value2: '',
      };
    }
  };
</script>
