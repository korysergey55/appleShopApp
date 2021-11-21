import React from 'react'

import { Modal } from 'antd'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setModalAntAction } from '../../redux/antModal/antModalActions'

const ModalAnt = ({ title, visible, children }) => {
  const dispatch = useDispatch()

  const handleOk = () => {
    dispatch(setModalAntAction())
  }
  const handleCancel = () => {
    dispatch(setModalAntAction())
  }

  return (
    <Modal
      title={title}
      className={styles.modal}
      width=""
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={true}
    >
      {children}
    </Modal>
  )
}

export default ModalAnt
