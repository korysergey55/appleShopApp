import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { sendPasswordResetEmail } from '../../../utils/Firebase/firebase'
import { Form, Input, Button } from 'antd'
import styles from './styles.module.scss'

const ResetPassword = () => {
  const history = useHistory()
  const [userEmail, setUserEmail] = useState('')

  const onChange = (e) => {
    const { value } = e.target
    setUserEmail(value)
  }
  const onFinish = () => {
    sendPasswordResetEmail(userEmail, history)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.formContainer}>
      <Form
        name="ResetPassvorfForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Enter your Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            name="email"
            value={userEmail}
            placeholder="Enter email to reset password"
            onChange={e => onChange(e)}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Reset password
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ResetPassword
