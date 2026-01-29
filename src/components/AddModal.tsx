import { Button, Modal } from "antd";
import { type Dispatch, type ReactNode, type SetStateAction } from "react";

const AddModal = ({
  text,
  children,
  open,
  setOpen,
}: {
  text: string;
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {text} Add
      </Button>

      <Modal
        footer={false}
        title="Title"
        open={open}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default AddModal;
