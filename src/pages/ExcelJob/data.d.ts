export interface ExcelJobItem {
  id: number;
  filename?: string;
  status: number;
  type: string;
  error_msg: string;
  created_at:Date;
}

export interface CreateExcelJob{
  file?:any;
  type?:string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface ExcelJobListData {
  list: ExcelJobItem[];
  pagination: Partial<TableListPagination>;
}

export interface ExcelJobListParams {
  id?: number;
  filename?: string;
  status?: number;
  type?: string;
  error_msg?: string;
  created_at?:Date;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
