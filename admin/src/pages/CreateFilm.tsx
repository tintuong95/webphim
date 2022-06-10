import { Button, Form, Input, Select } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionAuthorGets } from "../stores/actions/actionAuthor";
import { actionCategoryAll } from "../stores/actions/actionCategory";
import { actionFilmCreate } from "../stores/actions/actionFilm";
import { actionUploadFilmImg } from "../stores/actions/actionUpload";
import { AppDispatch, RootState } from "../stores/store";

const { Option } = Select;

export default function CreateFilm(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();
  const [inputForm, setInputForm] = useState<any>();
  const {authors} =useSelector((state:RootState)=>state.reducerAuthor)
  const {category} =useSelector((state:RootState)=>state.reducerCategory)

  const onFinish = (values: any) => {
  
    var formData = new FormData();
    formData.append("img", inputForm.imageFile);

    dispatch(actionFilmCreate(inputForm));
    dispatch(actionUploadFilmImg(formData));
  };

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleChange = (name: string, value: string): void => {
    setInputForm({ ...inputForm, [name]: value });
  };

  useEffect(()=>{
    dispatch(actionAuthorGets())
    dispatch(actionCategoryAll())
  },[])

  return (
    <Form
      style={{ width: 700 }}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item label="Tên phim">
        <Input
          onChange={(e) => {
            handleChangeEvent(e);
          }}
          name="name"
        />
      </Form.Item>
      <Form.Item label="Nhà sản xuất">
        <Select
          onChange={(value: string) => {
            handleChange("authorId", value);
          }}
          defaultValue="Vui lòng chọn"
          style={{ width: 220 }}
   
        >
          {authors.map((item:any,index:any)=>{
           
            return <Option key={index} value={item.id}>{item.name}</Option>
          })}
          
    
        </Select>
      </Form.Item>
      <Form.Item label="Năm xuất bản">
        <Input
          onChange={(e) => {
            handleChangeEvent(e);
          }}
          name="publicYear"
          style={{ width: 220 }}
        />
      </Form.Item>
      <Form.Item label="Thể loại">
        <Select
         defaultValue="Vui lòng chọn"
          onChange={(value: string) => {
            handleChange("categoryId", value);
          }}
          style={{ width: 220 }}
        >

          {category.map((item:any,index:number)=> <Option key={index} value={item.id}>{item.name}</Option>)}
         
  
        </Select>
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input.TextArea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            handleChange("description", e.target.value);
          }}
          rows={8}
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];

            setInputForm({
              ...inputForm,
              imageFile: file,
              img: "img/" + file.name,
            });
          }}
        />
      </Form.Item>
      <Form.Item label="Link phim">
        <Input
          onChange={(e) => {
            handleChangeEvent(e);
          }}
          name="link"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
