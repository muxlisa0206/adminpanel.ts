import { type Dispatch, type SetStateAction } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { DirectorAddFormType } from "./DirectorAddFormType";

const DirectorAddForm = ({setOpen}:{setOpen:Dispatch<SetStateAction<boolean>>}) => {
  const queryClient = useQueryClient();

  const onFinish: FormProps<DirectorAddFormType>["onFinish"] = async (values) => {
    const payload = {
      ...values,
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

  const onFinishFailed: FormProps<DirectorAddFormType>["onFinishFailed"] = (
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
        biography: "",
        country: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item<DirectorAddFormType>
          label="Full name"
          name="full_name"
          rules={[{ required: true, message: "Full name is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<DirectorAddFormType>
          label="Photo URL"
          name="photo_url"
          rules={[
            { required: true, message: "Photo URL is required" },
            { type: "url", message: "Enter a valid URL" },
          ]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

        <Form.Item<DirectorAddFormType>
          label="Country"
          name="country"
          rules={[{ required: true, message: "Country is required" }]}
        >
          <Input style={{ height: 50 }} />
        </Form.Item>

      <Form.Item<DirectorAddFormType>
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

export default DirectorAddForm;
