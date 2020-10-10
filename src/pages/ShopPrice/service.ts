import request from 'umi-request';
import { TableListParams } from './data';

export async function getShopPrice(params?: TableListParams) {
  return request('/test/shop-prices', {
    params,
  });
}

export async function addShopPrice(params: TableListParams) {
  return request('/test/shop-prices', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateShopPrice(params: TableListParams) {
  return request(`/test/shop-prices/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}

export async function getMonthList() {
  return request('/test/month-list', {
    
  });
}