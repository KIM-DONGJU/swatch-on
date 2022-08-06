import axios,
{ AxiosResponse } from 'axios';
import {
  requestMarketingItemsType,
  requestMarketingItemsJsonType
} from '@/interface/marketingItems';
import endpoints from './endpoints';

export const getMarketingItems = (requirement: requestMarketingItemsType): Promise<AxiosResponse> => {
  const {
    itemType,
    perPage,
    page
  } = requirement;

  const url = `${endpoints.marketingItems}?itemType=${itemType}&perPage=${perPage}&page=${page}`;
  const res = axios.get(url);

  return res;
};

export const getMarketingItemsJson = (requirement: requestMarketingItemsJsonType): Promise<AxiosResponse> => {
  const {
    itemType,
    page
  } = requirement;

  const url = `${endpoints.marketingItemsJson}/${itemType}/${page}.json`;
  const res = axios.get(url);

  return res;
};

export default {
  getMarketingItems,
  getMarketingItemsJson,
};