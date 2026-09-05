"use client";

import styles from "./PageHeader.module.css";

export default function PageHeader({ eyebrow, title, subtitle, className }) {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}