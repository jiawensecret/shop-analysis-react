import request from 'umi-request';
import { ShopListParams } from './data.d';

export async function queryShop(params?: ShopListParams) {
  return request('/test/shops', {
    params,
  });
}

export async function addShop(params: ShopListParams) {
  return request('/test/shops', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateShop(params: ShopListParams) {
  return request(`/test/shops/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
