import { Metadata } from 'next'
import styles from './templateName.module.scss'

export const metadata: Metadata = {
  title: 'templateName',
}

export default function TemplateName() {
  return (
    <div className={styles.root}>
      <h1>❖ page TemplateName ❖</h1>
    </div>
  )
}
