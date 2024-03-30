import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
import { Input, Button, Modal, Form } from "antd";

const Header = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const showContactModal = () => {
    setIsContactModalOpen(true);
  };
  const handleContactOk = () => {
    setIsContactModalOpen(false);
  };

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
    <nav className="header-nav">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={Logo} alt="EventHarbor Logo" />
        </div>

        <div className="nav-links">
          <ul className="nav-links-ul">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Button
                type="text"
                onClick={showContactModal}
                className="contact-us-btn"
              >
                Contact Us
              </Button>
              <Modal
                title="Contact Us"
                open={isContactModalOpen}
                onCancel={handleContactOk}
                footer={[
                  <Button type="primary" onClick={handleContactOk}>
                    Ok
                  </Button>,
                ]}
              >
                <p>Phone: +1 6048429021</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hetmodi007@gmail.com">hetmodi007@gmail.com</a>
                </p>
              </Modal>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-right">
        <Button className="register-btn" onClick={showModal}>
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
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </nav>
  );
};

export default Header;
