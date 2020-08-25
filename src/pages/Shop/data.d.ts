export interface TableListItem {
  id: number;
  person_id: number;
  account_id: number;
  name: string;
  code: string;
  desc: string;
  uri: string;
  person_name: string;
  account_name: string;
  person: object;
  account: object;
  charge_percent: number;
  dxm_id?:string;
  client_id?:string;
  client_password?:string;
  created_at: Date;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  id?: number;
  person_id?: number;
  account_id?: number;
  name?: string;
  code?: string;
  desc?: string;
  uri?: string;
  dxm_id?:string;
  client_id?:string;
  client_password?:string;
  person_name?: string;
  account_name?: string;
  charge_percent?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface ShopListParams {
  id?: number;
  person_id?: number;
  account_id?: number;
  name?: string;
  code?: string;
  desc?: string;
  uri?: string;
  dxm_id?:string;
  client_id?:string;
  client_password?:string;
  person_name?: string;
  account_name?: string;
  charge_percent?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface ShopItem {
  id: number;
  person_id: number;
  account_id: number;
  name: string;
  code: string;
  desc: string;
  uri: string;
  dxm_id?:string;
  client_id?:string;
  client_password?:string;
  person_name: string;
  account_name: string;
  person: object;
  account: object;
  charge_percent: number;
  created_at: Date;
}