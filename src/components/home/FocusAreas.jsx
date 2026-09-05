"use client";

import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import styles from "./FocusAreas.module.css";

export default function FocusAreas() {
  return (
    <section className={styles.section} aria-labelledby="focus-title">
      <header className={styles.header}>
        <h2 id="focus-title" className={styles.title}>Current Focus</h2>
      </header>
      <div className={styles.grid}>
        {profile.focusAreas.map((area, i) => (
          <Reveal key={area} delay={i * 40}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>{area}</h3>
              <Tag className={styles.tag}>Active</Tag>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}