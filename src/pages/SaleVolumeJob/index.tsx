import {PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

import  CreateForm  from './components/CreateForm';

import { FormValueType } from './components/CreateForm';

import { VolumeJobItem } from './data.d';
import { getVolumeJob, createVolumeJob } from './service';

import { getMonthList } from '../AdPrice/service';


/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: FormValueType) => {
  const hide = message.loading('正在添加');
  try {
    await createVolumeJob({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

let months : Array<string> = [];
getMonthList().then(res => {
  months = res.data;
})

const TableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<VolumeJobItem>[] = [
    {
      title: '编号',
      dataIndex: 'id',
      valueType: 'textarea',
      hideInSearch:true,
    },
    {
      title: '月份',
      dataIndex: 'month',
      valueType: 'textarea',
    },
    {
      title: '汇率(美元兑人民币)',
      dataIndex: 'exchange',
      valueType: 'textarea',
      hideInSearch:true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'textarea',
      valueEnum:{
        0: { text: '处理中', status: 'Processing' },
        1: { text: '成功', status: 'Success' },
        2: { text: '失败', status: 'Error' },
      }
    },
    {
      title: '错误',
      dataIndex: 'error_msg',
      valueType: 'textarea',
      hideInForm: true,
      hideInSearch:true,
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInForm:true,
      valueType: 'dateTime',
      hideInSearch: true,
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<VolumeJobItem>
        headerTitle="利润计算任务"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 生成利润报表
          </Button>,
        ]}
        request={(params, sorter, filter) => getVolumeJob({ ...params, sorter, filter })}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        createModalVisible={createModalVisible}
        months = {months}
      />

    </PageHeaderWrapper>
  );
};

export default TableList;
