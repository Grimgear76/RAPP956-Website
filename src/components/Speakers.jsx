import { useEffect, useRef, useState } from 'react'
import styles from './Speakers.module.css'

const voices = [
  { icon: '🔓', role: 'Transformed Lives', desc: 'Formerly incarcerated individuals who turned their lives around and now guide youth away from the same path.' },
  { icon: '💪', role: 'Recovered Individuals', desc: 'People in recovery from addiction who speak honestly about how it starts and how to break free.' },
  { icon: '🙌', role: 'Youth Mentors', desc: 'Young adults students can actually relate to — not far removed, still in the same world.' },
  { icon: '🧠', role: 'Counselors', desc: 'Professional youth counselors who provide tools for emotional resilience and mental health support.' },
  { icon: '🚔', role: 'Law Enforcement', desc: 'Officers, sheriffs, and detectives who share the real legal consequences teens and families face.' },
]

export default function Speakers() {
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
          <p className="section-label">The Voices</p>
          <h2 className={`display-heading ${styles.heading}`}>
            People Who<br /><span className="gold">Lived It</span>
          </h2>
          <p className={styles.intro}>
            RAPP brings in a diverse team of real voices — not actors, not strangers,
            but community members who know this world and chose to change it.
          </p>
        </div>

        <div className={styles.track}>
          {voices.map((v, i) => (
            <div
              key={v.role}
              className={`${styles.voice} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <span className={styles.voiceIcon}>{v.icon}</span>
              <h3 className={styles.voiceRole}>{v.role}</h3>
              <p className={styles.voiceDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.centerQuote} ${visible ? styles.visible : ''}`}>
          <p className={styles.cq}>
            "Being strong isn't doing what everyone else is doing —
            it's walking away when you know it's wrong."
          </p>
          <span className={styles.cqSource}>— RAPP Speaker</span>
        </div>
      </div>
    </section>
  )
}
