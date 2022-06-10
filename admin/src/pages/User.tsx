import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
interface DataType {
  key: string;
  username: string;
 
}

const columns: ColumnsType<DataType> = [
  
  {
    title: '#',
    dataIndex: 'age',
    key: 'age',
    render:(text,record,index)=><a>{index}</a>
  },
  {
    title: 'Tên tài khoản',
    dataIndex: 'username',
    key: 'username',
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
    username: 'John Brown4',
   
  },
  {
    key: '2',
    username: 'Jim Green',
   
  },
  {
    key: '3',
    username: 'Joe Black',
 
  },
];

const User: React.FC = () => <Table style={{width:500}} columns={columns} dataSource={data} />;

export default User;