import { Metadata } from 'next'
import styles from './Blog.module.css'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next: {
      revalidate: 60  // время кеширования в сек
    }
  })
  return res.json()
}

export const metadata: Metadata = {
  title: 'Blog | Next App'
}

export default async function Blog() {
  const posts = await getData()

  return (
    <>
      <div className={styles.root}>
        <h1>This is page Blog</h1>
      </div>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul >
    </>
  )
}
