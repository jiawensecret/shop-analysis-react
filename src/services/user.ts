import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/test/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/test/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
