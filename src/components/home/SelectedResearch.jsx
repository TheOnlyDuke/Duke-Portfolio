"use client";

import { research } from "@/data/research";
import ResearchCard from "@/components/research/ResearchCard";
import Reveal from "@/components/ui/Reveal";
import Link from "@/components/ui/Link";
import styles from "./SelectedResearch.module.css";

const featured = research.slice(0, 3);

export default function SelectedResearch() {
  return (
    <section className={styles.section} aria-labelledby="research-title">
      <header className={styles.header}>
        <h2 id="research-title" className={styles.title}>Research</h2>
        <Link href="/research" className={styles.viewAll}>
          View all research
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </header>
      <div className={styles.grid}>
        {featured.map((item, i) => (
          <Reveal key={item.slug} delay={i * 40}>
            <ResearchCard entry={item} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}