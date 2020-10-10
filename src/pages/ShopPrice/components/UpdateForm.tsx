import React, { useState } from 'react';
import { Form, Button, Input, Modal, Select } from 'antd';

import { TableListItem } from '../data';
import { ShopItem } from '../../Shop/data';

export interface FormValueType extends Partial<TableListItem> {
  id?:number;
  shop_id?:number;
  month?:string;
  price?:number;
  created_at?:Date;
}

export interface UpdateFormState {
  formVals: FormValueType;
}


interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
  shops:Array<ShopItem>,
  months:Array<string>
}
const FormItem = Form.Item;
const { Option } = Select;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    id: props.values.id,
    shop_id: props.values.shop_id,
    month: props.values.month,
    price: props.values.price,
    created_at: props.values.created_at,
  });

  const { shops , months} = props;
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
      <FormItem name="price" label="费用">
        <Input placeholder="请输入费用"/>
      </FormItem>

    </>
    );
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
      title="编辑店铺费用"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          id:formVals.id,
          shop_id: formVals.shop_id,
          month: formVals.month,
          price: formVals.price,
          type: formVals.type,
          created_at: formVals.created_at,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
