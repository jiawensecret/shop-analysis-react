import {PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';

import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import { TableListItem } from './data.d';
import { queryShop, updateShop, addShop } from './service';

import { getAccountList } from '../Account/service';
import { getPersonList } from '../Person/service';

import { PeopleListItem } from '../Person/data.d';
import { AccountListItem } from '../Account/data.d';

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: FormValueType) => {
  const hide = message.loading('正在添加');
  try {
    await addShop({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在配置');
  try {
    await updateShop({
      name: fields.name,
      desc: fields.desc,
      id: fields.id,
      person_id: fields.person_id,
      account_id: fields.account_id,
      code: fields.code,
      uri: fields.uri,
      charge_percent: fields.charge_percent,
    });
    hide();

    message.success('更新成功');
    return true;
  } catch (error) {
    hide();
    message.error('更新失败请重试！');
    return false;
  }
};

let people : Array<PeopleListItem> = [];
getPersonList().then(res=>{
    people = Array.from(res.data);
});

let accounts : Array<AccountListItem> = [];
getAccountList().then(res => {
  accounts = Array.from(res.data);
})

const TableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '店铺名称',
      dataIndex: 'name',
      valueType: 'textarea',
      rules: [
        {
          required: true,
          message: '名称为必填项',
        },
      ],
    },
    {
      title: '店铺编号',
      dataIndex: 'code',
      valueType: 'textarea',
      rules: [
        {
          required: true,
          message: '名称为必填项',
        },
      ],
    },
    {
      title: '管理人员',
      dataIndex: 'person_name',
      valueType: 'textarea',
      hideInForm:true,
    },
    {
      title: '对应收款账号',
      dataIndex: 'account_name',
      valueType: 'textarea',
      hideInForm: true
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: 'url地址',
      dataIndex: 'uri',
      valueType: 'textarea',
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
            编辑
          </a>
          <Divider type="vertical" />
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<TableListItem>
        headerTitle="店铺"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={(params, sorter, filter) => queryShop({ ...params, sorter, filter })}
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
          people={people}
          accounts={accounts}
        />
      {updateFormValues && Object.keys(updateFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setUpdateFormValues({})
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setUpdateFormValues({})
            
          }}
          updateModalVisible={updateModalVisible}
          values={updateFormValues}
          people={people}
          accounts={accounts}
        />
      ) : null}
      
      
    </PageHeaderWrapper>
  );
};

export default TableList;
