import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setModalAntAction } from '../../../redux/antModal/antModalActions'
import { modalAntSelector } from "../../../redux/antModal/antModalSelectors";

import ModalAnt from '../../../Components/modalAnt/ModalAnt'
import Header from '../../../containers/header/Header'
import LoginForm from "../../../Components/auth/loginForm/LoginForm";
import AuthForm from "../../../Components/auth/authForm/AuthForm";
import styles from './styles.module.scss'

const LoginPage = () => {
  const modal = useSelector(modalAntSelector)
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setModalAntAction())
  }, [])

  return (
    <div className={styles.LoginPage}>
      <Header />
      <div className={styles.container}>
        {modal &&
          <ModalAnt visible={true} width='700px'>
            <div className={styles.wripper}>
              <AuthForm />
              <LoginForm />
            </div>
          </ModalAnt>}
      </div>
    </div>
  );
};

export default LoginPage;
