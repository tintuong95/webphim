import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { actionLoginAd } from '../stores/actions/actionUser';
import { AppDispatch } from '../stores/store';

export type TypeAccount ={
  username:string|undefined,
  password:string|undefined,
}

export const LoginAdmin: React.FC = () => {

  const dispatch =useDispatch<AppDispatch>()
  const [account,setAccount]=useState<TypeAccount>({
    username:undefined,
    password:undefined,
  })



  const onFinish = (values: any) => {
    dispatch(actionLoginAd(account));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const style:React.CSSProperties={
    position:'fixed',
    top:"45%",
    left:"50%",
    transform: "translate(-50%,-50%)",
    width:"300px"
  }

 

  return (
    <Form

    style={{...style}}
      name="basic"
        layout='vertical'
      onFinish={onFinish}


    >
        <Form.Item>
            <h1>LOGIN ADMIN <sup><small>MOVIE.VN</small></sup></h1>
         
        </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="username" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          setAccount({...account,username:e.target.value})
        }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          setAccount({...account,password:e.target.value})
        }} />
      </Form.Item>

    

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

