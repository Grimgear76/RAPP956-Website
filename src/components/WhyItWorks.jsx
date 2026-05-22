import { useEffect, useRef, useState } from 'react'
import styles from './WhyItWorks.module.css'

const reasons = [
  {
    icon: '🎤',
    title: 'Real People, Real Stories',
    desc: 'Students don\'t connect with pamphlets — they connect with people who\'ve been through it. Every speaker brings lived experience.',
  },
  {
    icon: '🛡️',
    title: 'Prevention + Support',
    desc: 'Not just "don\'t do it." RAPP equips students with emotional resilience, decision-making tools, and confidence to say NO.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Families Included',
    desc: 'Parents are part of the solution, not left out. When families engage together, the impact is measurably stronger.',
  },
  {
    icon: '🔄',
    title: 'Ongoing, Not One-Time',
    desc: 'RAPP is built for repeat engagement — not a single assembly and done. Continuous presence creates lasting culture change.',
  },
]

export default function WhyItWorks() {
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
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className="section-label">Why RAPP Works</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Different By<br /><span className="gold">Design</span>
          </h2>
          <p className={styles.intro}>
            Traditional programs talk at students. RAPP talks with them — and
            follows through with tools, community, and family support.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 130 + 200}ms` }}
            >
              <span className={styles.icon}>{r.icon}</span>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
