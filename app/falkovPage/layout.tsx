import Link from "next/link"

export default function FalkovPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>FalkovPage layout</h1>
      {children}
    </div>
  )
}