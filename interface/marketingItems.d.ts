import { AllowedComponentProps } from 'vue'

export interface requestMarketingItemsType {
  itemType: string,
  perPage: number,
  page: number,
};

export interface requestMarketingItemsJsonType {
  itemType: string,
  page: number,
};

export interface marketingItemsImageType {
  cation: string,
  large: string,
  medium: string,
  small: string,
}

export interface marketingItemsProductColorType {
  colorType: string,
  description: string,
  hexcode: string,
  id: number,
  name: string,
  sequence: number,
  status: string,
}

export interface marketingItemsQualityContentsType {
  abbreviation: string,
  id: number,
  name: string,
  ratio: number,
}

export interface marketingItemsQualityMetricType {
  width: number,
  weight: number,
  thickness: number,
}

export interface marketingItemsQualityPriceDetailType {
  discounted: boolean,
  printingPrice: number,
  salePrice: number,
  salePriceBeforeDiscount: number,
}

export interface marketingItemsQualityPriceType {
  bulk: marketingItemsQualityPriceDetailType,
  wholesale: marketingItemsQualityPriceDetailType,
}

export interface marketingItemsQualityVideoType {
  path: string,
  thumbnail: string,
  videoType: string,
}

export interface marketingItemsQualityType {
  bulkMoq: number,
  code: string,
  contents: marketingItemsQualityContentsType[],
  dtpOnly: boolean,
  id: number,
  landingUrl: string,
  metric: marketingItemsQualityMetricType,
  price: marketingItemsQualityPriceType,
  printable: boolean,
  productsNum: number,
  quoteMoq: number,
  status: string,
  stretchability: string,
  supplierId: number,
  video: marketingItemsQualityVideoType,
  wholesaleMoq: number,
}

export interface marketingItemsProductType {
  code: string,
  colors: marketingItemsProductColorType[],
  id: number,
  image: marketingItemsImageType,
  labelColorNumber: string,
  newColor: boolean,
  printable: boolean,
  purchasePriceSurplus: number,
  quality: marketingItemsQualityType,
  status: string,
  stock: null | string,
}

export interface marketingItemsColorType {
  hex: string,
  pantoneNumber: string,
}

export interface marketingItemType {
  id: number
  sharingKey: string,
  sequence: number,
  status: string,
  itemType: string,
  title: string,
  subtitle: string,
  description: string,
  landingUrl: string,
  volume?: number,
  createdAt: string,
  updatedAt: string,
  color: marketingItemsColorType[],
  images: marketingItemsImageType[],
  products: marketingItemsProductType[],
  qualities: marketingItemsQualityType[],
}

export interface responseMarketingItemsType {
  items: marketingItemType[],
  page: number,
  perPage: number,
  total: number,
}

export interface marketingItemsSplitCategoryType {
  'trending_on': marketingItemType[],
  'mood_board': marketingItemType[],
  'eyes_on': marketingItemType[],
  'type_suggestion': marketingItemType[],
}

export interface marketingItemsCategoryType {
  'all': string,
  'discover': string,
  'trending_on': string,
  'mood_board': string,
}

export interface marketingItemsSelectCategoryStyleType {
  'select-category': boolean,
}