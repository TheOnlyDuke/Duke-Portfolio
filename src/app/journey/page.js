"use client";

import { journey } from "@/data/journey";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Chip from "@/components/ui/Chip";
import styles from "./journey.module.css";

const kindIcons = {
  education: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5v-6z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  milestone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  publication: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  teaching: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  role: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  research: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  project: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  focus: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

const kindLabels = {
  education: "Education",
  milestone: "Milestone",
  publication: "Publication",
  teaching: "Teaching",
  role: "Role",
  research: "Research",
  project: "Project",
  focus: "Focus",
};

const kindColors = {
  education: "accent",
  milestone: "warning",
  publication: "success",
  teaching: "accent",
  role: "default",
  research: "accent",
  project: "default",
  focus: "accent",
};

export default function JourneyPage() {
  return (
    <>
      <Section>
        <Container narrow>
          <PageHeader
            eyebrow="Timeline"
            title="Journey"
            subtitle="Education, research, teaching, and projects — the path so far."
          />
        </Container>
      </Section>
      <Section>
        <Container narrow>
          <div className={styles.timeline} role="list" aria-label="Career journey">
            {journey.map((item, i) => (
              <Reveal key={`${item.kind}-${item.year}-${item.title}`} delay={Math.min(i * 40, 320)}>
                <article className={`${styles.item} ${item.kind === "focus" ? styles.current : ""}`} role="listitem">
                  <div className={styles.marker}>
                    <span className={styles.icon} aria-hidden="true">{kindIcons[item.kind] || kindIcons.milestone}</span>
                  </div>
                  <div className={styles.content}>
                    <header className={styles.header}>
                      <div className={styles.meta}>
                        <span className={styles.year}>{item.year}</span>
                        <Chip size="xs" variant={kindColors[item.kind] || "default"}>
                          {kindLabels[item.kind] || item.kind}
                        </Chip>
                      </div>
                      <h3 className={styles.title}>{item.title}</h3>
                    </header>
                    <p className={styles.summary}>{item.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}