"use client"

import { useState } from "react"
import styles from "./phone.module.css"
import { ArrowBackIcon, ChevronForwardIcon } from "@/icon/icons"
import BackButton from "@/components/backButton/backButton"
import { phoneVerificationData } from "@/constraint/phoneVerification"
import { useRouter } from "next/navigation"

export default function VerifyPhoneNumber() {
  const router = useRouter()

  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numbersOnly = value.replace(/\D/g, "")
    setPhoneNumber(numbersOnly)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!phoneNumber) return setMessage("กรุณากรอกหมายเลขโทรศัพท์")
    else if (phoneNumber.length !== 10)
      return setMessage("กรุณากรอกหมายเลขโทรศัพท์ให้ครบ 10 หลัก")

    const checkPhone = phoneVerificationData.some(
      (data) => data.phoneNumber === phoneNumber,
    )
    if (!checkPhone) return setMessage("หมายเลขโทรศัพท์ของคุณไม่ถูกต้อง")

    setMessage("หมายเลขโทรศัพท์ของคุณ กำลังไปยังหน้าถัดไป 🎉")
    setTimeout(() => {
      setMessage("")
      router.push("/pin")
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <BackButton>
        <ArrowBackIcon />
      </BackButton>
      <section className={styles.upper_section}>
        <div className={styles.header_content}>
          <p>เชื่อมต่อ</p>
          <p>ด้วยหมายเลขโทรศัพท์มือถือ</p>
        </div>
        <div className={styles.container_input_tel}>
          <label htmlFor="phone">เบอร์โทรศัพท์</label>
          <input
            id="phone"
            type="tel"
            placeholder="กรุณากรอกหมายเลขโทรศัพท์"
            inputMode="numeric"
            // pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
          {message && (
            <p
              className={
                message === "หมายเลขโทรศัพท์ของคุณ กำลังไปยังหน้าถัดไป 🎉"
                  ? styles.success_message
                  : styles.error_message
              }
            >
              {message}
            </p>
          )}
        </div>
      </section>
      <section className={styles.lower_section}>
        <p>
          โดยกดปุ่ม "ตกลง" เพื่อยอมรับ{" "}
          <span>
            ข้อกำหนดและเงื่อนไขรวมทั้ง รับทราบนโยบายคุ้มครองข้อมูลส่วนบุคคล
          </span>
        </p>
        <button type="submit">
          <div>
            <ChevronForwardIcon />
          </div>
          <span>ตกลง</span>
        </button>
      </section>
    </form>
  )
}
