import { type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, Form, Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { MovieType } from "../moviePage/MovieType";
import type { MovieCategoryAddFormType } from "./MovieCategoryAddFormType";
import type { CategoryType } from "../categoryPage/CategoryType";

const MovieCategoryAddForm = ({setOpen, movies, category}:{setOpen:Dispatch<SetStateAction<boolean>>, movies?:MovieType[], category?:CategoryType[]}) => {
  const queryClient = useQueryClient();
  

  const onFinish: FormProps<MovieCategoryAddFormType>["onFinish"] = async (values) => {
    console.log(values);
    
    try {
      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_category",
        values
      );

      toast.success("Qo'shildi");
      queryClient.invalidateQueries({ queryKey: ["movie_category"] });
      setOpen(false)
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const onFinishFailed: FormProps<MovieCategoryAddFormType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="movie-category-add"
      style={{ maxWidth: 600 }}
      initialValues={{
        movie_id: "",
        category_id: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item name="movie_id" label="Movies" rules={[{ required: true }]}>
          <Select
            allowClear
            placeholder="Select a option and change input text above"
            options={movies?.map((el) => ({
              label: el.title_en,
              value: el.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="category_id" label="Category" rules={[{ required: true }]}>
          <Select
            allowClear
            placeholder="Select a option and change input text above"
            options={category?.map((el) => ({
              label: el.name_en,
              value: el.id,
            }))}
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
  );
};

export default MovieCategoryAddForm;
