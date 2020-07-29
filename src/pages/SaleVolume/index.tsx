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
      title: '销售额(美元)',
      dataIndex: 'volume',
      hideInSearch:true
    },
    {
      title: '成本(人民币)',
      dataIndex: 'total_cost',
      hideInSearch:true
    },
    {
      title: '利润(人民币)',
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
