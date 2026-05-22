import { useEffect, useRef, useState } from 'react'
import styles from './ProgramComponents.module.css'

export default function ProgramComponents() {
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
    <section id="program" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className="section-label">Program Structure</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Two-Part<br /><span className="gold">Impact Model</span>
          </h2>
        </div>

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={`${styles.card} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className={styles.cardNum}>01</div>
            <div className={styles.cardInner}>
              <div className={styles.cardBadge}>30–40 Minutes</div>
              <h3 className={styles.cardTitle}>Student Assembly</h3>
              <p className={styles.cardDesc}>
                Powerful, honest, and relatable — not a lecture. Real speakers share
                real experiences and turn them into lessons students can actually apply.
              </p>
              <ul className={styles.cardList}>
                <li>Real-life speakers: formerly incarcerated, recovered individuals</li>
                <li>Youth mentors students can actually relate to</li>
                <li>Law enforcement perspective (cops, sheriffs, detectives)</li>
                <li>Honest discussion about consequences and turning points</li>
                <li>Encouraging message focused on hope and change</li>
              </ul>
              <div className={styles.cardQuote}>
                "I'm not here to judge you. I'm here because I was you — and I wish
                someone had told me the truth."
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.cardAlt} ${visible ? styles.visible : ''}`} style={{ transitionDelay: '350ms' }}>
            <div className={styles.cardNum}>02</div>
            <div className={styles.cardInner}>
              <div className={styles.cardBadge}>Family Focused</div>
              <h3 className={styles.cardTitle}>Parent Support Session</h3>
              <p className={styles.cardDesc}>
                Parents are not left out. This session arms families with awareness,
                communication tools, and local resources to support their kids.
              </p>
              <ul className={styles.cardList}>
                <li>Signs your child is vaping and warning signs to watch for</li>
                <li>How kids hide it — what parents don't know</li>
                <li>How to talk without pushing your teen away</li>
                <li>What to do if they're already involved</li>
                <li>Access to local support resources in the RGV</li>
              </ul>
              <div className={styles.cardQuote}>
                When parents and students work together, the impact multiplies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
