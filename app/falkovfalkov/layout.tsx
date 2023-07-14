import Link from "next/link"

export default function FalkovfalkovLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Falkovfalkov layout</h1>
      {children}
    </div>
  )
}