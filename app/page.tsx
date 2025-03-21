"use client"
import { useRouter } from "next/navigation"
import styles from "./page.module.css"

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <header>
        <h1>Unit Co Ltd - Frontend Exam</h1>
      </header>
      <button type="button" onClick={() => router.push("/phone")}>
        ยืนยันหมายเลขโทรศัพท์
      </button>
    </div>
  )
}
