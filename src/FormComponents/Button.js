import React from 'react'
import styles from '../Stylesheet'
export default function Button({onClick,title}){
  return (<button style={styles.button} onClick={onClick}>{title}</button>)
}
