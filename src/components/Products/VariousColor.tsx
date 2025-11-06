import React from "react";
import styles from "./variouscolor.module.css";

export default function VariousColorPage() {
  return (
    <div className={styles.configMain}>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Various Color</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.mainContent}>
          {/* Left Column - Image */}
          <div className={styles.imageColumn}>
            <img
              src="/assets/product/tape.png"
              alt="Various Color Tapes"
              className={styles.productImage}
            />
          </div>

          {/* Right Column - Information */}
          <div className={styles.infoColumn}>
            {/* Stock Color */}
            <div className={styles.infoBlock}>
              <h2 className={styles.infoTitle}>STOCK COLOR</h2>
              <p className={styles.infoText}>
                Beige / Black / Blue / Brown / Green / Grey /
                <br className={styles.mobileBreak} /> Light Blue /{" "}
                <br className={styles.mobileBreak2} /> Lime / Navyblue / Orange
                / Pink /<br className={styles.mobileBreak} /> Purple / Red /
                Tiffany /<br className={styles.mobileBreak2} /> Violet / White /
                Yellow
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

        {/* Collection Image Section */}
        <div className={styles.collectionSection}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/assets/product/mobile/collection.png"
            />
            <img
              src="/assets/product/collection.png"
              alt="Product Collection"
              className={styles.collectionImage}
            />
          </picture>
        </div>
      </div>

      {/* Fixed E-Shop Button */}
      <a href="#" className={styles.shopButton}>
        Go To E-Shop
      </a>
    </div>
  );
}
