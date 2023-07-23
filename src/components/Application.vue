<script lang='ts' setup>
import { hope } from '@/models/hope';
import VueDragResizeRotate from "@gausszhou/vue3-drag-resize-rotate";


const props = withDefaults(defineProps<{
  appid: string, el: Object,
  x?: number, y?: number,
  w?: number, h?: number,
  draggable?: boolean,

  minWidth?: number,
  minHeight?: number,
  maxWidth?: number,
  maxHeight?: number,
  style?: string,
}>(), {
  w: 700,
  h: 500,
  draggable: true,
  style: 'border: none;background: #fff;'
})

function destroyApp(): void {
  hope.destroyApp(props.appid)
}



</script>
<template>
  <VueDragResizeRotate :minWidth="minWidth" :minHeight="minHeight" :maxWidth="maxWidth" :maxHeight="maxHeight" :w="w"
    :h="h" :style="style" drag-handle=".drag-handle" parent :key="appid">
    <div class="drag flex-c">
      <div class="drag-handle">
        <div class="title flex">
          <div class="left"> {{ appid }} </div>
          <div class="right">
            <!-- <icon-minus class="icon" @click.stop="isminimize = true" />
            <icon-fullscreen class="icon" v-if="windowSpecification === Drag.Specification.Free"
              @click.stop.native="changeSpecification()" />
            <icon-fullscreen-exit class="icon" v-else @click.stop.native="changeSpecification()" /> -->
          </div>
        </div>
      </div>
      <component :is="el" />
    </div>
  </VueDragResizeRotate>
</template>
<style lang='scss' scoped></style>