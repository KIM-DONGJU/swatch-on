<template>
  <div class="mood-board-three-items-container">
    <MoodBoardItem
      v-for="moodBoardItem in marketingItems"
      :key="getMoodBoardItemKey(moodBoardItem)"
      :moodBoardItem="moodBoardItem"
    />
  </div>
</template>

<script lang="ts" setup>
import { marketingItemType } from '@interface/marketingItems';
import { MoodBoardItem } from '@/components';

defineProps<{
  marketingItems: marketingItemType[],
}>();

const getMoodBoardItemKey = (moodBoardItem: marketingItemType): string => {
  const itemId = moodBoardItem.id;
  const moodBoardItemKey = `mood-board-items-key-${itemId}`;

  return moodBoardItemKey;
};

</script>

<style lang="scss" scoped>
.mood-board-three-items-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  gap: 16px;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .mood-board-three-items-container {
    grid-row-gap: 64px;
  }
}

@media screen and (min-width: 1200px) {
  .mood-board-three-items-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
