import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setModalAntAction } from '../../../redux/antModal/antModalActions'
import { modalAntSelector } from "../../../redux/antModal/antModalSelectors";
import { Player, ControlBar, BigPlayButton, Shortcut } from "video-react";

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
      <Player
        autoPlay
        playsInline
        poster="/assets/poster.png"
        src="https://www.apple.com/105/media/us/iphone-12/2020/7f5b7de7-9f8c-41eb-bf3b-f294773108e6/anim/charge/large.mp4"
      >
        <ControlBar disableCompletely={true} className="my-class" />
        <BigPlayButton position="center" />
      </Player>
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
