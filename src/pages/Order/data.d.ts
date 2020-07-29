export interface OrderListItem {
  id:number;
  order_no:string;
  shop_id:number;
  sale_no:string;
  status_text:string;
  status:number;
  channel:string;
  desc:string;
  order_time:Date;
  pay_time:Date;
  post_time:Date;
  refund_time:Date | null;
  pay_type:string;
  order_price:number;
  sale_transport_price:number;
  refund_price:number;
  custom_account:string;
  custom_name:string;
  custom_email:string;
  custom_transport_name:string;
  transport_name:string;
  consignee:string;
  consignee_address:string;
  consignee_city: string;
  consignee_province:string;
  consignee_code:string;
  consignee_country:string;
  consignee_country_code:string;
  consignee_phone:string;
  consignee_tel:string; 
  is_volume:number;
  created_at:Date;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: OrderListItem[];
  pagination: Partial<TableListPagination>;
}

export interface OrderListParams {
  id?:number;
  order_no?:string;
  shop_id?:number;
  sale_no?:string;
  status_text?:string;
  status?:number;
  channel?:string;
  desc?:string;
  order_time?:Date;
  pay_time?:Date;
  post_time?:Date;
  refund_time?:Date | null;
  pay_type?:string;
  order_price?:number;
  sale_transport_price?:number;
  refund_price?:number;
  custom_account?:string;
  custom_name?:string;
  custom_email?:string;
  custom_transport_name?:string;
  transport_name?:string;
  consignee?:string;
  consignee_address?:string;
  consignee_city?: string;
  consignee_province?:string;
  consignee_code?:string;
  consignee_country?:string;
  consignee_country_code?:string;
  consignee_phone?:string;
  consignee_tel?:string; 
  is_volume?:number;
  created_at?:Date;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
