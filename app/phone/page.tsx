import BackButton from "@/components/backButton/backButton"
import { ArrowBackIcon, ChevronForwardIcon } from "@/icon/icons"
import styles from "./phone.module.css"

export default function VerifyPhoneNumber() {
  return (
    <form className={styles.container}>
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
            minLength={10}
            maxLength={10}
            placeholder="กรุณากรอกหมายเลขโทรศัพท์"
            required
          />
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
