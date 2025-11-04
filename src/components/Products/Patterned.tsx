import React from "react";
import styles from "./patterned.module.css";

export default function PatternedPage() {
  return (
    <div>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Patterned</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/patterned.png"
              alt="Patterned Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Pattern */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK PATTERN</h2>
              <p className={styles.infoText}>
                BB Logo / Camo / Dragon / Giraffe / Leopard /Penguin /
                <br />
                Ribbon / Rose / Skull / Tattoo / Zebra
              </p>
            </div>

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>
                Strong / Standard / Soft
              </p>
            </div>

            {/* Special Order */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>SPECIAL ORDER</h2>
              <p className={styles.infoText}>
                Size, pattern and adhesion can be adjusted according to
                <br />
                the orderer&apos;s request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={styles.additionalImageSection}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/product/mobile/patterned2.png" />
          <img
            src="/assets/product/patterned2.png"
            alt="Patterned Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
