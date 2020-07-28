import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

import { TableListItem } from '../data.d';

export interface FormValueType extends Partial<TableListItem> {
  id?: number;
  name?: string;
  is_active?: number;
  created_at?:Date;
}

interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  createModalVisible: boolean;
}

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

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
          <FormItem name="name" label="姓名"
            rules={[{ required: true, message: '请输入用户姓名！' }]}
          >
            <Input placeholder="请输入"/>
          </FormItem>
          <FormItem name="is_active" label="状态"
            rules={[{ required: true, message: '请选择用户状态！' }]}
          >
            <RadioGroup>
              <Radio value={0}>封禁</Radio>
              <Radio value={1}>活跃</Radio>
            </RadioGroup>
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
      title="创建人员"
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