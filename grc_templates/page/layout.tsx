import Link from "next/link"

export default function TemplateNameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>TemplateName layout</h1>
      {children}
    </div>
  )
}