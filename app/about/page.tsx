import { Metadata } from 'next'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About | App',
}

export default function About() {
  return (
    <div className={styles.root}>
      <h3>выбери подпункт</h3>
    </div>
  )
}