import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Form, Input, Button, Row, Col } from 'antd'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
const initialState = { name: '', email: '', tel: '', address: '', message: '' }

const ContactForm = () => {
  // const { productStore } = useStore()
  const [formData, setFormData] = useState({ ...initialState })

  const inputChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const submitForm = () => {
    // productStore.setFormData(formData)

  }
  return (
    <div className={styles.contactForm}>
      <h2 className={styles.formTitle}>Get In Touch</h2>
      <Form
        name="contactForm"
        validateMessages={validateMessages}
        onFinish={submitForm}
      >
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name={['Name']} rules={[{ required: true }]}>
              <Input
                name="name"
                placeholder="Name"
                className={styles.input}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['email']}
              rules={[{ type: 'email', required: true }]}
            >
              <Input
                name="email"
                placeholder="Email"
                className={styles.input}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item
              name={['tel']}
              rules={[{ message: 'Please input your phone number!' }]}
            >
              <Input
                name="tel"
                placeholder="Phone"
                className={styles.input}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['address']}>
              <Input
                name="address"
                placeholder="Address"
                className={styles.input}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
        </Row>

        <Input.TextArea
          name="message"
          placeholder="message"
          className={styles.textarea}
          style={{ height: 181 }}
          onChange={inputChange}
        />
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.button}
          >
            Send Now
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ContactForm
