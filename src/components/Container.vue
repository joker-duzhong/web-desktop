<script setup lang='ts'>
import { Component } from 'vue';
defineProps<{ component: Component }>();

</script>
<template>
  <div class="hope-container">
    <component></component>
  </div>
</template>
<style lang='scss' scoped></style>