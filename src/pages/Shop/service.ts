import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryShop(params?: TableListParams) {
  return request('/test/shops', {
    params,
  });
}

export async function addShop(params: TableListParams) {
  return request('/test/shops', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateShop(params: TableListParams) {
  return request(`/test/shops/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
