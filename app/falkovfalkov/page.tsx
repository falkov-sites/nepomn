import { Metadata } from 'next'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'falkovfalkov',
}

export default function Falkovfalkov() {
  return (
    <div className={styles.root}>
      <h1>❖ page Falkovfalkov ❖</h1>
    </div>
  )
}
