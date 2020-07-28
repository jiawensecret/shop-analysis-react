export interface TableListItem {
  id:number;
  account:string;
  account_type:string;
  password:string;
  charge_percent:number;
  created_at:Date;
  client_id:string;
  client_password:string;
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
  id?:number;
  account?:string;
  account_type?:string;
  password?:string;
  charge_percent?:number;
  created_at?:Date;
  client_id?:string;
  client_password?:string;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface AccountListItem {
  id:number,
  account:string,
  account_type:string,
  password?:string,
  charge_percent?:number,
  created_at?:Date,
}

export interface AccountList {
  data?:Array,
}