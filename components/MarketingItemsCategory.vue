<template>
  <div class="marketing-items-category-container">
    <div
      class="category"
      v-for="(category, key) in categories"
      :key="key"
    >
      {{category}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marketingItemsCategoryType } from '~~/interface/marketingItems.js';

const categories:marketingItemsCategoryType = {
  'all': 'All',
  'discover': 'Discover',
  'trending_on': 'TrendingOn',
  'mood_board': 'Fabric Moodboards',
}

</script>

<style lang="scss" scoped>
.marketing-items-category-container {
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-bottom: 8px;

  .category {
    background-color: var(--white);
    color: var(--border-dark);
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
    padding: 8px 24px;
    border-radius: 24px;
    border: 2px solid transparent;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--calm-purple);
      box-shadow: 0 4px 8px var(--calm-purple-bg-lv0);
    }
  }
}

@media screen and (max-width: 1399px){
  .marketing-items-category-container {
    gap: 16px;
  }
}

</style>