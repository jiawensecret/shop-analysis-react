import React, { useState } from 'react';
import { Card, Table, Modal} from 'antd';

import { OrderListItem } from '../data.d';

import { PageHeaderWrapper } from '@ant-design/pro-layout';


export interface UpdateFormState {
  formVals: OrderListItem;
}


interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: OrderListItem) => void;
  updateModalVisible: boolean;
  values: Partial<OrderListItem>;
}



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
 
  const { updateModalVisible, onCancel } = props;

  const [formVals, setFormVals] = useState<OrderListItem>({
    id: props.values.id,
    order_no:props.values.order_no,
    sale_no:props.values.sale_no,
    status_text:props.values.status_text,
    channel:props.values.channel,
    pay_time:props.values.pay_time,
    post_time:props.values.post_time,
    pay_type:props.values.pay_type,
    order_price:props.values.order_price,
    sale_transport_price:props.values.sale_transport_price,
    refund_price:props.values.refund_price,
    custom_account:props.values.custom_account,
    custom_name:props.values.custom_name,
    custom_email:props.values.custom_email,
    custom_transport_name:props.values.custom_transport_name,
    transport_name:props.values.transport_name,
    consignee:props.values.consignee,
    consignee_address:props.values.consignee_address,
    consignee_city:props.values.consignee_city,
    consignee_province:props.values.consignee_province,
    consignee_code:props.values.consignee_code,
    consignee_country:props.values.consignee_country,
    consignee_country_code:props.values.consignee_country_code,
    consignee_phone:props.values.consignee_phone,
    consignee_tel:props.values.consignee_tel,
    order_goods:props.values.order_goods,
    is_volume:props.values.is_volume,
    created_at:props.values.created_at,
  });

  const renderFooter = () => {
    return (
      <>

      </>
    );
  }
  const renderContent = (value: any, row: any, index: any) => {
    const obj: {
      children: any;
      props: { colSpan?: number };
    } = {
      children: value,
      props: {},
    };
    if (index === formVals.order_goods.length) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

  const goodsColumns = [
    {
      title: '商品编号',
      dataIndex: 'id',
      key: 'id',
      render: (text: React.ReactNode, row: any, index: number) => {
        if (index < formVals.order_goods.length) {
          return <a href="">{text}</a>;
        }
        return {
          children: <span style={{ fontWeight: 600 }}>总计</span>,
          props: {
            colSpan: 4,
          },
        };
      },
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: renderContent,
    },
    {
      title: '商品条码',
      dataIndex: 'barcode',
      key: 'barcode',
      render: renderContent,
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'right' as 'left' | 'right' | 'center',
      render: renderContent,
    },
    {
      title: '数量（件）',
      dataIndex: 'num',
      key: 'num',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, row: any, index: number) => {
        if (index < formVals.order_goods.length) {
          return text;
        }
        return <span style={{ fontWeight: 600 }}>{text}</span>;
      },
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right' as 'left' | 'right' | 'center',
      render: (text: React.ReactNode, row: any, index: number) => {
        if (index < formVals.order_goods.length) {
          return text;
        }
        return <span style={{ fontWeight: 600 }}>{text}</span>;
      },
    },
  ];



  return (
    <Modal
      destroyOnClose
      title="订单详情"
      visible={updateModalVisible} 
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Divider style={{ marginBottom: 32 }} />
          <div className={styles.title}>退货商品</div>
          <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={loading}
            dataSource={formVals.order_goods}
            columns={goodsColumns}
            rowKey="id"
          />
      
    </Modal>
  );
};

export default UpdateForm;