"use client";

import Chip from "@/components/ui/Chip";
import styles from "./TimelineEntry.module.css";

const typeIcons = {
  education: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5v-6z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  teaching: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  association: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  role: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

export default function TimelineEntry({ entry, isLast }) {
  const Icon = typeIcons[entry.type] || typeIcons.role;

  return (
    <article className={`${styles.entry} ${isLast ? styles.last : ""}`} style={{ "--icon-color": entry.type === "education" ? "var(--color-accent)" : entry.type === "teaching" ? "var(--color-accent-2)" : entry.type === "association" ? "var(--color-accent-3)" : "var(--color-text-tertiary)" }}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.icon}>{Icon}</span>
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.period}>{entry.period}</span>
            <span className={styles.org}>{entry.org}</span>
          </div>
          <h4 className={styles.role}>{entry.role}</h4>
        </header>
        <p className={styles.summary}>{entry.summary}</p>
        {entry.highlights && entry.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {entry.highlights.map((h, i) => (
              <li key={i} className={styles.highlight}>{h}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}