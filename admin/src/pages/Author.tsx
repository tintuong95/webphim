import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useEffect } from 'react';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/store';
import { useDispatch } from 'react-redux';


interface DataType {
  key: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '#',

    key: 'name',
    render: (text,record,index) => <a>{++index}</a>,
  },
  {
    title: 'Tên nhà sản xuất',
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
    name: 'John Brown1',
    
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

const Author: React.FC = () => {
  const { film } = useSelector((state: RootState) => state.reducerFilm);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // dispatch(fetchFilmAll());
  }, []);
  return <Table style={{width:500}} columns={columns} dataSource={data} />;
}

export default Author;