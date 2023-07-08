'use client';

export default function ErrorTemplateName({ error }: { error: Error }) {
  return (
    <>
      <h1>Error - {error.message}</h1>
    </>
  )
}