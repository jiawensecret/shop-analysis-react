export interface VolumeJobItem {
  id: number;
  month: string;
  exchange: number;
  status: number;
  error_msg: string;
  created_at:Date;
}


export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface VolumeJobListData {
  list: VolumeJobItem[];
  pagination: Partial<TableListPagination>;
}

export interface VolumeJobListParams {
  id?: number;
  month?: string;
  status?: number;
  exchange?: number;
  error_msg?: string;
  created_at?:Date;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
