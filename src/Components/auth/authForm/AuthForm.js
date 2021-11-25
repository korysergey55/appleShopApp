import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setModalAntAction } from '../../../redux/antModal/antModalActions'
import { pathes } from "../../../utils/pathes";
import { signInWithEmailAndPassword, registerWithEmailAndPassword } from '../../../utils/Firebase/firebase'
import { Form, Input, Button, Checkbox } from 'antd'
import styles from './styles.module.scss'


const AuthForm = ({ title, titleSubmit, login = true }) => {
  const history = useHistory()
  const dispath = useDispatch()
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const setUser = async () => {
    if (login) {
      const res = await signInWithEmailAndPassword(
        formData.email,
        formData.password
      )
      if (res) {
        dispath(setModalAntAction())
        history.push(pathes.home)
      }
    } else {
      registerWithEmailAndPassword(
        formData.name,
        formData.email,
        formData.password
      )
      history.push(pathes.login)
      dispath(setModalAntAction())
    }
  }

  const onChange = (evt) => {
    const { value, name } = evt.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onFinish = () => {
    setUser()
    form.setFieldsValue({
      name: '',
      email: '',
      password: '',
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{title}</h2>
      <Form
        form={form}
        name="AuthForm"
        className={styles.form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {!login && (
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input
              name="name"
              value={formData.name}
              onChange={e => onChange(e)}
            />
          </Form.Item>
        )}
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input name="email" value={formData.email} onChange={onChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </Form.Item>
        {login && (
          <p
            className={styles.forgotPassword}
            type="button"
            onClick={() => {
              history.push(pathes.reset)
            }}
          >
            Forgot Password?
          </p>
        )}
        <Form.Item
          className={styles.chekbox}
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {titleSubmit}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AuthForm
