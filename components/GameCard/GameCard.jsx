import styles from './GameCard.module.css';

export default function GameCard({ game }) {
  const { title, description, thumbnail, tags = [], platform, status, videoUrl } = game;

  const statusClass = status
    ? styles[status.toLowerCase()] || ''
    : '';

  return (
    <article className={styles.card}>
      {thumbnail ? (
        <img src={thumbnail} alt={title} className={styles.thumb} />
      ) : (
        <div className={styles.thumbPlaceholder}>🎮</div>
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={`${styles.tag} ${styles.genre}`}>
              {tag}
            </span>
          ))}

          {platform?.map(p => (
            <span key={p} className={styles.tag}>
              {p}
            </span>
          ))}

          {status && (
            <span className={`${styles.tag} ${styles.status} ${statusClass}`}>
              {status}
            </span>
          )}
        </div>
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Watch video →
          </a>
        )}
      </div>
    </article>
  );
}
