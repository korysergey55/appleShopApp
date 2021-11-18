import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../redux/auth/authActions'
import { useHistory } from 'react-router'
// import {
//   signInWithGoogle,
//   signInWithFacebook,
//   logout,
// } from '../../utils/Firebase/firebase.js'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const LoginForm = () => {
  const dispath = useDispatch()
  const loginAuth = async (e) => {
    if (e.currentTarget.name === 'google') {
      const res = await signInWithGoogle()
      if (res) {
        dispath(loginUserAction(res.credential.accessToken))
        history.push('/')
      }
    }
    if (e.currentTarget.name === 'facebook') {
      const res = await signInWithFacebook()
      if (res) {
        dispath(loginUserAction(res.credential.accessToken))
        history.push('/')
      }
    }
  }
  return (
    <ul className={styles.list}>
      <li className={styles.item} name="google"
        onClick={e => loginAuth(e)}>
        <p className={styles.text}> Google</p>
        <button
          className={styles.loginBtn}
          type="button"
        >
          <FontAwesomeIcon className={styles.icon} icon={faGoogle} color="white" size="2x" />
        </button>
      </li>
      <li className={styles.item} name="facebook"
        onClick={e => loginAuth(e)}>
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
          history.push('/registration')
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
  );
}

export default LoginForm;