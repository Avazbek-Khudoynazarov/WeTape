"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import styles from "./page.module.css";
import ProcessesPage from "@/components/aboutUs/Processes";
import GlobalNetworkPage from "@/components/aboutUs/GlobalNetwork";
import BBTapePage from "@/components/aboutUs/BBTape";
import InternationalSeminarPage from "@/components/aboutUs/InternationalSeminar";
import ScientificEvidencePage from "@/components/aboutUs/ScientificEvidence";

const aboutUsLinks = [
  { label: "WETAPE INC.", href: "#wetape-inc" },
  { label: "Processes", href: "#processes" },
  { label: "Our Global Network", href: "#global-network" },
  { label: "BB TAPE", href: "#bb-tape" },
  { label: "International Seminar", href: "#international-seminar" },
  { label: "Scientific Evidence", href: "#scientific-evidence" },
];

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState<string>("#wetape-inc");
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
        childLinks={aboutUsLinks}
        pageTitle="ABOUT US"
        onChildLinkClick={handleSectionChange}
        activeChildLink={activeSection}
      />

      {shouldShowSection("#wetape-inc") && (
        <>
          <div id="wetape-inc">
            <div className={styles.heroImage}>
              <div className={styles.redBanner}>
                <div className={styles.bannerContent}>
                  <h1 className={styles.bannerTitle}>WETAPE Inc.</h1>
                  <p className={styles.bannerSubtitle}>
                    Increase Your Market Dominance with Taping
                    <br /> Treatment Experts!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>
                  A company specialized in treatment purpose tape, established
                  in 1997
                </h3>
                <p className={styles.cardText}>
                  We have been producing and developing body taping products
                  since 1997. We also offer efficient taping training courses
                  with the world&apos;s best instructors.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>
                  Proven products through active research and development
                </h3>
                <p className={styles.cardText}>
                  We aim to develop sports tape that can be applied to all parts
                  of the body. We are working to develop eco-friendly sports
                  tape.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>
                  Premium products through quality control
                </h3>
                <p className={styles.cardText}>
                  We comply with ISO 13485 quality management system in all
                  processes. We completed major product registration, including
                  FDA, CE, BSCI and UKCA.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>
                  Stable manufacturing capabilities recognized globally
                </h3>
                <p className={styles.cardText}>
                  We reliably supply a variety of brands to 40 different
                  companies in 34 countries. We can quickly and accurately
                  reflect your requirements in our products.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>
                  Sustainable growth and trust through ESG management system
                </h3>
                <p className={styles.cardText}>
                  We are committed to pursuing the sound growth and enhancing
                  mutual trust among customers, employees, and the organization
                  by implementing the ISO 14001 Environmental Management System
                  and the ISO 45001 Health and Safety Management System.
                </p>
              </div>
              <div className={styles.certificationLogos}>
                <img
                  src="/assets/home/logo/1.svg"
                  alt="ISO 13485"
                  className={styles.logoLarge}
                />
                <img
                  src="/assets/home/logo/2.svg"
                  alt="ISO 14001"
                  className={styles.logoLarge}
                />
                <img
                  src="/assets/home/logo/3.svg"
                  alt="ISO 45001"
                  className={styles.logoLarge}
                />
                <img
                  src="/assets/home/logo/4.svg"
                  alt="CE"
                  className={styles.logoSmall}
                />
                <img
                  src="/assets/home/logo/5.svg"
                  alt="FDA"
                  className={styles.logoSmall}
                />
                <img
                  src="/assets/home/logo/6.svg"
                  alt="UKCA"
                  className={styles.logoSmall}
                />
              </div>
            </div>
          </section>
        </>
      )}

      {shouldShowSection("#processes") && (
        <div id="processes">
          <ProcessesPage />
        </div>
      )}

      {shouldShowSection("#global-network") && (
        <div id="global-network">
          <GlobalNetworkPage />
        </div>
      )}

      {shouldShowSection("#bb-tape") && (
        <div id="bb-tape">
          <BBTapePage />
        </div>
      )}

      {shouldShowSection("#international-seminar") && (
        <div id="international-seminar">
          <InternationalSeminarPage />
        </div>
      )}

      {shouldShowSection("#scientific-evidence") && (
        <div id="scientific-evidence">
          <ScientificEvidencePage />
        </div>
      )}

      <Footer />
      <BackToTop />
    </div>
  );
}
