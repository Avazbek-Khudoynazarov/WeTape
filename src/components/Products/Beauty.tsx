import React from "react";
import styles from "./beauty.module.css";

export default function BeautyPage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Lymph</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/beauty.png"
              alt="Beauty Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Size */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK SIZE</h2>
              <p className={styles.infoText}>
                W50mm x L5m / W75mm x L5m / W100mm x L5m
              </p>
            </div>

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>Standard / Soft</p>
            </div>

            {/* Special Order */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>SPECIAL ORDER</h2>
              <p className={styles.infoText}>
                Size, color and adhesion can be adjusted
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
            srcSet="/assets/product/mobile/beauty2.png"
          />
          <img
            src="/assets/product/beauty2.png"
            alt="Beauty Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
