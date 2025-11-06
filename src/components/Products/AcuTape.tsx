import React from "react";
import styles from "./acutape.module.css";

export default function AcuTapePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>BB ACU TAPE</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/acu.png"
              alt="BB ACU Tape"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* One Type */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ONE TYPE</h2>
              <p className={styles.infoText}>
                32 strips / 20 sheets / Strip size W9mm x L9mm
              </p>
            </div>

            {/* Stock Color */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>Beige / Navyblue / Red</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={styles.additionalImageSection}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/product/mobile/acu2.png"
          />
          <img
            src="/assets/product/acu2.png"
            alt="BB ACU Tape Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
