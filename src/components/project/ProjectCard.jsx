"use client";

import Chip from "@/components/ui/Chip";
import Link from "@/components/ui/Link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, compact = false }) {
  const year = project.year;

  return (
    <article className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.domain}>{project.domain}</span>
          <span className={styles.year}>{year}</span>
        </div>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.tagline}>{project.tagline}</p>
      </header>

      <div className={styles.body}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tech}>
          {project.tech.slice(0, compact ? 4 : 6).map((t, i) => (
            <Chip key={`${t}-${i}`} size="sm" variant="default">
              {t}
            </Chip>
          ))}
          {project.tech.length > (compact ? 4 : 6) && (
            <Chip size="sm" variant="default">
              +{project.tech.length - (compact ? 4 : 6)}
            </Chip>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <Link
          href={project.links.github}
          external
          className={styles.codeLink}
          aria-label={`View ${project.name} on GitHub`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          Code
        </Link>
        {project.links.demo && (
          <Link
            href={project.links.demo}
            external
            className={styles.demoLink}
            aria-label={`View ${project.name} demo`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Demo
          </Link>
        )}
      </footer>
    </article>
  );
}