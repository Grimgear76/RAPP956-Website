import { useEffect, useRef, useState } from 'react'
import styles from './TheProblem.module.css'

const stats = [
  { number: '1 in 4', label: 'Middle schoolers report being offered vaping products', source: 'CDC' },
  { number: '70%', label: 'Of teens say peer pressure is the #1 reason they try substances', source: 'SAMHSA' },
  { number: '2x', label: 'More likely to continue if not addressed before high school', source: 'NIH' },
  { number: '1 in 3', label: 'Parents feel unprepared to talk to their teen about substance use', source: 'NIDA' },
]

function StatCard({ number, label, source, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.statCard} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={styles.statNumber}>{number}</span>
      <p className={styles.statLabel}>{label}</p>
      <span className={styles.statSource}>{source}</span>
    </div>
  )
}

export default function TheProblem() {
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
    <section id="problem" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className="section-label">The Reality</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Today's Youth Are<br /><span className="gold">Under Pressure</span>
          </h2>
          <p className={styles.intro}>
            The Rio Grande Valley is not immune. Our students face real pressures every day —
            in hallways, on phones, and in their own communities. The data demands action.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 120} />
          ))}
        </div>

        <div className={`${styles.quoteBlock} ${visible ? styles.visible : ''}`}>
          <blockquote className={styles.quote}>
            "Nobody wakes up and says 'I want to mess up my life.'
            It happens little by little."
          </blockquote>
          <cite className={styles.citeText}>— RAPP Program Session</cite>
        </div>
      </div>
    </section>
  )
}
