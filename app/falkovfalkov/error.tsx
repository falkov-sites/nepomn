'use client';

export default function ErrorFalkovfalkov({ error }: { error: Error }) {
  return (
    <>
      <h1>Error - {error.message}</h1>
    </>
  )
}