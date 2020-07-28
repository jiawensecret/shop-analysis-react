import request from 'umi-request';
import { TableListParams } from './data.d';


export async function getPersonList(params?: TableListParams) {
  return request('/test/person', {
    params,
  });
}


export async function addPerson(params: TableListParams) {
  return request('/test/person', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updatePerson(params: TableListParams) {
  return request(`/test/person/${params.id}`, {
    method: 'PUT',
    data: {
      ...params,
      method: 'update',
    },
  });
}
