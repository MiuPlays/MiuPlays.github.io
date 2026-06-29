'use client';

import { useState, useMemo } from 'react';
import GameCard from '@/components/GameCard/GameCard';
import { games, platforms, genres } from '@/lib/data';
import styles from './page.module.css';

export default function GameplayDiaryPage() {
  const [genre, setGenre] = useState('All');
  const [platform, setPlatform] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const filtered = useMemo(() => {
    return [...games]
      .filter(g => {
        const matchGenre = genre === 'All' || g.tags.includes(genre);
        const matchPlatform =
          platform === 'All' || g.platform.includes(platform);

        return matchGenre && matchPlatform;
      })
      .sort((a, b) => {
        if (sortBy === 'Newest') {
          return b.releaseDate.localeCompare(a.releaseDate);
        }

        return a.releaseDate.localeCompare(b.releaseDate);
      });
  }, [genre, platform, sortBy]);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>// all games</span>
        <h1>Gameplay Diary</h1>
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
            {genres.map(g => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Platform</label>
          <select
            className={styles.filterSelect}
            value={platform}
            onChange={e => setPlatform(e.target.value)}
          >
            {platforms.map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>Sort By</label>
          <select
            className={styles.filterSelect}
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <p className={styles.count}>
        {filtered.length} game{filtered.length !== 1 ? 's' : ''} found
      </p>

      <div className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map(game => (
            <GameCard key={game.id} game={game} />
          ))
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