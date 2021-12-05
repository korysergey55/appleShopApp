import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrderOperation } from '../../../redux/order/orderOperation'
import { cartItemSelector, cartTotalPricelSelector } from "../../../redux/cart/cartSelectors";
import { Form, Input, Button, Row, Col, Radio, Space } from 'antd'
import styles from './styles.module.scss'

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
const OrderForm = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const cartItems = useSelector(cartItemSelector);
  const totalPrice = useSelector(cartTotalPricelSelector);

  const [formData, setFormData] = useState({
    name: '', email: '', tel: '', message: '',
    city: '', dilivery: '', payment: '', products: cartItems, totalPrice,
  })

  const inputChange = (evt) => {
    const { value, name } = evt.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const onChangeDelivery = (evt) => {
    console.log('radio checked', evt.target.value);
    setFormData(prev => ({
      ...prev, dilivery: evt.target.value,
    }));
  };

  const onChangePayment = (evt) => {
    setFormData(prev => ({
      ...prev, payment: evt.target.value,
    }));
  };

  console.log(formData)

  const submitForm = () => {
    dispatch(createOrderOperation(formData))
    form.setFieldsValue({
      name: '', email: '', tel: '', address: '', message: '',
      city: '', dilivery: '', payment: '', products: '', totalPrice: '',
    })
  }

  return (
    <div className={styles.orderForm}>
      <h2 className={styles.title}> 1 - Contact details of the order</h2>
      <Form
        form={form}
        name="OrderForm"
        validateMessages={validateMessages}
        onFinish={submitForm}
      >
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name={['name']} rules={[{ required: true }]}>
              <Input
                className={styles.input}
                placeholder="Name"
                minLength={3}
                name="name"
                value={formData.name}
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
                className={styles.input}
                placeholder="Email"
                name="email"
                value={formData.email}
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
                className={styles.input}
                placeholder="Phone"
                name="tel"
                value={formData.tel}
                onChange={inputChange}
              />
            </Form.Item>
          </Col>
                  </Row>
        <Form.Item name={['message']}>
          <Input.TextArea
            className={styles.textarea}
            style={{ height: 181 }}
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={inputChange}
          />
        </Form.Item>

        <h2 className={styles.title}> 2 - Delivery of the order</h2>
        <Col span={12}>
          <Form.Item name={['city']} rules={[{ required: true }]}>
            <Input
              className={styles.input}
              placeholder="Your city"
              minLength={3}
              name="city"
              value={formData.city}
              onChange={inputChange}
            />
          </Form.Item>
        </Col>
        <Radio.Group onChange={onChangeDelivery} value={formData.dilivery}>
          <Space direction="vertical">
            <Radio value={'Курьерская доставка'}>Курьерская доставка</Radio>
            <Radio value={'Новая почта'}>Новая почта</Radio>
            <Radio value={'Самовывоз из магазина'}>Самовывоз из магазина</Radio>
          </Space>
        </Radio.Group>

        <h2 className={styles.title}> 3 - Payment</h2>
        <Radio.Group onChange={onChangePayment} value={formData.payment}>
          <Space direction="vertical">
            <Radio value={'Оплата при получении'}>Оплата при получении</Radio>
            <Radio value={'Оплата на карту'}>Оплата на карту</Radio>
            <Radio value={'Оплатить сейчас'}>Оплатить сейчас</Radio>
          </Space>
        </Radio.Group>
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

export default OrderForm
