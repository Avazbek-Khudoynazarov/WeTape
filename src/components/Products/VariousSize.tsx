import React from "react";
import styles from "./varioussize.module.css";

export default function VariousSizePage() {
  return (
    <div>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Various Size</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/size.png"
              alt="Various Size Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Size */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK SIZE</h2>
              <p className={styles.infoText}>
                W17.5mm x L5m / W25mm x L5m / W37.5mm x L5m /
                <br />
                W75mm x L5m / W100mm x L5m / W50mm x L32m
              </p>
            </div>

            {/* Stock Color */}
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

            {/* Adhesion */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>ADHESION</h2>
              <p className={styles.infoText}>
                Strong / Standard
              </p>
            </div>

            {/* Special Order */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>SPECIAL ORDER</h2>
              <p className={styles.infoText}>
                Size, color and adhesion can be adjusted according to the
                <br />
                orderer&apos;s request.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className={styles.additionalImageSection}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/product/mobile/size2.png" />
          <img
            src="/assets/product/size2.png"
            alt="Various Size Collection"
            className={styles.additionalImage}
          />
        </picture>
      </div>
    </div>
  );
}
