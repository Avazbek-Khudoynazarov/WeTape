"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./NavbarHome.module.css";

export default function NavbarHome() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <button
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu">
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <Link href="/" className={styles.logo}>
          <Image
            src={isMobile ? "/assets/home/logo2.svg" : "/assets/home/logo.svg"}
            alt="WE tape"
            width={180}
            height={60}
            priority
            className={styles.logoImage}
          />
        </Link>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/about-us" className={styles.navLink}>
              ABOUT US
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/bb-product" className={styles.navLink}>
              BB PRODUCT
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/guides" className={styles.navLink}>
              GUIDES
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}>
        <ul className={styles.mobileNavList}>
          <li className={styles.mobileNavItem}>
            <Link
              href="/about-us"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/bb-product"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}>
              BB PRODUCT
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/guides"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}>
              GUIDES
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/contact"
              className={styles.mobileNavLink}
              onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} />
      )}
    </div>
  );
}
