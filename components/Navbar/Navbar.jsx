'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/gameplay-diary', label: 'Gameplay Diary' },
 /*  { href: '/developer-spotlight', label: 'Devs' }, */
  { href: '/submit-game', label: 'Submit Game' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon} />
          Miu<span>Plays</span>
        </Link>
        <nav className={styles.nav}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${pathname === l.href ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
