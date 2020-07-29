import React, { useState } from 'react';
import { Form, Button, Input, Modal, Select } from 'antd';

import { VolumeJobItem } from '../data.d';
import { ShopItem } from '../../Shop/data';

export interface FormValueType extends Partial<VolumeJobItem> {
  month?:string;
  exchange?:number;
}

interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  createModalVisible: boolean;
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
  const { months} = props;

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
        <FormItem name="month" label="月份"
                  rules={[{ required: true, message: '请选择月份！' }]}
        >
          <Select style={{ width: '100%' }} placeholder='请选择月份'>
            {months.map(item => {
              return <Option value={item}>{item}</Option>
            })}
          </Select>
        </FormItem>
        <FormItem name="exchange" label="汇率">
          <Input placeholder="请输入价格"/>
        </FormItem>
      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleCreateModalVisible(false, formVals)}>取消</Button>
        <Button type="primary" onClick={() => handleNext()}>
          生成利润报表
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
