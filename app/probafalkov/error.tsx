'use client';

export default function ErrorProbafalkov({ error }: { error: Error }) {
  return (
    <>
      <h1>Error - {error.message}</h1>
    </>
  )
}