import React from 'react'
import styles from './paragraph.module.css'

type Props = {
  p: string
}

export const Paragraph: React.FC<Props> = ({ p }) => {
  return <div className={styles.paragraph}>{p}</div>
}
