"use client";

import { profile } from "@/data/profile";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.inner}>
          <h1 id="hero-title" className={styles.name}>
            {profile.displayName}
          </h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.focus}>
            {profile.focusAreas.slice(0, 3).join(" · ")}
          </p>
          <div className={styles.cta}>
            <Button href="/projects" variant="primary" size="lg" startIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            }>
              View Work
            </Button>
            <Button href="/research" variant="outline" size="lg" startIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            }>
              Research
            </Button>
          </div>
        </div>
        <div className={styles.scrollHint} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}