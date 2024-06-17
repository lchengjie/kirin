<template>
  <template v-if="icon">
    <Icon :icon="icon" />
  </template>
  <TitleI18n :title="item?.meta?.title" />
</template>

<script lang="ts" setup>
  import { computed, type PropType } from 'vue';
  import type { RouteRecordRaw } from 'vue-router';
  import { Icon } from '@/components/basic/icon';
  import { TitleI18n } from '@/components/basic/title-i18n';

  defineOptions({
    name: 'MenuItemContent',
  });

  const props = defineProps({
    item: {
      type: Object as PropType<RouteRecordRaw>,
      default: () => ({}),
    },
  });

  const icon = computed(() => {
    if (props.item.meta?.icon) {
      return props.item.meta?.icon as string
    }
    return ''
  })

</script>
