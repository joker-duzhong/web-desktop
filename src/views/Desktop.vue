<script setup lang='ts'>
import { appContext } from '@/models/app.context';
import { appNotify, NotifyType } from '@/models/app.notify';
import { AppBaseInfo } from '@/models/application';
import { onMounted, ref } from 'vue';
import Tabbar from '@/components/Tabbar.vue'


onMounted(() => {
  appNotify.addListener(NotifyType.Wallpaper, updatedWallpaper, 'index');
  updatedWallpaper();
  init();
})

const shortcuts = ref([] as AppBaseInfo[]);
/** 初始化应用 */
function init(): void {
  shortcuts.value = appContext.desktop.shortcuts
}

const wallpaper = ref('');
function updatedWallpaper(): void {
  wallpaper.value = appContext.system.data?.wallpaper;
  console.log(wallpaper.value);
}

/** 点击应用 */
function onItem(app: AppBaseInfo): void {
  console.log(app);
}

</script>
<template>
  <div class="desktop flex-c" :style="{ backgroundImage: 'url(' + wallpaper + ')' }">
    <div class="main flex">
      <div class="shortcut flex-c" v-for="item in shortcuts" :key="item.appid" @dblclick="onItem(item)">
        <img class="icon" :src="item.icon" alt="">
        <div class="name ellipsis2">{{ item.name }}</div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<style lang='scss' scoped>
.desktop {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  user-select: none;

  .main {
    padding: 10px;
    width: 100%;
    flex: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }

  .shortcut {
    width: 80px;
    max-height: 80px;
    padding: 3px;
    overflow: hidden;
    margin-bottom: 20px;

    .icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .name {
      color: #fff;
      margin-top: 5px;
      width: 90%;
      line-height: 15px;
      text-align: center;
    }

    &:hover {
      background: #ffffff3b;
      overflow: visible;
      z-index: 1;

      .name {
        overflow: visible;
        // -webkit-box-orient: initial;

      }
    }
  }
}
</style>