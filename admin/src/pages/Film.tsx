import { Button, Col, Input, Row, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { EditOutlined, DeleteOutlined,PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/store";
import { useDispatch } from "react-redux";
import {
  actionFilmAll,
  actionFilmRemoveId,
} from "../stores/actions/actionFilm";
import { NavLink } from "react-router-dom";

interface DataType {
  key: number;
  name: string;
  category: string;
  author: string;
  year: number;
}

const Film: React.FC = () => {
  const [search,setSearch]=useState<string|undefined>(undefined)

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      key: "stt",
      render: (text, record, index) => (
        <a style={{ color: "black" }}>{++index}</a>
      ),
    },
    {
      title: "Tên phim",
      dataIndex: "name",
      key: "name",
      render: (text) => <a style={{ color: "black" }}>{text}</a>,
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Nhà sản xuất",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Năm xuất bản",
      key: "year",
      dataIndex: "year",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: any) => (
        <Space size="middle">
        <NavLink to={`/updatefilm/${record.key}`}>  <Button type="link" icon={<EditOutlined />} /></NavLink>
          <Button
            onClick={() => {
              dispatch(
                actionFilmRemoveId({ id: record.key, dispatch: dispatch })
              );
            }}
            type="link"
            danger
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ];

  const data = (arr: any): DataType[] => {
    return arr.map((item: any, index: number): DataType => {
      return {
        key: item.id,
        name: item.name,
        category: item.category.name,
        author: item.author.name,
        year: item.publicYear,
      };
    });
  };
  const { film } = useSelector((state: RootState) => state.reducerFilm);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(actionFilmAll());
  }, [dispatch]);

  return (
    <>
    <Row  style={{ width: 1200 }} className="mb-2">
      <Col span={12}>
        <NavLink to="/createfilm">
        <Button icon={<PlusOutlined />} type="primary">Thêm phim</Button>
        </NavLink>
      </Col>
      <Col span={12} >
        <Row justify="end">
          <Col><Input placeholder="Nhập tên phim" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setSearch(e.target.value)}} /></Col>
        </Row>
      </Col>
    </Row>
    <br />
      <Table
        style={{ width: 1200 }}
        columns={columns}
        dataSource={data(film).filter(item=>{
          if(search){
            return item.name.toLowerCase().indexOf(search.toLowerCase())!=-1
          }
          return true
        })}
      />
    </>
  );
};

export default Film;
