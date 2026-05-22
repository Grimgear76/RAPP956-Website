import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'The Problem', href: '#problem' },
  { label: 'About', href: '#about' },
  { label: 'Program', href: '#program' },
  { label: 'Topics', href: '#topics' },
  { label: 'For Districts', href: '#district' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.brand}>
        <span className={styles.brandRapp}>RAPP</span>
        <span className={styles.brandSub}>956 · RGV</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <span className={styles.comingSoon}>
            Coming Soon <span className={styles.wink}>😉</span>
          </span>
        </li>
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerX : ''} />
        <span className={menuOpen ? styles.burgerX : ''} />
        <span className={menuOpen ? styles.burgerX : ''} />
      </button>
    </nav>
  )
}
