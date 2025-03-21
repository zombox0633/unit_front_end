import {
  BackspaceIcon,
  ChevronBackIcon,
  ChevronForwardIcon,
} from "@/icon/icons"
import styles from "./pin.module.css"
import Link from "next/link"
import BackButton from "@/components/backButton/backButton"

export default function VerifyPinNumber() {
  return (
    <div className={styles.container}>
      <BackButton>
        <ChevronBackIcon />
      </BackButton>
      <section className={styles.header_section}>
        <div className={styles.icon}>TEN😾</div>
        <div>
          <p>ใส่ PIN เพื่อดำเนินการต่อ</p>
          <div className={styles.pin_point__container}>
            {[...Array(6)].map((_, index) => (
              <div key={index + 1} className={styles.pin_point} />
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
          <button key={index + 1}>{index + 1}</button>
        ))}
        <div></div>
        <button>0</button>
        <button>
          <BackspaceIcon />
        </button>
      </section>
    </div>
  )
}
