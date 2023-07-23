<script lang='ts' setup>
import { appContext } from '@/models/app.context';
import { AppBaseInfo } from '@/models/application';
import { onMounted, ref } from 'vue';

onMounted(() => {
  init();
})

const shortcuts = ref([] as AppBaseInfo[]);
/** 初始化应用 */
function init(): void {
  shortcuts.value = appContext.desktop.shortcuts
}

</script>
<template>
  <div class="tabbar flex">
    <div class="item system">
      <img class="icon" src="@/assets/icons/system.svg" alt="">
    </div>
    <div class="item" v-for="item in shortcuts" :key="item.appid">
      <img class="icon" :src="item.icon" alt="">
    </div>

  </div>
</template>
<style lang='scss' scoped>
.tabbar {
  width: 100%;
  background: #ffffffe6;


  .item {
    padding: 15px;
    cursor: pointer;

    &:hover {
      background: #fff;
    }

    .icon {
      width: 30px;
      height: 30px;
    }
  }

  .system {
    margin-right: 20px;
  }
}
</style>