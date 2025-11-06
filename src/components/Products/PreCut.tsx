import React from "react";
import styles from "./precut.module.css";

export default function PreCutPage() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Pre-cut</h1>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/pre.png"
              alt="Pre-cut Tapes"
              className={styles.productImage}
            />
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK SIZE</h2>
              <p className={styles.infoText}>25cm x 20 pieces</p>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>
                Beige / Black / Blue / Brown / Green / Grey / Light Blue /
                <br />
                Lime / Navyblue / Orange / Pink / Purple / Red / Tiffany /
                <br />
                Violet / White / Yellow
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>Strong / Standard / Soft</p>
            </div>

            {/* Special Order */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>SPECIAL ORDER</h2>
              <p className={styles.infoText}>
                Size, color, cutting interval and adhesion can be adjusted
                <br />
                according to the orderer&apos;s request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={styles.additionalImageSection}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/product/mobile/pre2.png"
          />
          <img
            src="/assets/product/pre2.png"
            alt="Pre-cut Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
