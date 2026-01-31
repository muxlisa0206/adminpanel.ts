import { useState, type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { MovieAddFormType } from "./MovieAddFormType";

const MovieAddForm = ({setOpen}:{setOpen:Dispatch<SetStateAction<boolean>>}) => {
    const [isPremium, setIsPremium] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);
    const [isActive, setIsActive] = useState(true);  const queryClient = useQueryClient();

  const onFinish: FormProps<MovieAddFormType>["onFinish"] = async (values) => {

    try {
      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/movie",
        values
      );

      toast.success("Qo'shildi");
      queryClient.invalidateQueries({ queryKey: ["mvoie"] });
      setOpen(false)
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const onFinishFailed: FormProps<MovieAddFormType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="movie-add"
      style={{ maxWidth: 600 }}
      initialValues={{
        title_uz: "",
        title_ru: "",
        title_en: "",
        description_uz: "",
        description_ru: "",
        description_en: "",
        poster_url: "",
        banner_url: "",
        trailer_url: "",
        video_url: "",
        duration_minutes: 0,
        release_year: 0,
        imdb_rating: 0,
        age_rating: "",
        country: "",
        language: "",
        is_premium: false,
        is_featured: false,
        view_count: 0,
        updated_at: 0,
        is_active: false,
        created_by: 0
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="grid grid-cols-3 gap-3">
        <Form.Item<MovieAddFormType>
          label="Uzbek"
          name="title_uz"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Russia"
          name="title_ru"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="English"
          name="title_en"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Description Uzbek"
          name="description_uz"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>
       
        <Form.Item<MovieAddFormType>
          label="Description Russia"
          name="description_ru"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Description English"
          name="description_en"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Form.Item<MovieAddFormType>
            label="Poster url"
            name="poster_url"
            rules={[{ required: true, message: "Poster url is required" }]}
            >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
            label="Banner url"
            name="banner_url"
            rules={[{ required: true, message: "Banner url is required" }]}
            >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
            label="Trailer url"
            name="trailer_url"
            rules={[{ required: true, message: "Treiler url is required" }]}
            >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
            label="Video url"
            name="video_url"
            rules={[{ required: true, message: "Video url is required" }]}
            >
          <Input style={{ height: 50 }} />
        </Form.Item>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Form.Item<MovieAddFormType>
          label="Duration"
          name="duration_minutes"
          rules={[{ required: true, message: "Duration is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Release"
          name="release_year"
          rules={[{ required: true, message: "Release is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Rating"
          name="imdb_rating"
          rules={[{ required: true, message: "Rating is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Age rating"
          name="age_rating"
          rules={[{ required: true, message: "Age rating is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>
       
        <Form.Item<MovieAddFormType>
          label="Country"
          name="country"
          rules={[{ required: true, message: "Country is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Language"
          name="language"
          rules={[{ required: true, message: "Language is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="View"
          name="view_count"
          rules={[{ required: true, message: "View is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Updated"
          name="updated_at"
          rules={[{ required: true, message: "Updated is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<MovieAddFormType>
          label="Created"
          name="created_by"
          rules={[{ required: true, message: "Created is required" }]}
        >
          <InputNumber style={{ height: 50 }} />
        </Form.Item>
      </div>

        <div className="flex gap-3 pb-4">
        <Checkbox
            name="is_premium"
            checked={isPremium}
            onChange={(e) => setIsPremium(e.target.checked)}
        >
            Premium
        </Checkbox>

        <Checkbox
            name="is_featured"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
        >
            Featured
        </Checkbox>

        <Checkbox
            name="is_active"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
        >
            Active
        </Checkbox>
        </div>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MovieAddForm;
