<template>
  <div class="marketing-item-list-container">
    <MarketingItemsCategory
      :currentCategory="getCurrentCategory"
      :selectCategory="selectCategory"
    />
    <div class="wrap-marketing-item-list">
      <component
        v-for="items in getBundleMarketingItems"
        :is="viewMarketingItemsComponent(items)"
        :MarketingItems="items"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getMarketingItemsJson } from '@/apis/marketingItems';
import {
  MarketingItemsCategory,
  MoodBoardIThreeItems,
  DiscoveryItem,
} from '@/components';
import { ComputedRef } from 'vue';
import {
  marketingItemType,
  requestMarketingItemsJsonType,
  responseMarketingItemsType
} from '@/interface/marketingItems';

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

const getBundleMarketingItems: ComputedRef<(marketingItemType[])[]> = computed(() => {
  const bundleMarketingItems = [];
  let moodBoardBundler = [];
  let eyesOnBundler = [];

  marketingItems.items.forEach((item) => {
    const isMoodBoard = item.itemType === 'mood_board';
    if (isMoodBoard) {
      moodBoardBundler.push(item);
      const isThreeMoodBoard = moodBoardBundler.length === 3;

      if (isThreeMoodBoard) {
        bundleMarketingItems.push(moodBoardBundler);
        moodBoardBundler = [];
      };

      return;
    };

    const isEyesOn = item.itemType === 'eyes_on';
    if (isEyesOn) {
      eyesOnBundler.push(item);
      const isSixEyesOn = eyesOnBundler.length === 6;

      if (isSixEyesOn) {
        bundleMarketingItems.push(eyesOnBundler);
        eyesOnBundler = [];
      }

      return;
    };

    bundleMarketingItems.push([item]);
  });

  return bundleMarketingItems;
});

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

const viewMarketingItemsComponent = (items: marketingItemType[]): any  => {
  const { itemType } = items[0];
  const isMoodBoardItem = itemType === 'mood_board';

  if (isMoodBoardItem) {
    return MoodBoardIThreeItems
  };

  const isDiscoveryItem = itemType === 'eyes_on' || itemType === 'special_exhibition' || itemType === 'type_suggestion';
  if (isDiscoveryItem) {
    return DiscoveryItem
  }

  return null;
}
</script>

<style lang="scss" scoped>
.marketing-item-list-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 8px;

  .wrap-marketing-item-list {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

@media screen and (min-width: 768px) {
  .marketing-item-list-container {
    .wrap-marketing-item-list {
      gap: 48px;
    }
  }
}

@media screen and (min-width: 992px) {
  .marketing-item-list-container {
    .wrap-marketing-item-list {
      margin-top: 64px;
    }
  }
}


@media screen and (min-width: 1200px) {
  .marketing-item-list-container {
    padding: 0 48px;
  }
}

@media screen and (min-width: 1400px) {
  .marketing-item-list-container {
    .wrap-marketing-item-list {
      gap: 72px;
    }
  }
}
</style>