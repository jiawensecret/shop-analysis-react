import request from 'umi-request';
import { TableListParams } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/rule', {
    params,
  });
}

export function getAccountList(params?: TableListParams) {
  return request('/test/accounts', {
    params,
  });
}


export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
