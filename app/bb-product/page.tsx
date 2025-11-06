"use client";

import { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/home/footer';
import BackToTop from '@/components/BackToTop/BackToTop';
import VariousColorPage from '@/components/Products/VariousColor';
import SkinTonePage from '@/components/Products/SkinTone';
import CoolHotPage from '@/components/Products/CoolHot';
import PatternedPage from '@/components/Products/Patterned';
import PreCutPage from '@/components/Products/PreCut';
import VariousSizePage from '@/components/Products/VariousSize';
import BeautyPage from '@/components/Products/Beauty';
import FacePage from '@/components/Products/Face';
import CrossTapePage from '@/components/Products/CrossTape';
import AcuTapePage from '@/components/Products/AcuTape';
import TapeTypesPage from '@/components/Products/TapeTypes';
import styles from './page.module.css';

const bbProductLinksRows = [
  [
    { label: 'Various Color', href: '#various-color' },
    { label: 'Skin Tone', href: '#skin-tone' },
    { label: 'Cool/Hot', href: '#cool-hot' },
    { label: 'Patterned', href: '#patterned' },
    { label: 'Pre-cut', href: '#pre-cut' },
  ],
  [
    { label: 'Various Sizes', href: '#various-sizes' },
    { label: 'Beauty', href: '#beauty' },
    { label: 'Face', href: '#face' },
    { label: 'BB Cross Tape', href: '#bb-cross-tape' },
    { label: 'BB ACU Tape', href: '#bb-acu-tape' },
    { label: 'BB Tape Types', href: '#bb-tape-types' },
  ],
];

export default function BBProduct() {
  const [activeSection, setActiveSection] = useState<string>('#various-color');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSectionChange = (href: string) => {
    setActiveSection(href);
  };

  const shouldShowSection = (sectionId: string) => {
    if (!isMobile) return true;
    return activeSection === sectionId;
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar
        childLinksRows={bbProductLinksRows}
        pageTitle="BB PRODUCT"
        subtitle={!isMobile ? "BB TAPE premium" : undefined}
        onChildLinkClick={handleSectionChange}
        activeChildLink={activeSection}
      />

      {shouldShowSection('#various-color') && (
        <div id="various-color">
          <VariousColorPage />
        </div>
      )}

      {shouldShowSection('#skin-tone') && (
        <div id="skin-tone">
          <SkinTonePage />
        </div>
      )}

      {shouldShowSection('#cool-hot') && (
        <div id="cool-hot">
          <CoolHotPage />
        </div>
      )}

      {shouldShowSection('#patterned') && (
        <div id="patterned">
          <PatternedPage />
        </div>
      )}

      {shouldShowSection('#pre-cut') && (
        <div id="pre-cut">
          <PreCutPage />
        </div>
      )}

      {shouldShowSection('#various-sizes') && (
        <div id="various-sizes">
          <VariousSizePage />
        </div>
      )}

      {shouldShowSection('#beauty') && (
        <div id="beauty">
          <BeautyPage />
        </div>
      )}

      {shouldShowSection('#face') && (
        <div id="face">
          <FacePage />
        </div>
      )}

      {shouldShowSection('#bb-cross-tape') && (
        <div id="bb-cross-tape">
          <CrossTapePage />
        </div>
      )}

      {shouldShowSection('#bb-acu-tape') && (
        <div id="bb-acu-tape">
          <AcuTapePage />
        </div>
      )}

      {shouldShowSection('#bb-tape-types') && (
        <div id="bb-tape-types">
          <TapeTypesPage />
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
