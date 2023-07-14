import Link from "next/link"

export default function ProbafalkovLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Probafalkov layout</h1>
      {children}
    </div>
  )
}