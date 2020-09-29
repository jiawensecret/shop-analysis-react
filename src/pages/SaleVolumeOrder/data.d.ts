export interface VolumeOrderListItem {
  id: number;
  order_id?: number;
  sales_volume_id?: number;
  shop_id?:string;
  month:string;
  volume:number;
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
  order_no?:string;

  profit_show:number;
  cost_price_show:number;
  transport_price_show:number;
  ad_price_show:number;
  shop_charge_show:number;
}


export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: VolumeOrderListItem[];
  pagination: Partial<TableListPagination>;
}

export interface VolumeOrderListParams {
  id?: number;
  order_id?: number;
  sales_volume_id?: number;
  month?:string;
  shop_id?:string;
  volume?:number;
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
  order_no?:string;
  currentPage?: number;

  profit_show?:number;
  cost_price_show?:number;
  transport_price_show?:number;
  ad_price_show?:number;
  shop_charge_show?:number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
