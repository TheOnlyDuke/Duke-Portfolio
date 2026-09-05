"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const socials = [
  { label: "GitHub", href: "https://github.com/TheOnlyDuke", ariaLabel: "GitHub profile" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mahdi-abbasi-duke", ariaLabel: "LinkedIn profile" },
  { label: "Email", href: "mailto:mahdi.abbasi@duke.dev", ariaLabel: "Email" },
];

const footerLinks = {
  "Work & Research": [
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/research#publications" },
  ],
  "Background": [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Journey", href: "/journey" },
  ],
  "Connect": [
    { label: "Contact", href: "/contact" },
    { label: "GitHub", href: "https://github.com/TheOnlyDuke", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/mahdi-abbasi-duke", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <p className={styles.brand}>Duke</p>
            <p className={styles.tagline}>Software engineer · AI/ML researcher · Educator</p>
            <div className={styles.socials} role="list" aria-label="Social links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={s.ariaLabel}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.linksColumn} aria-label="Footer navigation">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>{group}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={styles.link}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Mahdi Abbasi (Duke). All rights reserved.</p>
          <p className={styles.built}>Built with Next.js, React, and Material UI.</p>
        </div>
      </div>
    </footer>
  );
}