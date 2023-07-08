'use client'

export default function ErrorBlog({ error }: { error: Error }) {
  return (
    <>
      <h1>Error - {error.message}</h1>
    </>
  )
}