import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

import { TableListItem } from '../data.d';

import { PeopleListItem } from '../../Person/data.d';
import { AccountListItem } from '../../Account/data.d';

export interface FormValueType extends Partial<TableListItem> {
  id?: number;
  person_id?: number;
  account_id?: number;
  name?: string;
  code?: string;
  desc?: string;
  uri?: string;
  person_name?: string;
  account_name?: string;
  person?: object;
  account?: object;
  dxm_id?:string;
  client_id?:string;
  client_password?:string;
  charge_percent?: number;
}

interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  createModalVisible: boolean;
  people: Array<PeopleListItem>;
  accounts: Array<AccountListItem>;
}
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { createModalVisible, onCancel } = props;
  const { people,accounts} = props;
  
  const [formVals] = useState<FormValueType>({});

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();

    form.resetFields();
    handleCreate({ ...formVals, ...fieldsValue });
    
  };

  const [form] = Form.useForm();

  const {
    onSubmit: handleCreate,
    onCancel: handleCreateModalVisible,
  } = props;
 
  const renderContent = () => {
      return (
        <>
          <FormItem name="name" label="店铺名称"
            rules={[{ required: true, message: '请输入店铺名称！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="code" label="店铺编号"
            rules={[{ required: true, message: '请输入店铺编号！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="person_id" label="管理人员"
            rules={[{ required: true, message: '请选择管理人员！' }]}
          >
            <Select style={{ width: '100%' }} placeholder='请选择管理人员'>
              {people.map(item => {
                return <Option value={item.id}>{item.name}</Option>
              })}
            </Select>
          </FormItem>
          <FormItem name="account_id" label="收款账号" 
            rules={[{ required: true, message: '请选择收款账号！' }]}
          >
            <Select style={{ width: '100%' }} placeholder='请选择收款账号'>
              {accounts.map(item => {
                return <Option value={item.id}>{item.account}</Option>
              })}
            </Select>
          </FormItem>
          <FormItem name="charge_percent" label="店铺费率"
            rules={[{ required: true, message: '请输入店铺费率！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="uri" label="店铺url">
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="dxm_id" label="店小秘编号"
            rules={[{ required: true, message: '请输入店小秘店铺编号！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="client_id" label="client id"
            rules={[{ required: true, message: '请输入client id！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="client_password" label="client secret"
            rules={[{ required: true, message: '请输入client secret！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="desc" label="店铺备注">
            <TextArea rows={4} placeholder="请输入至少五个字符" />
          </FormItem>
    
        </>
      )
  }

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleCreateModalVisible(false, formVals)}>取消</Button>
        <Button type="primary" onClick={() => handleNext()}>
          提交
        </Button>
      </>
    );
  }

  return (
    <Modal
      destroyOnClose
      title="创建店铺"
      visible={createModalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{}}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default CreateForm;