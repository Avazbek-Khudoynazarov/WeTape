import React from "react";
import styles from "./crosstape.module.css";

export default function CrossTapePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>BB CROSS TAPE</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/cross.png"
              alt="BB Cross Tape"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* 3 Type */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>3 TYPE</h2>
              <p className={styles.infoText}>
                <strong>A type</strong> - 9 strips / 20 sheets / Strip type 3 x
                4 – 3mm
                <br />
                <strong>B type</strong> - 6 strips / 20 sheets / Strip type 3 x
                4 – 4mm
                <br />
                <strong>C type</strong> - 2 strips / 20 sheets / Strip type 5 x
                6 – 4mm
              </p>
            </div>

            {/* Stock Color */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>
                Beige / Cherrypink / Lavender / Navyblue / Pastelgreen /
                <br />
                Red
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
            srcSet="/assets/product/mobile/cross2.png"
          />
          <img
            src="/assets/product/cross2.png"
            alt="BB Cross Tape Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
