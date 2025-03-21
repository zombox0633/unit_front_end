import type { Metadata } from "next"
import { Mitr } from "next/font/google"
import "./globals.css"

const mitr = Mitr({ subsets: ["thai", "latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Frontend Exam 😾",
  description: "Unit Co Ltd - Frontend Exam",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={mitr.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
