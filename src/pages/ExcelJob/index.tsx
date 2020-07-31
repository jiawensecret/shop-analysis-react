import {PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

import  CreateForm  from './components/CreateForm';

import { ExcelJobItem} from './data.d';
import { getExcelJob, createExcelJob } from './service';


/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: FormData) => {
  const hide = message.loading('正在添加');
  try {
    await createExcelJob(fields);
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};


const TableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<ExcelJobItem>[] = [
    {
      title: '编号',
      dataIndex: 'id',
      valueType: 'textarea',
    },
    {
      title: 'excel文件',
      dataIndex: 'filename',
      valueType: 'textarea',
      hideInSearch:true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'textarea',
      hideInForm:true,
      valueEnum:{
        0: { text: '处理中', status: 'Processing' },
        1: { text: '成功', status: 'Success' },
        2: { text: '失败', status: 'Error' },
      }
    },
    {
      title: '类型',
      dataIndex: 'type',
      valueType: 'textarea',
      hideInForm: true,
      valueEnum:{
        'order': '订单',
        'transport':'物流信息',
        'transport_prot':'运输价格',
      }
    },
    {
      title: '错误',
      dataIndex: 'error_msg',
      valueType: 'textarea',
      hideInForm: true
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      hideInForm:true,
      valueType: 'dateTime',
      hideInSearch: true
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<ExcelJobItem>
        headerTitle="Excel导入任务"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> Excel导入
          </Button>,
        ]}
        request={(params, sorter, filter) => getExcelJob({ ...params, sorter, filter })}
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
        fileList={[]}
        uploading={false}
      />

    </PageHeaderWrapper>
  );
};

export default TableList;
