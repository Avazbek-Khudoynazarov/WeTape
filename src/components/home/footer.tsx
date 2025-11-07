import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://bbtape.com/" className={styles.iconLink}>
          <Image
            src="/assets/home/home.svg"
            alt="Home"
            width={32}
            height={32}
          />
        </a>
        <a href="http://bbtape.shop/" className={styles.iconLink}>
          <Image
            src="/assets/home/bag.svg"
            alt="Shopping"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.youtube.com/@bbtape7423"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}>
          <Image
            src="/assets/home/youtube.svg"
            alt="YouTube"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}>
          <Image
            src="/assets/home/instagram.svg"
            alt="Instagram"
            width={32}
            height={32}
          />
        </a>
      </div>

      <div className={styles.companyInfo}>
        <p className={styles.infoRow}>
          <span className={styles.label}>Wetape Inc.</span>
          <span className={styles.separator}>|</span>
          <span className={styles.label}>Representative </span>
          <span>Seung-won Choi</span>
        </p>
        <p className={styles.infoRow}>
          <span className={styles.label}>Address </span>
          <span>318 Jinwi-ro, Jinwi, Pyeongtaek-si, Gyeonggi-do, Korea</span>
        </p>
        <p className={styles.infoRow}>
          <span className={styles.label}>Tel </span>
          <span>+82 70 4711 7900</span>
          <span className={styles.separator}>|</span>
          <span className={styles.label}>Email </span>
          <span>info@bbtape.com</span>
        </p>
        <p className={styles.infoRow}>
          <span className={styles.label}>Business Registration No. </span>
          <span>264-81-04273</span>
        </p>
      </div>

      <div className={styles.copyright}>
        <p>© WETAPE Inc 2025. All rights reserved.</p>
      </div>

      <div className={styles.support}>
        <p>
          Supported by Ministry of Culture, Sports and Tourism and Korea Sports
          Promotion Foundation.
        </p>
      </div>
    </footer>
  );
}
