import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import logoImg from '/logo.png'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className={styles.hero} ref={ref}>
      <div className={styles.gridOverlay} />
      <div className={styles.gradientOverlay} />

      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        <div className={styles.logoWrap}>
          <img src={logoImg} alt="RAPP – Rise Above Pressure Program" className={styles.logo} />
        </div>

        <div className={styles.taglineBlock}>
          <p className={styles.tagline}>Real Stories. Real Choices. Real Change.</p>
          <p className={styles.sub}>
            A prevention &amp; support program empowering RGV youth to rise above
            vaping, peer pressure, and risky decisions.
          </p>
        </div>

        <div className={styles.ctas}>
          <a href="#about" className={styles.btnPrimary}>Discover the Program</a>
          <span className={styles.btnComingSoon}>Sessions Coming Soon 😉</span>
        </div>

        <div className={styles.bottomBar}>
          <span>RGV · 956</span>
          <span className={styles.divider}>|</span>
          <span>Rise Above The Pressure.</span>
          <span className={styles.divider}>|</span>
          <span className={styles.goldText}>Choose Better. Live Better. Be Better.</span>
        </div>
      </div>

      <a href="#problem" className={styles.scrollDown} aria-label="Scroll down">
        <span className={styles.scrollArrow}>↓</span>
        <span className={styles.scrollLabel}>See The Problem</span>
      </a>
    </section>
  )
}
