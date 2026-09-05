"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = scrolled
    ? `${styles.header} ${styles.scrolled}`
    : styles.header;

  return (
    <>
      {mounted && (
        <header className={headerClass} role="banner" aria-hidden="true">
          <div className={styles.inner}>
            <Link href="/" className={styles.brand} aria-label="Home">
              Duke
            </Link>

            <nav className={styles.navDesktop} aria-label="Main navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </header>
      )}

      {mounted && (
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
}