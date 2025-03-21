"use client"

import { useRouter } from "next/navigation"
import { ChildrenPropsType } from "@/types/types"
import styles from "./backButton.module.css"

export default function BackButton({ children }: ChildrenPropsType) {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className={styles.back_button}>
      {children}
    </button>
  )
}
