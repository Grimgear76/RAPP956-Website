import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
          <p className="section-label">Get In Touch</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Interested in<br /><span className="gold">Bringing RAPP to Your Campus?</span>
          </h2>
          <p className={styles.body}>
            RAPP is currently being established. Reach out directly to Shey &amp; Miguel
            to learn more, express interest, or help bring this program to your school district.
          </p>

          <div className={styles.cards}>
            <div className={styles.contactCard}>
              <span className={styles.icon}>👥</span>
              <div>
                <p className={styles.name}>Shey &amp; Miguel Segura</p>
                <p className={styles.role}>RAPP Program Founders · RGV</p>
              </div>
            </div>

            <a href="tel:9569901974" className={styles.linkCard}>
              <span className={styles.linkIcon}>📞</span>
              <div>
                <p className={styles.linkLabel}>Call Us</p>
                <p className={styles.linkValue}>(956) 990-1974</p>
              </div>
            </a>

            <a href="mailto:Sheymb7879@yahoo.com" className={styles.linkCard}>
              <span className={styles.linkIcon}>✉️</span>
              <div>
                <p className={styles.linkLabel}>Email Us</p>
                <p className={styles.linkValue}>Sheymb7879@yahoo.com</p>
              </div>
            </a>
          </div>

          <div className={styles.taglineBox}>
            <p className={styles.taglineBig}>Rise Above The Pressure.</p>
            <p className={styles.taglineSub}>Choose Better. Live Better. Be Better.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
