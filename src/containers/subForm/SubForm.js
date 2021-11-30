import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { subscribeFormAction } from "../../redux/auth/authActions";
import styles from './styles.module.scss'

const SubForm = () => {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    setState(evt.target.value)
  }

  const onFinish = (evt) => {
    evt.preventDefault()
    dispatch(subscribeFormAction(state))
    setState('')
  }

  return (
    <div className={styles.containerSubForm}>
      <form className={styles.form} onSubmit={(evt) => onFinish(evt)}>
        <h2 className={styles.title}>Subscribe To get 25$</h2>
        <div className={styles.wripper}>
          <input
            className={styles.input}
            placeholder="Enter Your Email"
            name='subscribe'
            value={state}
            onChange={(evt) => handleChange(evt)}
          ></input>
          <button className={styles.button} type="submit">
            Subscribe Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubForm;