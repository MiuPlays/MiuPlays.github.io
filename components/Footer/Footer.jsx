import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>Miu<span>Plays</span></div>
          <p>Just me playing games I enjoy.</p>
          {/* <a href="mailto:kasunmiu@gmail.com" className={styles.email}>kasunmiu@gmail.com</a> */}
        </div>
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/gameplay-diary">Gameplay Diary</Link>
          <Link href="/developer-spotlight">Developer Spotlight</Link>
          <Link href="/submit-game">Submit Game</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Miu Plays</p>
        <p>Independent gaming content</p>
      </div>
    </footer>
  );
}
