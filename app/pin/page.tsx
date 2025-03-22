"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styles from "./pin.module.css"

import BackButton from "@/components/backButton/backButton"
import {
  BackspaceIcon,
  ChevronBackIcon,
  ChevronForwardIcon,
} from "@/icon/icons"
import { phoneVerificationData } from "@/constraint/phoneVerification"

const defaultMessage = "ใส่ PIN เพื่อดำเนินการต่ออีกครั้ง"

export default function VerifyPinNumber() {
  const router = useRouter()

  const [pin, setPin] = useState<string>("")
  const [message, setMessage] = useState<string>(defaultMessage)
  const successMessage = "PIN ของคุณถูกต้อง กำลังไปยังหน้าถัดไป 🎉"

  useEffect(() => {
    if (pin.length === 6) {
      const checkPin = phoneVerificationData.some((data) => data.pin === pin)

      if (!checkPin) {
        setMessage("PIN ไม่ถูกต้อง กรุณาลองใหม่")
        setPin("")
        return
      }

      setMessage(successMessage)
      setTimeout(() => {
        router.push("/sort")
        setPin("")
        setMessage(defaultMessage)
      }, 1000)
      
    }
  }, [pin])

  const handlePinClick = (value: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + value)
    }
  }

  const handleBackspaceClick = () => {
    setPin((prev) => prev.slice(0, -1))
  }

  return (
    <div className={styles.container}>
      <BackButton>
        <ChevronBackIcon />
      </BackButton>
      <section className={styles.header_section}>
        <div className={styles.icon}>😾</div>
        <div>
          <p
            className={
              message === successMessage
                ? styles.success_message
                : message !== defaultMessage
                  ? styles.error_message
                  : ""
            }
          >
            {message}
          </p>
          <div className={styles.pin_point__container}>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`${styles.pin_point} ${pin.length > index ? styles.fill_pin : ""}`}
              />
            ))}
          </div>
        </div>
        <Link href={"/"} className={styles.forget_container}>
          <p>ลืมรหัส PIN</p>
          <ChevronForwardIcon />
        </Link>
      </section>
      <section className={styles.pin_section}>
        {[...Array(9)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePinClick((index + 1).toString())}
          >
            {index + 1}
          </button>
        ))}
        <div></div>
        <button onClick={() => handlePinClick("0")}>0</button>
        <button onClick={handleBackspaceClick}>
          <BackspaceIcon />
        </button>
      </section>
    </div>
  )
}
