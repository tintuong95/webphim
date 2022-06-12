import { Button, Col, Input, Row, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/store';
import { useDispatch } from 'react-redux';
import { actionCategoryAll, actionCategoryCreate, actionCategoryRemove } from '../stores/actions/actionCategory';
interface DataType {
  key: string;
  name: string;
 
}


const Category: React.FC = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [addNew, setAddNew] = useState<string | undefined>(undefined);
  const {category} =useSelector((state:RootState)=>state.reducerCategory)
  const dispatch =useDispatch<AppDispatch>()
  const data=(array:any): DataType[] => {
    return array.map((item:any,index:number)=>{
      console.log(item)
      return {key:item.id,name:item.name}
    })
  }
  const columns: ColumnsType<DataType> = [
    {
      title: '#',
  
      key: 'name',
      render: (text,record,index) => <a style={{color:"black"}}>{index}</a>,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'name',
      key: 'name',
      render: text => <a style={{color:"black"}}>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='link' icon={<EditOutlined />}/>
          <Button type="link" onClick={()=>{
            console.log(record)
            dispatch(actionCategoryRemove({id:Number(record.key),dispatch}))
          }} danger icon={<DeleteOutlined />}/>
        </Space>
      ),
    },
  ];
  
 

  useEffect(()=>{
    dispatch(actionCategoryAll())
  },[])
  return <>
   <Row style={{ width: 500 }} className="mb-2">
        <Col span={12}>
          <Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setAddNew(e.target.value)
          }} style={{ width: 200 }} placeholder="Thêm mới" />
          <Button onClick={()=>{
            dispatch(actionCategoryCreate({name:addNew,dispatch}))
          }} icon={<PlusOutlined />} type="primary"></Button>
        </Col>
        <Col span={12}>
          <Row justify="end">
            <Col>
              <Input
                placeholder="Tìm kiếm"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
  <Table style={{width:500}} columns={columns} dataSource={data(category).filter((item) => {
          if (search) {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) != -1;
          }
          return true;
        })} /></>
};

export default Category;