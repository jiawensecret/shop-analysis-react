import React, { useState } from 'react';
import { Form, Button, Input, Modal, Select } from 'antd';

import { TableListItem } from '../data.d';

import { PeopleListItem } from '../../Person/data.d';
import { AccountListItem } from '../../Account/data.d';

export interface FormValueType extends Partial<TableListItem> {
  id?: number;
  key?:number;
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

export interface UpdateFormState {
  formVals: FormValueType;
}


interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
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



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    id: props.values.id,
    key:props.values.id,
    name: props.values.name,
    code: props.values.code,
    uri: props.values.uri,
    desc: props.values.desc,
    dxm_id: props.values.dxm_id,
    client_id: props.values.client_id,
    client_password: props.values.client_password,
    person_id: props.values.person_id,
    account_id: props.values.account_id,
    charge_percent: props.values.charge_percent,
  });


  const { updateModalVisible, onCancel } = props;
  const { people,accounts} = props;

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
          <FormItem name="person_id" label="管理人员">
            <Select style={{ width: '100%' }}>
              {people.map(item => {
                return <Option value={item.id}>{item.name}</Option>
              })}
            </Select>
          </FormItem>
          <FormItem name="account_id" label="对应账号">
            <Select style={{ width: '100%' }}>
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
            <TextArea rows={3} placeholder="请输入至少五个字符" />
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
      title="编辑店铺"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          id:formVals.id,
          name: formVals.name,
          code: formVals.code,
          uri: formVals.uri,
          desc: formVals.desc,
          person_id: formVals.person_id,
          account_id: formVals.account_id,
          charge_percent:formVals.charge_percent,
          dxm_id: formVals.dxm_id,
          client_id: formVals.client_id,
          client_password:formVals.client_password,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;