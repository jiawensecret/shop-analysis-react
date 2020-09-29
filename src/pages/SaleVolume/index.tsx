import {PlusOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';


import UpdateForm, { FormValueType } from './components/UpdateForm';
import { VolumeListItem } from './data.d';
import { getVolumeList } from './service';


const TableList: React.FC<{}> = () => {
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<VolumeListItem>[] = [
    {
      title: '人员名称',
      dataIndex: 'person_name',
      valueType: 'textarea',
    },
    {
      title: '月份',
      dataIndex: 'month',
    },
    {
      title: '订单总价(美元)',
      dataIndex: 'order_price',
      hideInSearch:true
    },
    {
      title: '实收(美元)',
      dataIndex: 'volume',
      hideInSearch:true
    },
    {
      title: '收款手续费(美元)',
      dataIndex: 'pay_charge',
      hideInSearch:true
    },
    {
      title: '运费(美元)',
      dataIndex: 'transport_price',
      hideInSearch:true
    },
    {
      title: '营销费用(美元)',
      dataIndex: 'ad_price',
      hideInSearch:true
    },
    {
      title: '店铺手续费(美元)',
      dataIndex: 'shop_charge',
      hideInSearch:true
    },
    {
      title: '采购成本(美元)',
      dataIndex: 'cost_price',
      hideInSearch:true
    },
    {
      title: '退款(美元)',
      dataIndex: 'refund',
      hideInSearch:true
    },
    {
      title: '利润(美元)',
      dataIndex: 'profit',
      hideInSearch:true
    },
    {
      title: '汇率(美元兑人民币)',
      dataIndex: 'exchange',
      hideInSearch:true
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInForm:true,
      valueType: 'dateTime',
      hideInSearch: true
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
           href = {`/sale-volume-order?volume_id=${record.id}&month=${record.month}&name=${record.person_name}`} target="_blank"
          >
            查看详情
          </a>
          <Divider type="vertical" />
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<VolumeListItem>
        headerTitle="利润核算列表"
        actionRef={actionRef}
        rowKey="id"
        request={(params, sorter, filter) => getVolumeList({ ...params, sorter, filter })}
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
