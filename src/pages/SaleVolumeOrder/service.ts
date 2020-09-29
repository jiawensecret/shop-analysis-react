import request from 'umi-request';
import { VolumeOrderListParams } from './data';

export async function getVolumeOrderList(id : String,params?: VolumeOrderListParams) {
  return request(`/test/sale-volume-order/${id}`, {
    params,
  });
}

export async function getShopList() {
  return request('/test/shop-list', {
    
  });
}

export async function getVolumeLog(id : String) {
  return request(`/test/sale-volumes/${id}`, {
    
  });
}