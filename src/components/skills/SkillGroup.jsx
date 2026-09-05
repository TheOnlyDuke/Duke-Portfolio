"use client";

import SkillTag from "./SkillTag";
import styles from "./SkillGroup.module.css";

export default function SkillGroup({ group }) {
  const kindColors = {
    language: "var(--color-accent)",
    framework: "var(--color-accent-2)",
    concept: "var(--color-accent-3)",
    tool: "var(--color-text-tertiary)",
  };

  const kindLabels = {
    language: "Lang",
    framework: "Fwk",
    concept: "Concept",
    tool: "Tool",
  };

  return (
    <section className={styles.group} aria-labelledby={`${group.group.toLowerCase().replace(/\s+/g, "-")}-title`}>
      <h3 id={`${group.group.toLowerCase().replace(/\s+/g, "-")}-title`} className={styles.title}>
        {group.group}
      </h3>
      <ul className={styles.list}>
        {group.items.map((item, i) => (
          <li key={`${group.group}-${item.name}-${i}`}>
            <SkillTag
              name={item.name}
              kind={item.kind}
              color={kindColors[item.kind] || kindColors.concept}
              label={kindLabels[item.kind] || kindLabels.concept}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}