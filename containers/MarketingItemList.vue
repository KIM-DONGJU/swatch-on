<template>
  <div class="marketing-item-list-container">
    <MarketingItemsCategory />
  </div>
</template>

<script lang="ts" setup>
import { getMarketingItemsJson } from '@/apis/marketingItems.js';
import { MarketingItemsCategory } from '@/components';

onMounted(async () => {
  const searchRequirement = {
    itemType: 'all',
    page: 2,
  }

  try {
    const res = await getMarketingItemsJson(searchRequirement);
    console.log(res.data, '확인');
  } catch(error) {
    console.log(error, '에러');
  }
})


</script>

<style lang="scss" scoped>
.marketing-item-list-container {
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
  .marketing-item-list-container {
    padding: 0 48px;
  }
}
</style>