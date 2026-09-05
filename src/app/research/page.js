"use client";

import { research } from "@/data/research";
import ResearchCard from "@/components/research/ResearchCard";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Chip from "@/components/ui/Chip";
import styles from "./research.module.css";

const areas = [...new Set(research.map((r) => r.area))].sort();
const statusOrder = ["In progress", "Submitted", "Published", "Archived"];

export default function ResearchPage() {
  const sorted = [...research].sort((a, b) => {
    const ai = statusOrder.indexOf(a.status);
    const bi = statusOrder.indexOf(b.status);
    if (ai !== bi) return ai - bi;
    return b.period.localeCompare(a.period);
  });

  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Research"
            title="Research"
            subtitle="Papers, systems, and experiments at the intersection of ML, systems, and robotics."
          />
          <div className={styles.meta}>
            <div className={styles.stats}>
              {statusOrder.map((s) => {
                const count = research.filter((r) => r.status === s).length;
                if (count === 0) return null;
                return (
                  <Chip key={s} size="sm" variant={s === "Published" ? "success" : s === "Submitted" ? "warning" : s === "In progress" ? "accent" : "default"}>
                    {s}: {count}
                  </Chip>
                );
              })}
            </div>
            <div className={styles.areas}>
              {areas.map((a) => (
                <Chip key={a} size="sm" variant="default">
                  {a}
                </Chip>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className={styles.grid}>
            {sorted.map((entry, i) => (
              <Reveal key={entry.slug} delay={Math.min(i * 30, 240)}>
                <ResearchCard entry={entry} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}