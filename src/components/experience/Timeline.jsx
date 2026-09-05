"use client";

import { experience } from "@/data/experience";
import TimelineEntry from "./TimelineEntry";
import Reveal from "@/components/ui/Reveal";
import styles from "./Timeline.module.css";

const typeOrder = ["education", "teaching", "association", "role"];

const grouped = experience.reduce((acc, item) => {
  if (!acc[item.type]) acc[item.type] = [];
  acc[item.type].push(item);
  return acc;
}, {});

const types = typeOrder.filter((t) => grouped[t] && grouped[t].length > 0);

export default function Timeline() {
  return (
    <section className={styles.timeline} aria-label="Experience timeline">
      {types.map((type) => (
        <div key={type} className={styles.group}>
          <h3 className={styles.groupTitle}>{typeLabel(type)}</h3>
          <div className={styles.entries}>
            {grouped[type].map((entry, i) => (
              <Reveal key={`${type}-${i}`} delay={i * 30}>
                <TimelineEntry entry={entry} isLast={i === grouped[type].length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function typeLabel(type) {
  const labels = {
    education: "Education",
    teaching: "Teaching",
    association: "Associations & Service",
    role: "Roles & Open Source",
  };
  return labels[type] || type;
}