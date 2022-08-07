<template>
  <div class="marketing-item-list-container">
    <MarketingItemsCategory
      :currentCategory="getCurrentCategory"
      :selectCategory="selectCategory"
    />
  </div>
</template>

<script lang="ts" setup>
import { getMarketingItemsJson } from '@/apis/marketingItems.js';
import { MarketingItemsCategory } from '@/components';
import { ComputedRef } from 'vue';

const route = useRoute();
const router = useRouter();

const getCurrentCategory: ComputedRef<string> = computed(() => {
  const currentCategory = route.query.item_type;
  const isNoSelectCategory = currentCategory === undefined;

  if (isNoSelectCategory) {
    return 'all';
  };

  return currentCategory as string;
});

const selectCategory = (key: string): void => {
  router.replace({
    path: route.path,
    query: {
      'item_type': key
    }
  })
}

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