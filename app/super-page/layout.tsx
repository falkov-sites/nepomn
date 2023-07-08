import Link from "next/link"

export default function SuperPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>SuperPage layout</h1>
      {children}
    </div>
  )
}