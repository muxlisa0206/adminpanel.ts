import { Button, Modal } from 'antd';
import { useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

const AddModal = ({text, children, open, setOpen}:{text:string, children:ReactNode, open:boolean, setOpen:Dispatch<SetStateAction<boolean>>}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
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
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default AddModal;