import Link from "next/link"

export default function FalkovPage1112Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>FalkovPage1112 layout</h1>
      {children}
    </div>
  )
}