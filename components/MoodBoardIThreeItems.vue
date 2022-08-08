<template>
  <div class="mood-board-three-items-container">
    <MoodBoardItem
      v-for="item in bundleMoodBoardItems"
      :key="getMoodBoardItemKey(item)"
    />
  </div>
</template>

<script lang="ts" setup>
import { marketingItemType } from '@/interface/marketingItems';
import { MoodBoardItem } from '@/components';


const props = defineProps<{
  bundleMoodBoardItems: marketingItemType[],
}>();

const getMoodBoardItemKey = (item: marketingItemType) => {
  const itemId = item.id;
  const moodBoardItemKey = `marketing-items-key-${itemId}`;

  return moodBoardItemKey
}

</script>

<style lang="scss" scoped>

</style>