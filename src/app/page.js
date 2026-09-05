import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import SelectedResearch from "@/components/home/SelectedResearch";
import FocusAreas from "@/components/home/FocusAreas";
import ContactCTA from "@/components/home/ContactCTA";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <Container>
          <SelectedWork />
        </Container>
      </Section>
      <Section>
        <Container>
          <SelectedResearch />
        </Container>
      </Section>
      <Section>
        <Container>
          <FocusAreas />
        </Container>
      </Section>
      <Section>
        <Container narrow>
          <ContactCTA />
        </Container>
      </Section>
    </>
  );
}