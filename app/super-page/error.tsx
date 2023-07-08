'use client';

export default function ErrorSuperPage({ error }: { error: Error }) {
  return (
    <>
      <h1>Error - {error.message}</h1>
    </>
  )
}