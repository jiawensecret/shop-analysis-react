import request from 'umi-request';
import { VolumeJobListParams } from './data.d';

export async function getVolumeJob(params?: VolumeJobListParams) {
  return request('/test/show-calculate-job', {
    params,
  });
}

export async function createVolumeJob(params?: VolumeJobListParams) {
  return request('/test/profit-report',{
    method:'POST',
    data: {
      ...params,
      method: 'post',
    },
  })
}


