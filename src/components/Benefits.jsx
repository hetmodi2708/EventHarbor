import React, { useState } from "react";

import circle_1 from "../assets/circle-1.png";
import circle_2 from "../assets/circle-2.png";
import circle_3 from "../assets/circle-3.png";

import { Modal, Button, Input, Form } from "antd";

export default function Benefits() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    window.alert("Success");
    handleOk();
  };

  return (
    <section className="event-benefits">
      <h2>
        Why you should join <span className="clr-yellow">EventHarbor</span>
      </h2>

      <div className="circles">
        <div className="circle">
          <div className="circle-img">
            <img src={circle_1} alt="" className="circle_img" />
          </div>
          <h4>Friendly Team</h4>
        </div>

        <div className="circle">
          <div className="circle-img">
            <img src={circle_2} alt="" className="circle_img" />
          </div>
          <h4>The Best Venues</h4>
        </div>

        <div className="circle">
          <div className="circle-img">
            <img src={circle_3} alt="" className="circle_img" />
          </div>
          <h4>Awesome Events</h4>
        </div>
      </div>

      <p className="benefit-p">
        Unlock a world of endless excitement and discovery! Join our vibrant
        community on EventHarbor for effortless event exploration, connecting
        you to the pulse of local experiences like never before.
      </p>

      <Button className="benefits-btn" onClick={showModal}>
        Join Now
      </Button>
      <Modal
        title="Join EventHarbor"
        open={isModalOpen}
        onCancel={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form} onFinish={onFinish}>
          <p>Join EventHarbor to get access to the best events in town!</p>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}
