import Link from "next/link"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.root}>
      <Link className={styles.link} href="/">Home</Link>
      <Link className={styles.link} href="/blog">Blog</Link>
      <Link className={styles.link} href="/about">About</Link>
    </header>
  )
}
export { Header }