"use client";

import styles from "./Section.module.css";

export default function Section({ children, className, narrow = false, noPadding = false, as: Component = "section", ...props }) {
  const paddingClass = noPadding ? styles.noPadding : "";
  const narrowClass = narrow ? styles.narrow : "";
  return (
    <Component className={`${styles.section} ${paddingClass} ${narrowClass} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
}