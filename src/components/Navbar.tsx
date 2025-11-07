"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface ChildLink {
  label: string;
  href: string;
}

interface NavbarProps {
  childLinks?: ChildLink[];
  childLinksRows?: ChildLink[][];
  pageTitle?: string;
  subtitle?: string;
  onChildLinkClick?: (href: string) => void;
  activeChildLink?: string;
}

export default function Navbar({
  childLinks,
  childLinksRows,
  pageTitle,
  subtitle,
  onChildLinkClick,
  activeChildLink,
}: NavbarProps) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>(activeChildLink || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
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

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sync activeHash with activeChildLink prop
  useEffect(() => {
    if (activeChildLink) {
      setActiveHash(activeChildLink);
    }
  }, [activeChildLink]);

  const isChildActive = (href: string) => {
    // If mobile and activeChildLink prop is provided, use it (mobile tab mode)
    if (isMobile && activeChildLink !== undefined) {
      return activeChildLink === href;
    }

    // Otherwise use internal state (desktop scroll mode)
    if (href.startsWith("#")) {
      return activeHash === href;
    }
    return pathname === href && activeHash === "";
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // If mobile and onChildLinkClick is provided, use it (mobile tab mode)
    if (isMobile && onChildLinkClick) {
      onChildLinkClick(href);
      return;
    }

    // Otherwise do smooth scroll (desktop mode)
    if (href.startsWith("#")) {
      setActiveHash(href);
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Dynamically calculate the navbar height
        const navbarWrapper = document.querySelector(
          `.${styles.navbarWrapper}`
        ) as HTMLElement;
        const navbarHeight = navbarWrapper ? navbarWrapper.offsetHeight : 150;

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      setActiveHash("");
    }
  };

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
            src="/assets/home/logo.svg"
            alt="WE tape"
            width={180}
            height={60}
            priority
            className={styles.logoImage}
          />
        </Link>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href="/about-us"
              className={`${styles.navLink} ${
                isActive("/about-us") ? styles.active : ""
              }`}>
              ABOUT US
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/bb-product"
              className={`${styles.navLink} ${
                isActive("/bb-product") ? styles.active : ""
              }`}>
              BB PRODUCT
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/guides"
              className={`${styles.navLink} ${
                isActive("/guides") ? styles.active : ""
              }`}>
              GUIDES
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                isActive("/contact") ? styles.active : ""
              }`}>
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
              className={`${styles.mobileNavLink} ${
                isActive("/about-us") ? styles.mobileActive : ""
              }`}
              onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/bb-product"
              className={`${styles.mobileNavLink} ${
                isActive("/bb-product") ? styles.mobileActive : ""
              }`}
              onClick={closeMobileMenu}>
              BB PRODUCT
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/guides"
              className={`${styles.mobileNavLink} ${
                isActive("/guides") ? styles.mobileActive : ""
              }`}
              onClick={closeMobileMenu}>
              GUIDES
            </Link>
          </li>
          <li className={styles.mobileNavItem}>
            <Link
              href="/contact"
              className={`${styles.mobileNavLink} ${
                isActive("/contact") ? styles.mobileActive : ""
              }`}
              onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} />
      )}

      {(pageTitle ||
        (childLinks && childLinks.length > 0) ||
        (childLinksRows && childLinksRows.length > 0)) && (
        <div className={`${styles.childNav} ${(!childLinks || childLinks.length === 0) && (!childLinksRows || childLinksRows.length === 0) ? styles.noBorder : ''}`}>
          <div className={styles.childNavContainer}>
            {pageTitle && (
              <div className={styles.childNavTitleWrapper}>
                <h2 className={styles.childNavTitle}>{pageTitle}</h2>
                {subtitle && (
                  <p className={styles.childNavSubtitle}>{subtitle}</p>
                )}
              </div>
            )}

            {childLinksRows ? (
              <div className={styles.childNavRowsWrapper}>
                {childLinksRows.map((row, rowIndex) => (
                  <div key={rowIndex} className={styles.childNavRow}>
                    <ul className={styles.childNavList}>
                      {row.map((link, linkIndex) => (
                        <li key={linkIndex} className={styles.childNavItem}>
                          <Link
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className={`${styles.childNavLink} ${
                              isChildActive(link.href) ? styles.activeChild : ""
                            }`}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className={styles.childNavList}>
                {childLinks?.map((link, index) => (
                  <li key={index} className={styles.childNavItem}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`${styles.childNavLink} ${
                        isChildActive(link.href) ? styles.activeChild : ""
                      }`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
