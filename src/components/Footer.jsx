import React from "react";
import { Form, Input, Row, Col, Button } from "antd";

export default function Footer() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    window.alert("Success");
    form.resetFields();
  };
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="subscribe">
          <ul>
            <li className="clr-yellow">Subscribe</li>
          </ul>
          <div className="footer-input">
            <Form form={form} onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
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
                </Col>
              </Row>
            </Form>
            <Button
              className="footer-btn"
              key="submit"
              onClick={() => form.submit()}
            >
              {" "}
              Sign Up
            </Button>
          </div>

          <p>Subscribe to get up-to-date notifications.</p>
        </div>
      </nav>
    </footer>
  );
}
