import React from 'react'
import styles from './styles.module.scss'
import Load from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Load
        type="Circles"
        color="#638af3"
        height={60}
        width={60}
        timeout={3000}
      />
      <h2 className={styles.loadingText}>...Loading</h2>
    </div>
  )
}

export default Loader
