'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function SubmitGamePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kasunmiu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <span className={styles.eyebrow}>// reach out</span>
      <h1>Submit Your Game</h1>
      <p className={styles.intro}>
        If you're an indie developer and you'd like me to check out your game, send me an email. I'm always open to discovering something new. No pitch decks needed — just tell me about your game.
      </p>

      <div className={styles.emailBlock}>
        <div>
          <span>Send your game to</span>
          <a href="mailto:kasunmiu@gmail.com">kasunmiu@gmail.com</a>
        </div>
        <button className={styles.copyBtn} onClick={copyEmail}>
          {copied ? '✓ Copied' : 'Copy email'}
        </button>
      </div>

      <div className={styles.section}>
        <h2>What to include</h2>
        <div className={styles.list}>
          {[
            'Game name',
            'A link to your game page or demo (itch.io, Steam, etc.)',
            'A short description of what it is and why it matters to you',
          ].map((item, i) => (
            <div key={i} className={styles.listItem} data-num={`0${i + 1}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.note}>
        <strong>Note:</strong> Not all submitted games will be featured. I play games that genuinely interest me, and I want to give every featured game the time and attention it deserves. If I'm not able to cover your game, I'll let you know.
      </div>
    </div>
  );
}
