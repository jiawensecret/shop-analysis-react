import request from 'umi-request';
import { TableListParams } from './data.d';

export async function getAdPrice(params?: TableListParams) {
  return request('/test/ad-prices', {
    params,
  });
}

export async function addAdPrice(params: TableListParams) {
  return request('/test/ad-prices', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateAdPrice(params: TableListParams) {
  return request(`/test/ad-prices/${params.id}`, {
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