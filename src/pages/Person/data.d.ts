export interface TableListItem {
  id?:number,
  name:string,
  is_active?:number,
  created_at?:Date
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
  id?:number,
  name?:string,
  is_active?:number,
  created_at?:Date
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface PeopleListItem {
  id:number,
  name:string,
  is_active?:number,
  created_at?:Date
}

export interface PeopleList{
  data?:Array
}
