import React, { type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, DatePicker, Form, Input } from "antd";
import type { ActorAddFormType } from "./ActorAddFormType";
import dayjs from "dayjs";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const ActorAddForm = ({setOpen}:{setOpen:Dispatch<SetStateAction<boolean>>}) => {
  const queryClient = useQueryClient();

  const onFinish: FormProps<ActorAddFormType>["onFinish"] = async (values) => {
    const payload = {
      ...values,
      birth_year: values.birth_year.year(), 
    };

    try {
      await axios.post(
        "https://x8ki-letl-twmt.n7.xano.io/api:j6hO02gL/actor",
        payload
      );

      toast.success("Qo'shildi");
      queryClient.invalidateQueries({ queryKey: ["actors"] });
      setOpen(false)
    } catch (err) {
      console.error(err);
      toast.error("Xatolik yuz berdi");
    }
  };

  const onFinishFailed: FormProps<ActorAddFormType>["onFinishFailed"] = (
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
        full_name: "",
        photo_url: "",
        birth_year: dayjs(),
        biography: "",
        country: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="grid grid-cols-2 gap-3">
        <Form.Item<ActorAddFormType>
          label="Full name"
          name="full_name"
          rules={[{ required: true, message: "Full name is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<ActorAddFormType>
          label="Photo URL"
          name="photo_url"
          rules={[
            { required: true, message: "Photo URL is required" },
            { type: "url", message: "Enter a valid URL" },
          ]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<ActorAddFormType>
          label="Birth Year"
          name="birth_year"
          rules={[{ required: true, message: "Birth year is required" }]}
        >
          <DatePicker picker="year" style={{ width: "100%", height: 50 }} />
        </Form.Item>

        <Form.Item<ActorAddFormType>
          label="Country"
          name="country"
          rules={[{ required: true, message: "Country is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>
      </div>

      <Form.Item<ActorAddFormType>
        label="Biography"
        name="biography"
        rules={[{ required: true, message: "Biography is required" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ActorAddForm;
