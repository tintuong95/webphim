import { Button, Form, Input, Select } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmId } from "../api/apiFilm";
import { actionAuthorGets } from "../stores/actions/actionAuthor";
import { actionCategoryAll } from "../stores/actions/actionCategory";
import {
  actionFilmCreate,
  actionFilmGetId,
  actionFilmUpdate,
} from "../stores/actions/actionFilm";
import { actionUploadFilmImg } from "../stores/actions/actionUpload";
import { AppDispatch, RootState } from "../stores/store";

const { Option } = Select;
type TypeSlug = {
  slug: string;
};

export default function UpdateFilm(): ReactElement {
  const dispatch = useDispatch<AppDispatch>();

  const { authors } = useSelector((state: RootState) => state.reducerAuthor);
  const { category } = useSelector((state: RootState) => state.reducerCategory);
  const [inputForm, setInputForm] = useState<any>({});
  const { slug } = useParams<TypeSlug>();

  const onFinish = (values: any) => {
    dispatch(actionFilmUpdate(inputForm));
    if (inputForm.imageFile) {
      var formData = new FormData();
      formData.append("img", inputForm.imageFile);
      dispatch(actionUploadFilmImg(formData));
    }
  };

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleChange = (name: string, value: string): void => {
    setInputForm({ ...inputForm, [name]: value });
  };

  useEffect(() => {
    dispatch(actionAuthorGets());
    dispatch(actionCategoryAll());

    fetchFilmId(Number(slug)).then((response) => {
      setInputForm({ ...response.data.filmGet });
    });
  }, []);
  console.log(inputForm)
  return (
    <Form
  
      style={{ width: 700 }}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item label="Tên phim">
        <Input
        value={inputForm.name}
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
          value={inputForm?.authorId?.toString()}
          style={{ width: 220 }}
        >
          {authors.map((item: any, index: any) => {
            return (
              <Option key={index} value={item.id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item label="Năm xuất bản">
        <Input
          onChange={(e) => {
            handleChangeEvent(e);
          }}
          value={inputForm?.publicYear}
          name="publicYear"
          style={{ width: 220 }}
        />
      </Form.Item>
      <Form.Item label="Thể loại">
        <Select
          value={inputForm?.categoryId?.toString()}
          onChange={(value: string) => {
            handleChange("categoryId", value);
          }}
          style={{ width: 220 }}
        >
          {category.map((item: any, index: number) => (
            <Option key={index} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input.TextArea
          value={inputForm?.description}
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
          value={inputForm?.link}
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
