export interface TableListItem {
  id:number;
  shop_id:number;
  shop_name:string;
  month:string;
  price:number;
  type:number;
  created_at:Date;
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
  shop_id?:number;
  month?:string;
  shop_name?:string;
  price?:number;
  type?:number;
  created_at?:Date;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
