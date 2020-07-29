import {PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

import UpdateForm, { FormValueType } from './components/UpdateForm';
import { OrderListItem } from './data.d';

import { getOrders } from './service';


const TableList: React.FC<{}> = () => {
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<OrderListItem>[] = [
    {
      title: '订单号',
      dataIndex: 'order_no',
    },
    {
      title: '订单价格(美元)',
      dataIndex: 'order_price',
      hideInSearch: true
    },
    {
      title: '买家支付运费(美元)',
      dataIndex: 'sale_transport_price',
      hideInSearch: true
    },
    {
      title: '退款(美元)',
      dataIndex: 'refund_price',
      hideInSearch: true
    },
    {
      title: '下单账号',
      dataIndex: 'custom_account',
      hideInSearch: true
    },
    {
      title: '支付方式',
      dataIndex: 'pay_type',
    },
    {
      title: '状态',
      dataIndex: 'status_text',
    },
    {
      title: '下单时间',
      dataIndex: 'order_time',
      valueType: 'dateTime',
      hideInSearch: true
    },
    {
      title: '支付时间',
      dataIndex: 'pay_time',
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
            onClick={() => {
              handleUpdateModalVisible(true);
              setUpdateFormValues(record);
            }}
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
      <ProTable<OrderListItem>
        headerTitle="订单列表"
        actionRef={actionRef}
        rowKey="id"
        request={(params, sorter, filter) => getOrders({ ...params, sorter, filter })}
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
