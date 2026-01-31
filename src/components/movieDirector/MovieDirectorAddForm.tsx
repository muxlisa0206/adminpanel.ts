import { type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, Form, Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { MovieType } from "../moviePage/MovieType";
import type { MovieDirectorAddFormType } from "./MovieDirectorAddFormType";
import type { DirectorType } from "../directorPage/DirectorType";

const MovieDirectorAddForm = ({setOpen, movies, director}:{setOpen:Dispatch<SetStateAction<boolean>>, movies?:MovieType[], director?:DirectorType[]}) => {
  const queryClient = useQueryClient();
  

  const onFinish: FormProps<MovieDirectorAddFormType>["onFinish"] = async (values) => {
    console.log(values);
    
    try {
      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_director",
        values
      );

      toast.success("Qo'shildi");
      queryClient.invalidateQueries({ queryKey: ["movie_director"] });
      setOpen(false)
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const onFinishFailed: FormProps<MovieDirectorAddFormType>["onFinishFailed"] = (
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
        director_id: "",
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

        <Form.Item name="director_id" label="Director" rules={[{ required: true }]}>
          <Select
            allowClear
            placeholder="Select a option and change input text above"
            options={director?.map((el) => ({
              label: el.full_name,
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

export default MovieDirectorAddForm;
