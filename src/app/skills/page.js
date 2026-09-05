"use client";

import { skills } from "@/data/skills";
import SkillGroup from "@/components/skills/SkillGroup";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import styles from "./skills.module.css";

export default function SkillsPage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Competencies"
            title="Skills"
            subtitle="Organized by domain. Not a laundry list — these are the areas I work in daily."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={styles.groups}>
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 40}>
                <SkillGroup group={group} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}