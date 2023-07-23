<script setup lang='ts'>
import { ref } from 'vue';


const value = ref('')

</script>
<template>
  <div class="pay">
    微信支付
    <input type="text" v-model="value">
  </div>
</template>
<style lang='scss' scoped>
.pay {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>