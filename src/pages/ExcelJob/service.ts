import request from 'umi-request';
import { ExcelJobListParams,CreateExcelJob } from './data.d';

export async function getExcelJob(params?: ExcelJobListParams) {
  return request('/test/show-excel-job', {
    params,
  });
}

export async function createExcelJob(params:FormData) {
  return request('/test/excel/upload',{
    method:'POST',
    data: params,
  })
}


