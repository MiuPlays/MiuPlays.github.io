import Link from 'next/link';
import styles from './DevCard.module.css';

export default function DevCard({ developer }) {
  const { slug, name, bio, featuredGame } = developer;

  return (
    <article className={styles.card}>
      <div className={styles.avatar}>
        {name.charAt(0).toUpperCase()}
      </div>
      <div className={styles.name}>{name}</div>
      <p className={styles.bio}>{bio}</p>
      {featuredGame && (
        <div>
          <div className={styles.featuredLabel}>Featured game</div>
          <div className={styles.featuredGame}>{featuredGame}</div>
        </div>
      )}
      <Link href={`/developer-spotlight/${slug}`} className={styles.readBtn}>
        Read →
      </Link>
    </article>
  );
}
