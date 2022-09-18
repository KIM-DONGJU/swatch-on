<template>
  <div class="marketing-items-category-container">
    <div
      v-for="(category, key) in categories"
      :key="key"
      class="marketing-items-category"
      :class="getSelectCategoryStyle(key)"
      @click="selectCategory(key)"
    >
      {{ category }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  marketingItemsCategoryType,
  marketingItemsSelectCategoryStyleType,
} from '@/interface/marketingItems';

const categories: marketingItemsCategoryType = {
  all: 'All',
  discover: 'Discover',
  trending_on: 'TrendingOn',
  mood_board: 'Fabric Moodboards',
};

const props = defineProps<{
  currentCategory: string,
  selectCategory: (key: string) => void,
}>();

const getSelectCategoryStyle = (key: string): marketingItemsSelectCategoryStyleType => {
  const isSelectCategory = props.currentCategory === key;
  const selectCategoryStyle = { 'select-category': isSelectCategory };

  return selectCategoryStyle;
};

</script>

<style lang="scss" scoped>
.marketing-items-category-container {
  display: flex;
  gap: 32px;
  align-items: center;
  padding-bottom: 8px;
  margin-top: 32px;

  .marketing-items-category {
    padding: 8px 24px;
    font-size: 14px;
    font-weight: 600;
    color: var(--border-dark);
    white-space: nowrap;
    cursor: pointer;
    background-color: var(--white);
    border: 2px solid transparent;
    border-radius: 24px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);

    &:hover {
      border: 2px solid var(--calm-purple);
      box-shadow: 0 4px 8px var(--calm-purple-bg-lv0);
    }
  }

  .select-category {
    color: var(--white);
    background: var(--calm-purple);
  }
}

@media screen and (max-width: 1399px){
  .marketing-items-category-container {
    gap: 16px;
  }
}

</style>
