<script setup lang='ts'>
import { appContext } from '@/models/app.context';
import { appNotify, NotifyType } from '@/models/app.notify';
import { onMounted, ref } from 'vue';


onMounted(() => {
  appNotify.addListener(NotifyType.Wallpaper, updatedWallpaper, 'index');
  updatedWallpaper();
})

const wallpaper = ref('');
function updatedWallpaper(): void {
  wallpaper.value = appContext.system.data?.wallpaper;
  console.log(wallpaper.value);
}

</script>
<template>
  <div class="desktop" :style="{
    backgroundImage: 'url(' + wallpaper + ')'
  }">
  
  </div>
</template>
<style lang='scss' scoped>
.desktop {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  // background-image: url('https://img0.baidu.com/it/u=937072262,2445742246&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800');

}
</style>