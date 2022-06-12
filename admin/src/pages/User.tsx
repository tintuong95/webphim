import { Button, Col, Input, Row, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../stores/store";
import { useDispatch } from "react-redux";
import { actionRemoveId, actionUserGetAll } from "../stores/actions/actionUser";
interface DataType {
  key: string;
  username: string;
}

const User: React.FC = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [addNew, setAddNew] = useState<string | undefined>(undefined);

  const { users } = useSelector((state: RootState) => state.reducerUser);
  const dispatch = useDispatch<AppDispatch>();

  const columns: ColumnsType<DataType> = [
    {
      title: "#",

      render: (text, record, index) => <a>{index}</a>,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button disabled type="link" icon={<EditOutlined />} />
          <Button onClick={()=>{
            dispatch(actionRemoveId({id:record.key,dispatch}))
          }} type="link" danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  const data = (array: any): DataType[] => {
    return array.map((item: any) => ({
      key: item.id,
      username: item.username,
    }));
  };
  useEffect(() => {
    dispatch(actionUserGetAll());
  }, []);

  return (
    <>
     <Row style={{ width: 500 }} className="mb-2">
        
        <Col offset={12} span={12}>
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
      <Table
        style={{ width: 500 }}
        columns={columns}
        dataSource={data(users).filter((item:any) => {
          if (search) {
            return item.username.toLowerCase().indexOf(search.toLowerCase()) != -1;
          }
          return true;
        })}
      />
    </>
  );
};

export default User;
