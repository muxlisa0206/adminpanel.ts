import { type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { MovieActorAddFormType } from "./MovieActorAddFormType";
import type { MovieType } from "../moviePage/MovieType";
import type { ActorType } from "../actorPage/ActorType";

const MovieActorAddForm = ({setOpen, movies, actors}:{setOpen:Dispatch<SetStateAction<boolean>>, movies?:MovieType[], actors?:ActorType[]}) => {
  const queryClient = useQueryClient();
  

  const onFinish: FormProps<MovieActorAddFormType>["onFinish"] = async (values) => {
    console.log(values);
    
    try {
      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie_actor",
        values
      );

      toast.success("Qo'shildi");
      queryClient.invalidateQueries({ queryKey: ["movie_actors"] });
      setOpen(false)
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const onFinishFailed: FormProps<MovieActorAddFormType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="actor-add"
      style={{ maxWidth: 600 }}
      initialValues={{
        movie_id: "",
        actor_id: "",
        role: "",
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

        <Form.Item name="actor_id" label="Actors" rules={[{ required: true }]}>
          <Select
            allowClear
            placeholder="Select a option and change input text above"
            options={actors?.map((el) => ({
              label: el.full_name,
              value: el.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
  );
};

export default MovieActorAddForm;
