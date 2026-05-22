import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandRapp}>RAPP</span>
          <span className={styles.brandFull}>Rise Above Pressure Program</span>
          <span className={styles.brandRegion}>RGV · 956</span>
        </div>
        <p className={styles.tagline}>
          Real Stories. Real Choices. Real Change.
        </p>
        <div className={styles.contactMini}>
          <a href="tel:9569901974">(956) 990-1974</a>
          <span>·</span>
          <a href="mailto:Sheymb7879@yahoo.com">Sheymb7879@yahoo.com</a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} RAPP – Rise Above Pressure Program · Presented by Shey & Miguel Segura
        </p>
      </div>
    </footer>
  )
}
