import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The World&apos;s&nbsp;
            <br className={styles.heroBreak1} />
            Best&nbsp;
            <br className={styles.heroBreak2} />
            Kinesiology&nbsp;
            <br className={styles.heroBreak3} />
            Tape
          </h1>
        </div>
      </div>
    </header>
  );
}
