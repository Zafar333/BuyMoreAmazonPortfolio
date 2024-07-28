"use client"
import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { toast } from 'react-toastify';
const { TextArea } = Input;



const ContactUsForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        sendMailFun(values)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        toast.error("You can't send empty email")
      };

      // send mail fun is start from here
      const sendMailFun=async(data)=>{
        console.log("data",data)
        try{
          const response=await fetch("http://localhost:4000/sendMail", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          if(response?.status==200){
            // console.log("email response",await responsse.json())
            console.log("hello",response)
            toast.success("Email send Successfully")
          }

        }catch(error){
          // console.log("mailfun error",error)
          toast.error(error)
        }


      }

      // send mail fun is end here


  return (
    // <div className=' '>
    <div className='flex justify-center border border-black '>

   <Form className='border border-red-500 py-[30px] max-w-[600px] '
 
  
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    // autoComplete="off"
  >
    <Form.Item

    //   label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input placeholder='Enter Your Name'/>
    </Form.Item>

    <Form.Item
    //   label="Email"
      
      name="email"
      rules={[
        {
          required: true,
          message: 'Please enter your email!',
        },
        {
            type: 'email',
            message: 'Please enter a valid email address!',
          },
      ]}
    >
      <Input placeholder='Enter Your Email' 
      />
    </Form.Item>

    <Form.Item label="" name="message" rules={[{required:"true",
        message:"Please enter a message "
    }]}>
          <TextArea rows={4} placeholder='Message' />
        </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default ContactUsForm