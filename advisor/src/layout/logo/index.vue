<template>
  <div class="logo">
    <img src="~@/assets/images/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">One Piece</h2>
  </div>
</template>

<script setup>
  defineProps({
    collapsed: {
      type: Boolean,
    },
  });
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    
    height: 64px;
    padding-left: 24px;
    line-height: 64px;

    img {
      height: 32px;
      margin-right: 8px;
    }

    .title {
      margin-bottom: 0;
      color: var(--app-primary-color);
    }
  }
</style>
