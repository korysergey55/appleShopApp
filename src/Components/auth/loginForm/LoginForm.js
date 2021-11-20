import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../../redux/auth/authActions'
import { useHistory } from 'react-router'
import { pathes } from '../../../utils/pathes'
import {
  signInWithGoogle,
  signInWithFacebook,
} from '../../../utils/Firebase/firebase'

import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const LoginForm = () => {
  const history = useHistory()
  const dispath = useDispatch()

  const loginGoogle = async () => {
    const res = await signInWithGoogle()
    if (res) {
      dispath(loginUserAction(res.credential.accessToken))
      history.push(pathes.home)
    }
  }

  const loginFacebook = async () => {
    console.log('loginFacebook')
    const res = await signInWithFacebook()
    if (res) {
      dispath(loginUserAction(res.credential.accessToken))
      history.push(pathes.home)
    }
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
          onClick={() => {
            history.push(pathes.registration)
          }}>
          <p className={styles.text}>Email:</p>
          <button
            className={styles.loginBtn}
            type="button"
          >
            <FontAwesomeIcon icon={faEnvelope} color="white" size="2x" />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LoginForm;