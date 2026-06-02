'use client';
import { useState, useMemo } from 'react';
import GameCard from '@/components/GameCard/GameCard';
import { games, genres, platforms, statuses } from '@/lib/data';
import styles from './page.module.css';

export default function GameplayDiaryPage() {
  const [genre, setGenre] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [status, setStatus] = useState('All');

  const filtered = useMemo(() => {
    return games.filter(g => {
      const matchGenre = genre === 'All' || g.tags.includes(genre);
      const matchPlatform = platform === 'All' || g.platform === platform;
      const matchStatus = status === 'All' || g.status === status;
      return matchGenre && matchPlatform && matchStatus;
    });
  }, [genre, platform, status]);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>// all games</span>
        <h1>{/* Gameplay Diary */} [ ⚠ Under Construction ]</h1>
        <p>Every game I've played, captured, or looked at. Honest takes, no fluff.</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Genre</label>
          <select
            className={styles.filterSelect}
            value={genre}
            onChange={e => setGenre(e.target.value)}
          >
            {genres.map(g => <option key={g}>{g}</option>)}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Platform</label>
          <select
            className={styles.filterSelect}
            value={platform}
            onChange={e => setPlatform(e.target.value)}
          >
            {platforms.map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Status</label>
          <select
            className={styles.filterSelect}
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <p className={styles.count}>{filtered.length} game{filtered.length !== 1 ? 's' : ''} found</p>

      <div className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map(game => <GameCard key={game.id} game={game} />)
        ) : (
          <div className={styles.empty}>
            <span>🎮</span>
            No games match those filters.
          </div>
        )}
      </div>
    </div>
  );
}
