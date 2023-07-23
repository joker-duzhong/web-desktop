<script setup lang="ts">
import { appContext } from './models/app.context';
import Desktop from './views/Desktop.vue';
appContext.system.init();

</script>

<template>
  <Desktop />
</template>

 