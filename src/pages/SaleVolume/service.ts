import request from 'umi-request';
import { VolumeListParams } from './data.d';

export async function getVolumeList(params?: VolumeListParams) {
  return request('/test/sale-volumes', {
    params,
  });
}
