import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

import { TableListItem } from '../data.d';
import { ShopItem } from '../../Shop/data';

export interface FormValueType extends Partial<TableListItem> {
  id?:number;
  shop_id?:number;
  month?:string;
  price?:number;
  type?:number;
  created_at?:Date;
}

interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  createModalVisible: boolean;
  shops:Array<ShopItem>,
  months:Array<string>
}
const FormItem = Form.Item;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { createModalVisible, onCancel } = props;
  const { shops , months} = props;

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
        <FormItem name="shop_id" label="店铺"
                  rules={[{ required: true, message: '请选择店铺！' }]}
        >
          <Select style={{ width: '100%' }} placeholder='请选择店铺'>
            {shops.map(item => {
              return <Option value={item.id}>{item.name}</Option>
            })}
          </Select>

        </FormItem>
        <FormItem name="month" label="月份"
                  rules={[{ required: true, message: '请选择月份！' }]}
        >
          <Select style={{ width: '100%' }} placeholder='请选择月份'>
            {months.map(item => {
              return <Option value={item}>{item}</Option>
            })}
          </Select>
        </FormItem>
        <FormItem name="price" label="价格">
          <Input placeholder="请输入价格"/>
        </FormItem>
        <FormItem name="type" label="币种">
          <Select style={{ width: '100%' }} placeholder='请选择币种'>
              <Option value={0}>人民币</Option>
              <Option value={1}>美元</Option>
          </Select>
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
      title="创建广告费用"
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
