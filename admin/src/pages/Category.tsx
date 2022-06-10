import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
interface DataType {
  key: string;
  name: string;
 
}

const columns: ColumnsType<DataType> = [
  {
    title: '#',

    key: 'name',
    render: (text,record,index) => <a>{index}</a>,
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='link' icon={<EditOutlined />}/>
        <Button type="link" danger icon={<DeleteOutlined />}/>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown2',
 
  },
  {
    key: '2',
    name: 'Jim Green',
   
  },
  {
    key: '3',
    name: 'Joe Black',
  
  },
];

const Category: React.FC = () => <Table style={{width:500}} columns={columns} dataSource={data} />;

export default Category;