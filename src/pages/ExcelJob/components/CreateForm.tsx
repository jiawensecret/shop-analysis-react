import React, { useState } from 'react';
import { Form, Button, Upload, Input, Modal, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { CreateExcelJob } from '../data.d';

export interface thisFile<T = any> {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  response?: T;
  error?: any;
  linkProps?: any;
  type: string;
  xhr?: T;
  preview?: string;
}

// todo
interface CreateFormProps {
  onCancel: (flag?: boolean, formVals?: CreateExcelJob) => void;
  onSubmit: (value:FormData) => void;
  uploading:boolean;
  fileList:[];
  createModalVisible: boolean;
}
const FormItem = Form.Item;

const { Option } = Select;

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};



const CreateForm: React.FC<CreateFormProps> = (props) => {
  const { createModalVisible, onCancel } = props;

  const [uploading,setUploading] = useState<boolean>(false);
  const [fileList,setFileList] = useState([]);

  const [formVals] = useState<CreateExcelJob>({});

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    
    console.log(fieldsValue,111);
    let lastFile:any;
    fileList.forEach(file => {
      lastFile = file;
    });

    let data = new FormData();
    data.append('file',lastFile);
    data.append('type',fieldsValue.type)

    setFileList([]);
    form.resetFields();
    handleCreate(data);
  };


  const upParams = {
    onRemove : file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index,1);
      setFileList(newFileList);
    },
    beforeUpload: file => {
      setFileList([...fileList,file]);
      return false;
    },
    fileList
  }

  const [form] = Form.useForm();

  const {
    onSubmit: handleCreate,
    onCancel: handleCreateModalVisible,
  } = props;

  const renderContent = () => {
    return (
      <>
        <FormItem name="filename" label="文件"
                  rules={[{ required: true, message: '请选择文件！' }]}
        >
          <Upload {...upParams}>
            <Button>
              <UploadOutlined />选择Excel文件
            </Button>
          </Upload> 
        </FormItem>
        <FormItem name="type" label="Excel类型"
                  rules={[{ required: true, message: '请选择类型！' }]}
        >
            <Select style={{ width: '100%' }} placeholder='请选择类型'>
                <Option value="order">订单</Option>
                <Option value="transport">物流跟踪</Option>
                <Option value="transport_price">物流费用</Option>
                <Option value="support">采购单</Option>
            </Select>
        </FormItem>
        

      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleCreateModalVisible(false, formVals)}>取消</Button>
        <Button type="primary" disabled={fileList.length === 0} loading={uploading} onClick={() => handleNext()}>
          提交
        </Button>
      </>
    );
  }

  return (
    <Modal
      destroyOnClose
      title="创建导入任务"
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
