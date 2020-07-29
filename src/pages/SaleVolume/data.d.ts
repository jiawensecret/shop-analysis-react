export interface VolumeListItem {
  id: number;
  person_id: number;
  person_text:string;
  month:string;
  volume:string;
  total_cost:string;
  profit:string;
  exchange:string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: VolumeListItem[];
  pagination: Partial<TableListPagination>;
}

export interface VolumeListParams {
  id?: number;
  person_id?: number;
  month?:string;
  volume?:string;
  total_cost?:string;
  profit?:string;
  exchange?:string;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
