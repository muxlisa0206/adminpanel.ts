import React, { type Dispatch, type SetStateAction } from 'react';
import type { FormProps } from 'antd';
import {Button, Form, Input } from 'antd';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


type FieldType = {
  username?: string;
  password?: string;
};

type isAuthType = React.Dispatch<React.SetStateAction<boolean>>

const LoginPage = ({ setIsAuth }: { setIsAuth: isAuthType }) => {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async(values) => {
    try{
        const res = await axios.post('https://dummyjson.com/auth/login', values)
        localStorage.setItem("token", res?.data?.accessToken)
        setIsAuth(true)
        localStorage.setItem("auth" , JSON.stringify(true))
        navigate("/admin/actor")
    }catch(err){
        console.log(err);
    }
  };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  return(
    <div className='flex items-center justify-center h-screen bg-[#F1F1F1]'>
    <div className='bg-[#FFFFFF] p-5 w-full max-w-[400px] rounded-2xl flex flex-col gap-4'>
        <h1 className='text-center text-[25px] font-[600]'>Log in</h1>
        <Form
            name="basic"
            style={{width:"100%"}}
            layout="vertical"
            labelCol={{ span: 32 }}
            wrapperCol={{ span: 32 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
            label="* Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item<FieldType>
            label="* Password"
            name="password"

            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password className="text-white"/>
            </Form.Item>

            <Form.Item label={null}>
            <Button block type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </div>
  </div>
  )
};

export default LoginPage;