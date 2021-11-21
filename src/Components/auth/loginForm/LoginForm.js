import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { loginUserAction } from '../../../redux/auth/authActions'
import { setModalAntAction } from '../../../redux/antModal/antModalActions'
import { modalAntSelector } from '../../../redux/antModal/antModalSelectors';
import { pathes } from '../../../utils/pathes'
import { signInWithGoogle, signInWithFacebook } from '../../../utils/Firebase/firebase'
import AuthForm from '../authForm/AuthForm';

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import ModalAnt from '../../modalAnt/ModalAnt'

const LoginForm = () => {
  const history = useHistory()
  const dispath = useDispatch()
  const modal = useSelector(modalAntSelector)

  const loginGoogle = async () => {
    const res = await signInWithGoogle()
    if (res) {
      dispath(loginUserAction(res.credential.accessToken))
      history.push(pathes.home)
    }
  }

  const loginFacebook = async () => {
    const res = await signInWithFacebook()
    if (res) {
      dispath(loginUserAction(res.credential.accessToken))
      history.push(pathes.home)
    }
  }

  const loginWithEmail = () => {
    dispath(setModalAntAction())
  }

  return (
    <div >
      <h2 className={styles.subtitle}>Login with</h2>
      <ul className={styles.list}>
        <li className={styles.item} name="google"
          onClick={() => loginGoogle()}>
          <p className={styles.text}> Google</p>
          <button
            className={styles.loginBtn}
            type="button"
          >
            <FontAwesomeIcon className={styles.icon} icon={faGoogle} color="white" size="2x" />
          </button>
        </li>
        <li className={styles.item} name="facebook"
          onClick={() => loginFacebook()}>
          <p className={styles.text}> Facebook</p>
          <button
            className={styles.loginBtn}
            type="button"
          >
            <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
          </button>
        </li>
        <li className={styles.item} name="email"
          onClick={() => loginWithEmail()}>
          <p className={styles.text}>Email:</p>
          <button
            className={styles.loginBtn}
            type="button"
          >
            <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
          </button>
        </li>
      </ul>
      {modal &&
        <ModalAnt visible={true}>
          <AuthForm title='Login with email' titleSubmit='Login' />
        </ModalAnt>}
    </div>
  );
}

export default LoginForm;