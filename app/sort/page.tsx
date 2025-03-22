"use client"

import { useState } from "react"
import styles from "./sort.module.css"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

const code = `
  ให้เรียงตัวเลขจากน้อยไปมาก โดยอธิบายเป็นลําดับขั้นตอน

  number.toString()
  แปลงตัวเลข 8917302546 เป็น "8917302546" ในรูปแบบ string

  .split("")
  แยกข้อมูลเป็นออกมา 
  ["8", "9", "1", "7", "3", "0", "2", "5", "4", "6"]

  .map(Number)
  แปลงใน array ให้เป็นชนิดข้อมูล number 
  แบบนี้ [8, 9, 1, 7, 3, 0, 2, 5, 4, 6]

  .sort((a, b) => a - b)
  ทำการเรียงข้อมูลจากน้อยไปมาก 
  แบบนี้ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  .join("")
  ทำให้ตัว array กลับมาอยู่ในรูปแบบ string

  Number(number)
  แปลงตัวแปร num กลับเป็นชนิดข้อมูล number

`

export default function SortPage() {
  const [num, setNumber] = useState<number>(8917302546)
  const handleSortData = () => {
    const sortNumber = Number(
      num
        .toString()
        .split("")
        .map(Number)
        .sort((a, b) => a - b)
        .join(""),
    )
    setNumber(sortNumber)
  }
  return (
    <div className={styles.container}>
      <section className={styles.upper_section}>
        <h2>แบบทดสอบที่ 3</h2>
        <div>
          <p>{num}</p>
          <button onClick={handleSortData} className={styles.button_sort}>sort</button>
        </div>
      </section>
      <section className={styles.lower_section}>
        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          PreTag="div"
          customStyle={{ margin: 0, padding: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </section>
    </div>
  )
}
