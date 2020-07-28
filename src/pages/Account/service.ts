import request from 'umi-request';
import { TableListParams } from './data.d';


export function getAccountList(params?: TableListParams) {
  return request('/test/accounts', {
    params,
  });
}


export async function addAccount(params: TableListParams) {
  return request('/test/account', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateAccount(params: TableListParams) {
  return request(`/test/account/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
