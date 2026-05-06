import Link from 'next/link';
import { developers } from '@/lib/data';
import styles from './page.module.css';

export function generateStaticParams() {
  return developers.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const dev = developers.find(d => d.slug === params.slug);
  return { title: dev ? `${dev.name} – Miu Plays` : 'Developer – Miu Plays' };
}

export default function DeveloperPage({ params }) {
  const dev = developers.find(d => d.slug === params.slug);

  if (!dev) {
    return (
      <div className={styles.notFound}>
        <h1>Developer not found</h1>
        <p>This spotlight doesn't exist.</p>
        <Link href="/developer-spotlight" className={styles.back}>← Back to spotlights</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link href="/developer-spotlight" className={styles.back}>← All developers</Link>

      <div className={styles.header}>
        <div className={styles.avatar}>{dev.name.charAt(0)}</div>
        <div className={styles.headerText}>
          <h1>{dev.name}</h1>
          <p>{dev.intro}</p>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>// the game</span>
        <div className={styles.gameBox}>
          <h3>{dev.featuredGame}</h3>
          <p>{dev.gameInfo}</p>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.sectionLabel}>// my thoughts</span>
        <div className={styles.thoughtsBox}>"{dev.thoughts}"</div>
      </div>

      <div className={styles.links}>
        {dev.gamePageUrl && (
          <a href={dev.gamePageUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            ↗ Game Page
          </a>
        )}
        {dev.twitter && (
          <a href={dev.twitter} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
            ↗ Socials
          </a>
        )}
      </div>

      <div className={styles.cta}>
        <p>Are you a developer? Want your game featured?</p>
        <a href="mailto:kasunmiu@gmail.com">kasunmiu@gmail.com</a>
      </div>
    </div>
  );
}
