'use client'
import React from 'react'
import styles from './button.module.css'

export const Button = (props) => {
    const {handleClick}=props;
  return (
    <button className={styles.btn} onClick={handleClick}>{props.children}</button>
  )
}
