import Link from "next/link"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li><Link href="/about/contacts">Наши контакты</Link></li>
        <li><Link href="/about/team">Наша команда</Link></li>
        <li><Link href="/about/falkov">falkov</Link></li>
      </ul>
      {children}

    </div>
  )
}