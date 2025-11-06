import React from "react";
import styles from "./coolhot.module.css";

export default function CoolHotPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Cool/Hot</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/cool.png"
              alt="Cool/Hot Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Color */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>
                Beige / Black / Blue / Brown / Green / Grey / Light Blue
                <br />
                Lime / Navyblue / Orange / Pink / Purple / Red / Tiffany
                <br />
                Violet / White / Yellow
              </p>
            </div>

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>Strong</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={styles.additionalImageSection}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/product/mobile/cool2.png"
          />
          <img
            src="/assets/product/cool2.png"
            alt="Cool/Hot Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
