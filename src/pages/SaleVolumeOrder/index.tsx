import React, { useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { getPageQuery } from '@/utils/utils';

import { Descriptions, Card } from 'antd';


import { VolumeOrderListItem } from './data';
import { getVolumeOrderList,getShopList} from './service';


const query = getPageQuery();
let { volume_id,name,month } = query as { volume_id: string,name:string,month:string };


let shops : Array<string> = [];
let obj = {};

getShopList().then(res => {
  shops = res.data; 
  shops.forEach((item,index) => (
    obj[index] = {
      text : item
    }
  ))
})

const TableList: React.FC<{}> = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<VolumeOrderListItem>[] = [
    {
      title: '订单号',
      dataIndex: 'order_no',
      valueType: 'textarea',
    },
    {
      title: '店铺',
      dataIndex: 'shop_name',
    },
    {
      title: '订单生成时间',
      dataIndex: 'order_create_time',
      hideInSearch:true
    },
    {
      title: '订单总价(美元)',
      dataIndex: 'order_price',
      hideInSearch:true,
    },
    {
      title: '实收(美元)',
      dataIndex: 'volume',
      hideInSearch:true
    },
    {
      title: '订单手续费(美元)',
      dataIndex: 'pay_charge',
      hideInSearch:true
    },
    {
      title: '运费(美元)',
      dataIndex: 'transport_price_show',
      hideInSearch:true
    },
    {
      title: '营销费用(美元)',
      dataIndex: 'ad_price_show',
      hideInSearch:true
    },
    {
      title: '税费(美元)',
      dataIndex: 'shop_charge_show',
      hideInSearch:true
    },
    {
      title: '采购成本(美元)',
      dataIndex: 'cost_price_show',
      hideInSearch:true
    },
    {
      title: '退款(美元)',
      dataIndex: 'refund',
      hideInSearch:true
    },
    {
      title: '利润(美元)',
      dataIndex: 'profit_show',
      hideInSearch:true
    },
    
  ];

  

  return (
    <PageHeaderWrapper>
       <Card>
          <Descriptions column={2}>
            <Descriptions.Item label="月份">{month}</Descriptions.Item>
            <Descriptions.Item label="人员">{name}</Descriptions.Item>
          </Descriptions>
      </Card> 
      <br></br>

      <ProTable<VolumeOrderListItem>
        headerTitle="利润核算详情列表"
        actionRef={actionRef}
        rowKey="id"
        request={(params, sorter, filter) => getVolumeOrderList(volume_id,{ ...params, sorter, filter })}
        columns={columns}
        rowSelection={{}}
      />
      {/* {updateFormValues && Object.keys(updateFormValues).length ? (
        <UpdateForm
          onCancel={() => {
            handleUpdateModalVisible(false);
            setUpdateFormValues({})
            
          }}
          updateModalVisible={updateModalVisible}
          values={updateFormValues}
        />
      ) : null} */}
      
      
    </PageHeaderWrapper>
  );
};

export default TableList;
