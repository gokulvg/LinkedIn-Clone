import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Button, Modal } from 'antd';
import "./ModalComponent.scss"

const ModalComponent= forwardRef((props,ref) => {
  const [open, setOpen] = useState(false);



  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const onStatusUpdateChangeHandler = (e:any) =>{
    props. setStatusUpdate(e.target.value)
  }
  useImperativeHandle(ref,()=>({

       onSetModalOpen()  {
        setOpen(true)
      }
  }))

  return (
    <>      
      <Modal
        title="What do you want to talk about?"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            <Button key="submit" type='primary' onClick={handleOk} disabled={ props.statusUpdate?.length>0 ? false : true}>
              POST
            </Button>,
          
          ]}
      >
      <input type='text' className='status-input-bar' onChange={onStatusUpdateChangeHandler}/>
      </Modal>
    </>
  );
});

export default ModalComponent;