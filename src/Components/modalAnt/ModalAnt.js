import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { setModalAntAction } from '../../redux/antModal/antModalActions'
import { Modal } from 'antd'
import styles from './styles.module.scss'

const ModalAnt = ({ title, visible, children, width }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleOk = () => {
    dispatch(setModalAntAction())
  }
  const handleCancel = () => {
    dispatch(setModalAntAction())
    history.push('/')
  }

  return (
    <Modal
      title={title}
      className={styles.modal}
      width={width}
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
