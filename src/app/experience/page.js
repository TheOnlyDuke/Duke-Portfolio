"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import Timeline from "@/components/experience/Timeline";

export default function ExperiencePage() {
  return (
    <>
      <Section>
        <Container>
          <PageHeader
            eyebrow="Background"
            title="Experience"
            subtitle="Education, teaching, research service, and open-source roles."
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Timeline />
        </Container>
      </Section>
    </>
  );
}