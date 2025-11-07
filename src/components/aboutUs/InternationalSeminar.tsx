"use client";

import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./internationalseminar.module.css";

interface SwipeGroupProps {
  images: string[];
  groupIndex: number;
  title: string;
}

function SwipeGroup({ images, groupIndex, title }: SwipeGroupProps) {
  return (
    <div className={styles.swipeGroupWrapper}>
      <div className={styles.swipeGroup}>
        <div className={styles.imageCarousel}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageSlide}>
              <img
                src={image}
                alt={`Seminar ${groupIndex + 1}-${index + 1}`}
                className={
                  groupIndex === 2 ? styles.group3Image : styles.groupImage
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carouselTitle}>
        {title}
      </div>
    </div>
  );
}

export default function InternationalSeminarPage() {
  // Image groups for mobile swipable view
  const imageGroups = [
    // First group - 3 images
    [
      "/assets/about/slide/1-1.png",
      "/assets/about/slide/1-2.png",
      "/assets/about/slide/1-3.png",
    ],
    // Second group - 3 images
    [
      "/assets/about/slide/2-1.png",
      "/assets/about/slide/2-2.png",
      "/assets/about/slide/2-3.png",
    ],
    // Third group - 2 images
    ["/assets/about/slide/3-1.png", "/assets/about/slide/3-2.png"],
  ];

  const groupTitles = [
    "Educational program for beginners and experts",
    "Practice program based on scientific evidences",
    "Practical know-how from a taping treatment expert",
  ];

  return (
    <div id="international-seminar">
      <div className={styles.redBanner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>International Seminar</h1>
        </div>
      </div>

      {/* Desktop view - keep original */}
      <div className={styles.heroImage}></div>

      {/* Mobile swipable groups view */}
      <div className={styles.mobileContent}>
        {/* Top text section */}
        <div className={styles.topTextSection}>
          <p className={styles.topText}>
            If you want to expand and lead your market,
            <br />
            improve your clients&apos; taping treatment skills
            <br />
            through our expert training program.
          </p>
        </div>

        {/* All groups visible in column, each swipable independently */}
        <div className={styles.groupsColumn}>
          {imageGroups.map((group, index) => (
            <SwipeGroup
              key={index}
              images={group}
              groupIndex={index}
              title={groupTitles[index]}
            />
          ))}
        </div>

        {/* Bottom contact section */}
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>
            For training program
            <br />
            inquiries contact us:
          </h2>
          <div className={styles.contactInfo}>
            <p>Tel. +82 70 4711 7900 | Fax. +82 31 662 1007</p>
            <p>Email. info@bbtape.com | Website. https://bbtape.com</p>
            <p>
              Address. 318 Jinwi-ro, Jinwi, Pyeongtaek-si, Gyeonggi-do, Korea
            </p>
          </div>
        </div>
      </div>

      <div className={styles.buttonSection}>
        <a
          href="https://bbtape.com/research.php"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.registerButton}>
          Register For The Seminar
          <ChevronRightIcon className={styles.arrow} />
        </a>
      </div>
    </div>
  );
}
