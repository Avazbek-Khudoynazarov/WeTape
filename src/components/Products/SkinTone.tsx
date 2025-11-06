import React from "react";
import styles from "./skintone.module.css";

export default function SkinTonePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Skin Tone</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/skin.png"
              alt="Skin Tone Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Color */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>
                PORCELAIN / VANILLA / HAZELNUT / TIRAMISU / GANACHE
              </p>
            </div>

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>Strong / Standard / Soft</p>
            </div>

            {/* Special Order */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>SPECIAL ORDER</h2>
              <p className={styles.infoText}>
                Size, color and adhesion can be adjusted according to the
                orderer&apos;s request.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className={styles.additionalImageSection}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/product/mobile/skin2.png"
            />
            <img
              src="/assets/product/skin2.png"
              alt="Skin Tone Collection"
              className={styles.additionalImage}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
