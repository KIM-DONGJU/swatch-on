<template>
  <div class="marketing-item-list-container">

  </div>
</template>

<script lang="ts" setup>
import { getMarketingItems } from '~~/apis/marketingItems.js';

onMounted(async () => {
  const searchRequirement = {
    itemType: 'all',
    perPage: 1,
    page: 2,
  }

  try {
    const res = await getMarketingItems(searchRequirement);
    console.log(res.data, '확인');
  } catch(error) {
    console.log(error, '에러');
  }
})


</script>

<style lang="scss" scoped>
.marketing-item-list-container {
  max-width: 1920px;
}
</style>