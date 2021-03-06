export interface VolumeListItem {
  id: number;
  person_id: number;
  person_text:string;
  month:string;
  volume:string;
  total_cost:string;
  profit:string;
  exchange:string;
  order_price:number;
  cost_price:number;
  transport_price:number;
  ad_price:number;
  shop_charge:number;
  pay_charge:number;
  refund:number;
  person_name:string;

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
  order_price?:number;
  cost_price?:number;
  transport_price?:number;
  ad_price?:number;
  shop_charge?:number;
  pay_charge?:number;
  refund?:number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
