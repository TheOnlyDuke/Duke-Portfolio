"use client";

import styles from "./SkillTag.module.css";

export default function SkillTag({ name, kind, color, label }) {
  return (
    <span className={styles.tag} style={{ "--tag-color": color }}>
      <span className={styles.name}>{name}</span>
      <span className={styles.kind}>{label}</span>
    </span>
  );
}