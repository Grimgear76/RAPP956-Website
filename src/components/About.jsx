import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const pillars = [
  { icon: '🔥', title: 'Truth', desc: 'Real stories from people who lived it — not pamphlets and lectures.' },
  { icon: '🛠️', title: 'Tools', desc: 'Practical skills: how to say NO, how to choose better, how to lead.' },
  { icon: '✨', title: 'Transformation', desc: 'Build identity, confidence, and a vision for a stronger future.' },
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.textCol} ${visible ? styles.visible : ''}`}>
          <p className="section-label">About RAPP</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Prevention Is More Than<br />
            <span className={styles.gold}>Saying "NO"</span>
          </h2>
          <p className={styles.body}>
            The <strong>Rise Above Pressure Program</strong> is a modern, community-driven
            prevention initiative built for the RGV. We believe that lasting change
            doesn't come from lectures — it comes from real connection, real stories,
            and real tools young people can actually use.
          </p>
          <p className={styles.body}>
            RAPP brings together former inmates with transformed lives, recovering addicts,
            youth mentors, counselors, and law enforcement to speak honestly with students
            about the pressures they face — and how to rise above them.
          </p>
          <p className={`${styles.body} ${styles.bold}`}>
            "Your future is bigger than this moment. Don't trade it for something temporary."
          </p>
        </div>

        <div className={`${styles.pillarsCol} ${visible ? styles.visible : ''}`}>
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={styles.pillar}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
          <div className={styles.badge}>
            <span className={styles.badgeLine1}>Modern</span>
            <span className={styles.badgeLine2}>D.A.R.E.-Style</span>
            <span className={styles.badgeLine3}>But Real</span>
          </div>
        </div>
      </div>
    </section>
  )
}
