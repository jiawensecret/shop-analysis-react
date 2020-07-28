import React, { useState } from 'react';
import { Form, Button, Input, Modal ,Radio} from 'antd';

import { TableListItem } from '../data.d';


export interface FormValueType extends Partial<TableListItem> {
  id?: number;
  name?: string;
  is_active?: number;
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
}
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    id: props.values.id,
    name: props.values.name,
    is_active: props.values.is_active,
  });
  console.log(formVals);

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
      title="编辑人员"
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
          is_active: formVals.is_active,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;