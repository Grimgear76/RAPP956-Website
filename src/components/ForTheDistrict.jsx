import { useEffect, useRef, useState } from 'react'
import styles from './ForTheDistrict.module.css'

const benefits = [
  { stat: '65%', label: 'Reduction in substance use when prevention begins before high school', source: 'NIH Research' },
  { stat: '3x', label: 'Greater impact when programs include parent engagement alongside students', source: 'SAMHSA' },
  { stat: '$18', label: 'Saved in long-term costs for every $1 invested in youth prevention', source: 'RAND Corp.' },
]

export default function ForTheDistrict() {
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
    <section id="district" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className="section-label">For School Districts</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Why Your District<br /><span className="gold">Should Support RAPP</span>
          </h2>
          <p className={styles.intro}>
            Supporting RAPP is an investment in the academic performance, safety, and
            future of every student in your district — and in the families they come home to.
          </p>
        </div>

        <div className={styles.impactRow}>
          {benefits.map((b, i) => (
            <div
              key={b.stat}
              className={`${styles.impactCard} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <span className={styles.impactStat}>{b.stat}</span>
              <p className={styles.impactLabel}>{b.label}</p>
              <span className={styles.impactSource}>{b.source}</span>
            </div>
          ))}
        </div>

        <div className={`${styles.pitchBlock} ${visible ? styles.visible : ''}`}>
          <div className={styles.pitchText}>
            <h3 className={styles.pitchTitle}>What Your District Gets</h3>
            <ul className={styles.pitchList}>
              <li>A turnkey program requiring minimal district coordination</li>
              <li>Student assemblies that fit within the school day</li>
              <li>A parent session that strengthens home-school alignment</li>
              <li>RGV-rooted speakers students trust and relate to</li>
              <li>Ongoing program support — not a one-time visit</li>
              <li>Measurable culture shift around peer pressure and substances</li>
            </ul>
          </div>
          <div className={styles.pitchCta}>
            <p className={styles.ctaText}>
              Ready to bring RAPP to your campus?
            </p>
            <a href="#contact" className={styles.ctaBtn}>Contact Us Today</a>
            <p className={styles.ctaSubtext}>
              Presented by Shey & Miguel Segura · RGV · 956
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
