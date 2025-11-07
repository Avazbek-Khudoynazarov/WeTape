import React from "react";
import styles from "./tapetypes.module.css";

export default function TapeTypesPage() {
  return (
    <div>
      {/* Red Banner */}
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>BB TAPE TYPES</h1>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.imageSection}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/assets/product/mobile/types.png"
          />
          <img
            src="/assets/product/types.png"
            alt="BB Tape Types"
            className={styles.typesImage}
          />
        </picture>
      </div>
    </div>
  );
}
