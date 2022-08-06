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

export interface marketingItemsColorType {
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
  colors: marketingItemsColorType[],
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

export interface marketingItemType {
  color: marketingItemsColorType[],
  createdAt: string,
  description: string,
  id: number
  images: marketingItemsImageType[],
  itemType: string,
  landingUrl: string,
  products: marketingItemsProductType[],
  qualities: marketingItemsQualityType[],
  sequence: number,
  sharingKey: string,
  status: string,
  subtitle: string,
  title: string,
  updatedAt: string
}

export interface responseMarketingItemsType {
  items: marketingItemType[],
  page: number,
  perPage: number,
  total: number,
}