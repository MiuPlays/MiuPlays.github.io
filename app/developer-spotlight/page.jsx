import DevCard from '@/components/DevCard/DevCard';
import { developers } from '@/lib/data';
import styles from './page.module.css';

export default function DeveloperSpotlightPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.eyebrow}>// the makers</span>
        <h1>{/* Developer Spotlight */} [ ⚠ Under Construction ]</h1>
        <p>The people behind the games. These are the developers I've covered and want others to know about.</p>
      </div>
      <div className={styles.grid}>
        {developers.map(dev => (
          <DevCard key={dev.slug} developer={dev} />
        ))}
      </div>
    </div>
  );
}
