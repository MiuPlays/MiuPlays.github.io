import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.grid} />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.tag}>Independent Gaming</span>
          <h1 className={styles.title}>
            Miu<span> Plays</span>
          </h1>
          <p className={styles.subtitle}>
            Just me playing games I enjoy. Honest gameplay from someone who actually cares about games.
          </p>
          <div className={styles.buttons}>

            <a href="https://www.youtube.com/@MiuPlayGames"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              ▶ Watch on YouTube
            </a>
            <Link href="/gameplay-diary" className={styles.btnSecondary}>
              Gameplay Diary
            </Link>
            <Link href="/submit-game" className={styles.btnSecondary}>
              Submit Game
            </Link>
          </div>
          <div className={styles.features}>
            <span className={styles.feature}>I play indie and interesting games</span>
            <span className={styles.feature}>I share genuine gameplay experiences</span>
            <span className={styles.feature}>I support indie developers</span>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/miuplays.png"
            alt="Miu Plays"
            width={500}
            height={500}
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}