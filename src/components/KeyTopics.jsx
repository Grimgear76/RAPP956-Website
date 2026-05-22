import { useEffect, useRef, useState } from 'react'
import styles from './KeyTopics.module.css'

const topics = [
  {
    number: '01',
    title: 'Vaping & Substances',
    points: [
      'How easy access happens in schools',
      'How addiction forms quickly',
      'School and legal consequences',
      'Selling — quick money leads to real trouble',
    ],
  },
  {
    number: '02',
    title: 'Peer Pressure',
    points: [
      '"Big Dawg" mentality — why it pulls teens in',
      'Role-play scenarios with real responses',
      '"I\'m good, I got other plans" — tools that work',
      'Becoming a leader, not a follower',
    ],
  },
  {
    number: '03',
    title: 'Identity & Confidence',
    points: [
      'Self-worth and long-term thinking',
      'Saying NO without losing friends',
      'Choosing better circles',
      'Building emotional resilience',
    ],
  },
  {
    number: '04',
    title: 'Sexual Pressure',
    points: [
      'Self-respect and self-worth',
      'Emotional consequences of early behavior',
      'Long-term thinking over short-term decisions',
      'Respect for yourself and others',
    ],
  },
  {
    number: '05',
    title: 'Future Vision',
    points: [
      'Goals vs. distractions',
      'Real examples of success after struggle',
      'Your future is bigger than one decision',
      'What\'s possible when you rise above',
    ],
  },
  {
    number: '06',
    title: 'Family Awareness',
    points: [
      'Signs of vaping and behavior changes',
      'Isolation, phone usage, mood shifts',
      'How to talk without pushing teens away',
      'When and how to get help',
    ],
  },
]

export default function KeyTopics() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="topics" className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <p className="section-label">Curriculum</p>
          <h2 className={`display-heading ${styles.heading}`}>
            Key Topics<br /><span className="gold">We Cover</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {topics.map((t, i) => (
            <div
              key={t.number}
              className={`${styles.topic} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 100 + 150}ms` }}
            >
              <span className={styles.topicNum}>{t.number}</span>
              <h3 className={styles.topicTitle}>{t.title}</h3>
              <ul className={styles.topicList}>
                {t.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
