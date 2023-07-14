
import { Metadata } from 'next'
import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'probafalkov',
}

export default function Probafalkov() {
  return (
    <div className={styles.root}>
      <h1>❖ page Probafalkov ❖</h1>
    </div>
  )
}
