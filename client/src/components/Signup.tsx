import { Alert, Avatar, Badge, Button, Checkbox, Form, Input, Modal } from "antd";
import React, { ReactElement, useState } from "react";
import { UserOutlined, SearchOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actionLogin, actionSignup } from "../stores/actions/actionAuthor";
import { useSelector } from "react-redux";

export type TypeLogin = {
  username?: string;
  password?: string;
};

export function Signup(): ReactElement {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {error}=useSelector((state:any)=>state.authorReducer)
  const [account, setAccount] = useState<TypeLogin>({});
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = () => {
    dispatch(actionSignup(account));
  };

  return (
    <>
    <Button onClick={showModal} size="small" type="link">Đăng ký</Button>
     
      <Modal
        width={450}
        footer={true}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h4 className="my-1 text-center">Signup</h4>
        <Form
          name="normal_login"
          className="login-form p-4"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              name="username"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setAccount({ ...account, [e.target.name]: e.target.value });
              }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setAccount({ ...account, [e.target.name]: e.target.value });
              }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
            >
              Log in
            </Button>
          </Form.Item>
          <div>{error?"Vui lòng nhập lại":""} </div>
        </Form>
      </Modal>
    </>
  );
}
