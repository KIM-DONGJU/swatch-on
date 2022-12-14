<template>
  <div class="marketing-item-list-container">
    <MarketingItemsCategory
      :currentCategory="getCurrentCategory"
      :selectCategory="selectCategory"
    />
    <div class="wrap-marketing-item-list">
      <component
        :is="viewMarketingItemsComponent(items)"
        v-for="items in getBundleMarketingItems"
        :key="getMarketingItemsKey(items)"
        :marketingItems="items"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  useRoute, useRouter,
} from 'vue-router';
import {
  Component as ComponentType, computed,
  ComputedRef, onMounted, reactive,
} from 'vue';
import {
  marketingItemType,
  requestMarketingItemsJsonType,
  responseMarketingItemsType,
} from '@/interface/marketingItems';
import {
  MarketingItemsCategory,
  MoodBoardIThreeItems,
  EyesOnSixItems,
  TypeSuggestionItemWrapper,
  TrendingOnItem,
  SpecialExhibitionItem,
} from '@/components';
import { getMarketingItemsJson } from '@/apis/marketingItems';

const route = useRoute();
const router = useRouter();

const getCurrentCategory: ComputedRef<string> = computed(() => {
  const currentCategory = route.query.item_type;
  const isNoSelectCategory = currentCategory === undefined;

  if (isNoSelectCategory) {
    return 'all';
  }

  return currentCategory as string;
});

const marketingItems: responseMarketingItemsType = reactive({
  items: [],
  page: 1,
  perPage: 1,
  total: 1,
});

const getMarketingItemsKey = (items: marketingItemType[]): string => {
  const firstItemId = items[0].id;
  const bundleMarketingItemsKey = `bundle-marketing-items-key-${firstItemId}}`;

  return bundleMarketingItemsKey;
};

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
      }

      return;
    }

    const isEyesOn = item.itemType === 'eyes_on';
    if (isEyesOn) {
      eyesOnBundler.push(item);
      const isSixEyesOn = eyesOnBundler.length === 6;

      if (isSixEyesOn) {
        bundleMarketingItems.push(eyesOnBundler);
        eyesOnBundler = [];
      }

      return;
    }

    bundleMarketingItems.push([item]);
  });

  return bundleMarketingItems;
});

const setMarketingItems = async (itemType: string): Promise<void> => {
  const searchRequirement: requestMarketingItemsJsonType = {
    itemType,
    page: 1,
  };

  try {
    const res = await getMarketingItemsJson(searchRequirement);
    const resData: responseMarketingItemsType = res.data;

    const {
      items,
      page,
      perPage,
      total,
    } = resData;

    marketingItems.items = items;
    marketingItems.page = page;
    marketingItems.perPage = perPage;
    marketingItems.total = total;
  } catch (error) {
    console.log(error, '??????');
  }
};

onMounted(() => {
  setMarketingItems(getCurrentCategory.value);
});

const selectCategory = (key: string): void => {
  const isCurrentCategory = getCurrentCategory.value === key;
  if (isCurrentCategory) {
    return;
  }

  router.replace({
    path: route.path,
    query: { item_type: key },
  });

  setMarketingItems(key);
};

const viewMarketingItemsComponent = (items: marketingItemType[]): ComponentType => {
  const { itemType } = items[0];
  const isMoodBoardItem = itemType === 'mood_board';

  if (isMoodBoardItem) {
    return MoodBoardIThreeItems;
  }

  const isEyesOnItem = itemType === 'eyes_on';
  if (isEyesOnItem) {
    return EyesOnSixItems;
  }

  const isTypeSuggestionItem = itemType === 'type_suggestion';
  if (isTypeSuggestionItem) {
    return TypeSuggestionItemWrapper;
  }

  const isTrendingOnItem = itemType === 'trending_on';
  if (isTrendingOnItem) {
    return TrendingOnItem;
  }

  const isSpecialExhibitionItem = itemType === 'special_exhibition';
  if (isSpecialExhibitionItem) {
    return SpecialExhibitionItem;
  }

  return null;
};
</script>

<style lang="scss" scoped>
.marketing-item-list-container {
  max-width: 1920px;
  padding: 0 8px;
  margin: 0 auto;

  .wrap-marketing-item-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;
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
