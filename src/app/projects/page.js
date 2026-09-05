"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Chip from "@/components/ui/Chip";
import styles from "./projects.module.css";

const domains = [...new Set(projects.map((p) => p.domain))].sort();

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? projects
    : projects.filter((p) => p.domain === filter);

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Portfolio"
            title="Projects"
            subtitle="Software systems, ML infrastructure, compilers, and robotics — built to understand problems deeply."
          />
          <div className={styles.filterBar} role="group" aria-label="Filter projects by domain">
            <button
              className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
            >
              All
            </button>
            {domains.map((d) => (
              <button
                key={d}
                className={`${styles.filterBtn} ${filter === d ? styles.active : ""}`}
                onClick={() => setFilter(d)}
                aria-pressed={filter === d}
              >
                {d}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i * 30, 240)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className={styles.empty}>No projects match this filter.</p>
          )}
        </Container>
      </Section>
    </>
  );
}