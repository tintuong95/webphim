import { Button, Form, Input } from "antd";
import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionLogin } from "../stores/actions/actionAuthor";
import { TypeLogin } from "./Login";
import { UserOutlined, SearchOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export function HideScreen(): ReactElement {
  const { error } = useSelector((state: any) => state.authorReducer);
  const [account, setAccount] = useState<TypeLogin>({});
  const dispatch = useDispatch();
  const onFinish = () => {
    dispatch(actionLogin(account));
  };
  return (
    <div className="hidescreen">
       <NavLink to="/home">
         <Button size="large" className="back" type="link"> Home</Button>
         </NavLink>
      <div className="login">
        <h4 className="my-1 text-center">Login</h4>
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
          <div>{error ? "Vui lòng nhập lại" : ""} </div>
        </Form>
      </div>
    </div>
  );
}
