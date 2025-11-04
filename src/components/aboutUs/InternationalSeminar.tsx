"use client";

import React, { useState, TouchEvent } from "react";
import styles from "./internationalseminar.module.css";

interface SwipeGroupProps {
  images: string[];
  groupIndex: number;
}

function SwipeGroup({ images, groupIndex }: SwipeGroupProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
    if (isRightSwipe && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className={styles.swipeGroup}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.imageCarousel}>
        <div
          className={styles.imageTrack}
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.imageSlide}>
              <img
                src={image}
                alt={`Seminar ${groupIndex + 1}-${index + 1}`}
                className={groupIndex === 2 ? styles.group3Image : styles.groupImage}
              />
            </div>
          ))}
        </div>
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
    [
      "/assets/about/slide/3-1.png",
      "/assets/about/slide/3-2.png",
    ],
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
            <SwipeGroup key={index} images={group} groupIndex={index} />
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
            <p>Address. 318 Jinwi-ro, Jinwi, Pyeongtaek-si, Gyeonggi-do, Korea</p>
          </div>
        </div>
      </div>

      <div className={styles.buttonSection}>
        <a
          href="http://balancetaping.net/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.registerButton}
        >
          Register For The Seminar
          <span className={styles.arrow}>›</span>
        </a>
      </div>
    </div>
  );
}
