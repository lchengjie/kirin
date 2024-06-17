<template>
  <th v-bind="$attrs">
    <div class="resizable-header">
      <span>{{ title }}</span>
      <div class="resizable-handler" @mousedown="onMouseDown"></div>
    </div>
  </th>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  props: {
    title: String,
    width: Number,
    minWidth: Number,
    index: Number
  },
  setup(props, { emit }) {
    const isResizing = ref(false);
    const startX = ref(0);
    const startWidth = ref(0);

    const onMouseDown = (e) => {
      console.log("🚀 ~ 111 onMouseDown ~ onMouseDown:")
      isResizing.value = true;
      startX.value = e.clientX;
      startWidth.value = props.width ?? 0;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      console.log("🚀 ~ 111 onMouseMove ~ isResizing.value:", isResizing.value)
      if (!isResizing.value) return;
      const currentWidth = startWidth.value + (e.clientX - startX.value);
      if (props.minWidth && currentWidth < props.minWidth) return;
      emit('resize', { index: props.index, width: currentWidth });
    };

    const onMouseUp = () => {
      console.log("🚀 ~ 111 onMouseUp ~ onMouseUp:", isResizing.value)
      if (isResizing.value) {
        isResizing.value = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
    };

    onMounted(() => {
      document.addEventListener('mouseup', onMouseUp);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    });

    return {
      onMouseDown
    };
  }
});
</script>

<style scoped>
.resizable-handler {
  cursor: col-resize;
  width: 10px;
  background-color: red;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
