"use client";

import Chip from "@/components/ui/Chip";
import Link from "@/components/ui/Link";
import styles from "./ResearchCard.module.css";

export default function ResearchCard({ entry, compact = false }) {
  const statusColors = {
    "In progress": "accent",
    "Submitted": "warning",
    "Published": "success",
    "Archived": "default",
  };

  const statusVariant = statusColors[entry.status] || "default";

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.area}>{entry.area}</span>
          <span className={styles.period}>{entry.period}</span>
        </div>
        <h3 className={styles.title}>{entry.title}</h3>
        <p className={styles.problem}>{entry.problem}</p>
      </header>

      <div className={styles.body}>
        <div className={styles.methods}>
          {entry.methods.slice(0, compact ? 4 : 6).map((m, i) => (
            <Chip key={`${m}-${i}`} size="sm" variant="default">
              {m}
            </Chip>
          ))}
          {entry.methods.length > (compact ? 4 : 6) && (
            <Chip size="sm" variant="default">
              +{entry.methods.length - (compact ? 4 : 6)}
            </Chip>
          )}
        </div>

        {entry.results && (
          <p className={styles.results}>{entry.results}</p>
        )}
      </div>

      <footer className={styles.footer}>
        <Chip size="sm" variant={statusVariant}>
          {entry.status}
        </Chip>
        <div className={styles.links}>
          {entry.links.github && (
            <Link
              href={entry.links.github}
              external
              className={styles.link}
              aria-label={`View ${entry.title} on GitHub`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          )}
          {entry.links.paper && (
            <Link
              href={entry.links.paper}
              external
              className={styles.link}
              aria-label={`Read paper: ${entry.title}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}