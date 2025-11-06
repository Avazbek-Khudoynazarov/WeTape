import React from "react";
import styles from "./face.module.css";

export default function FacePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Face</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/face.png"
              alt="Face Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Size */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK SIZE</h2>
              <p className={styles.infoText}>
                W17.5mm x L5m / W25mm x L5m / W50mm x L5m
              </p>
            </div>

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>Soft</p>
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
            srcSet="/assets/product/mobile/face2.png"
          />
          <img
            src="/assets/product/face2.png"
            alt="Face Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
