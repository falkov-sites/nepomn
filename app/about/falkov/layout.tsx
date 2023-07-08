import Link from "next/link"

export default function FalkovLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Falkov layout</h1>
      {children}
    </div>
  )
}