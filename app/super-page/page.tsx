import { Metadata } from 'next'
import styles from './superPage.module.scss'

export const metadata: Metadata = {
  title: 'superPage',
}

export default function SuperPage() {
  return (
    <div className={styles.root}>
      <h1>❖ page SuperPage ❖</h1>
    </div>
  )
}
