import React, { useState } from 'react';
import { Form, Button, Input, Modal, Select } from 'antd';

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

export interface UpdateFormState {
  formVals: FormValueType;
}


interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    id: props.values.id,
    account: props.values.account,
    account_type: props.values.account_type,
    password: props.values.password,
    charge_percent: props.values.charge_percent,
    created_at: props.values.created_at,
    client_id: props.values.client_id,
    client_password: props.values.client_password,
  });


  const { updateModalVisible, onCancel } = props;

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();

    setFormVals({ ...formVals, ...fieldsValue });
    handleUpdate({ ...formVals, ...fieldsValue });

  };

  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
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
                  rules={[{ required: true, message: '请输入账号类型！' }]}
        >
            <Select style={{ width: '100%' }}>
                <Option value="paypal">Paypal</Option>
                <Option value="stripe">Stripe</Option>
            </Select>
        </FormItem>
        
        <FormItem name="password" label="账号密码">
          <Input placeholder="请输入"/>
        </FormItem>
        <FormItem name="charge_percent" label="账号费率"
          
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
        <Button onClick={() => handleUpdateModalVisible(false, formVals)}>取消</Button>
        <Button type="primary" onClick={() => handleNext()}>
          提交
        </Button>
      </>
    );
  }

  return (
    <Modal
      destroyOnClose
      title="编辑账号"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          id:formVals.id,
          account: formVals.account,
          account_type: formVals.account_type,
          password: formVals.password,
          charge_percent: formVals.charge_percent,
          created_at: formVals.created_at,
          client_id: formVals.client_id,
          client_password: formVals.client_password,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
