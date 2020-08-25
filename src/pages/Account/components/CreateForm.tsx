import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

import { TableListItem } from '../data.d';


export interface FormValueType extends Partial<TableListItem> {
  id?:number;
  account?:string;
  account_type?:string;
  password?:string;
  charge_percent?:number;
  created_at?:Date;
  client_id?:string;
  client_password?:string;
}

interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  createModalVisible: boolean;
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
        <FormItem name="account" label="账号"
                  rules={[{ required: true, message: '请输入账号！' }]}
        >
          <Input placeholder="请输入账号"/>
        </FormItem>
        <FormItem name="account_type" label="账号类型"
                  rules={[{ required: true, message: '请选择账号类型！' }]}
        >
            <Select style={{ width: '100%' }} placeholder='请选择账号类型！'>
                <Option value="paypal">Paypal</Option>
                <Option value="stripe">Stripe</Option>
            </Select>
        </FormItem>
        
        <FormItem name="password" label="账号密码">
          <Input placeholder="请输入"/>
        </FormItem>
        <FormItem name="charge_percent" label="账号费率" 
        rules={[{ required: true, message: '请选择请输入费率 用小数表示！' }]}
        >
          <Input placeholder="请输入费率 例如0.01"/>
        </FormItem>
        <FormItem name="client_id" label="账号client id">
          <TextArea rows={3} placeholder="请输入client id" />
        </FormItem>
        <FormItem name="client_password" label="账号client密码">
          <TextArea rows={3} placeholder="请输入client密码" />
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
      title="创建账号"
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
