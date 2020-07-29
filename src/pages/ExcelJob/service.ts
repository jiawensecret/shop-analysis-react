import request from 'umi-request';
import { ExcelJobListParams } from './data.d';

export async function getExcelJob(params?: ExcelJobListParams) {
  return request('/test/show-excel-job', {
    params,
  });
}

export async function createExcelJob(params?: ExcelJobListParams) {
  return request('/test/excel-job',{
    method:'POST',
    data: {
      ...params,
      method: 'post',
    },
  })
}


