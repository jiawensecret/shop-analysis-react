import request from 'umi-request';
import { OrderListParams } from './data.d';

export async function getOrders(params?: OrderListParams) {
  return request('/test/orders', {
    params,
  });
}

