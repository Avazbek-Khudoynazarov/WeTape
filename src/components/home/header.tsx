import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            THE WORLD&apos;S<br />
            BEST KINESIOLOGY TAPE
          </h1>
        </div>
      </div>
    </header>
  );
}
