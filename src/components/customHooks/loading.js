import React from 'react'
import styles from './loading.module.css'

export const Loading = ({text}) => {
  return (
    <div className={styles.loadingCont}>
        <div className={styles.loadText}>
        {
          text && <h4 >{text}</h4>
        }
        <img src='https://i.gifer.com/ZKZg.gif' alt='Loading'></img>
        </div>
    </div>
  )
}
