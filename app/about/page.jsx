import styles from './page.module.css';

export const metadata = {
  title: 'About – Miu Plays',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <span className={styles.eyebrow}>// who is this</span>
      <h1>About</h1>

      <p className={styles.intro}>
        I'm <em>Kasun Miuranga</em>. I play games I enjoy.
      </p>

      {/* <div className={styles.body}>
        <p>
          I've always gravitated toward indie games — the kind made by small teams or solo developers who had something specific to express. There's a kind of honesty in those games that you don't always find in big productions.
        </p>
        <p>
          Miu Plays started because I wanted a space to document what I was playing without any pressure to be someone I'm not. No screaming, no clickbait, no fake enthusiasm. Just gameplay and genuine reactions.
        </p>
        <p>
          I also care about the people making these games. Most indie developers are pouring everything into their work and not getting nearly enough attention for it. Covering their games is one way I can help, even a little.
        </p>
      </div> */}

      {/* <div className={styles.values}>
        <div className={styles.value}>
          <h3>Honest play</h3>
          <p>No scripts, no hype. I play through games the same way I would if no one was watching.</p>
        </div>
        <div className={styles.value}>
          <h3>Indie focus</h3>
          <p>Big games have enough coverage. I'm here for the ones that need more eyes on them.</p>
        </div>
        <div className={styles.value}>
          <h3>Developer support</h3>
          <p>Every feature I do includes real context about who made the game and why.</p>
        </div>
        <div className={styles.value}>
          <h3>No noise</h3>
          <p>I don't post constantly. I post when I have something worth sharing.</p>
        </div>
      </div> */}

      <div className={styles.contact}>
        <span>Get in touch</span>
        <a href="mailto:kasunmiu@gmail.com">kasunmiu@gmail.com</a>
      </div>
    </div>
  );
}
