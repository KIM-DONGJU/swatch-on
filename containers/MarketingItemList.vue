<template>
  <div class="marketing-item-list-container">
    <MarketingItemsCategory
      :currentCategory="getCurrentCategory"
      :selectCategory="selectCategory"
    />
  </div>
</template>

<script lang="ts" setup>
import { getMarketingItemsJson } from '@/apis/marketingItems';
import { MarketingItemsCategory } from '@/components';
import { ComputedRef } from 'vue';
import { marketingItemsSplitCategoryType, marketingItemType, requestMarketingItemsJsonType, responseMarketingItemsType } from '@/interface/marketingItems';

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

const marketingItems: responseMarketingItemsType = reactive({
  items: [],
  page: 1,
  perPage: 1,
  total: 1,
});

const getMarketingItemsSplitCategory: ComputedRef<marketingItemsSplitCategoryType> = computed(() => {
  const marketingItemsSplitCategory: marketingItemsSplitCategoryType = marketingItems.items.reduce((result, item) => {
    result[item.itemType].push(item);

    return result;
  }, {
  'trending_on': [],
  'mood_board': [],
  'eyes_on': [],
  'type_suggestion': [],
  });

  return marketingItemsSplitCategory
});

const getMoodBoardTypeItems: ComputedRef<Array<marketingItemType[]>> = computed(() => {
  const moodBoardTypeItems = getMarketingItemsSplitCategory.value.mood_board;
  const moodBoardTypeItemsQuantity = moodBoardTypeItems.length;
  const moodBoardTypeItemsBundleThree: Array<marketingItemType[]> = [];

  for (let i = 0; i < moodBoardTypeItemsQuantity; i += 3) {
    moodBoardTypeItemsBundleThree.push(moodBoardTypeItems.slice(i, i+3));
  };

  return moodBoardTypeItemsBundleThree;
})


const setMarketingItems = async (itemType: string): Promise<void> => {
  const searchRequirement: requestMarketingItemsJsonType = {
    itemType: itemType,
    page: 1,
  };

  try {
    const res = await getMarketingItemsJson(searchRequirement);
    const resData: responseMarketingItemsType = res.data;

    const {
      items,
      page,
      perPage,
      total
    } = resData;

    marketingItems.items = items;
    marketingItems.page = page;
    marketingItems.perPage = perPage;
    marketingItems.total = total;
  } catch(error) {
    console.log(error, '에러');
  }
};

onMounted(() => {
  setMarketingItems(getCurrentCategory.value);
});

const selectCategory = (key: string): void => {
  const isCurrentCategory = getCurrentCategory.value === key;
  if(isCurrentCategory) {
    return;
  };

  router.replace({
    path: route.path,
    query: {
      'item_type': key
    }
  });

  setMarketingItems(key);
};

</script>

<style lang="scss" scoped>
.marketing-item-list-container {
  max-width: 1920px;
  margin: 0 auto;
}

@media screen and (min-width: 1200px) {
  .marketing-item-list-container {
    padding: 0 48px;
  }
}
</style>