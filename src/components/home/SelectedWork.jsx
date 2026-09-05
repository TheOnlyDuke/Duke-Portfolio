"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Link from "@/components/ui/Link";
import styles from "./SelectedWork.module.css";

const featured = projects.slice(0, 3);

export default function SelectedWork() {
  return (
    <section className={styles.section} aria-labelledby="work-title">
      <header className={styles.header}>
        <h2 id="work-title" className={styles.title}>Selected Work</h2>
        <Link href="/projects" className={styles.viewAll}>
          View all projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </header>
      <div className={styles.grid}>
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 40}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}