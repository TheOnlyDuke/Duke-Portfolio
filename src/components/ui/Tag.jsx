"use client";

import styles from "./Tag.module.css";

export default function Tag({ children, className, ...props }) {
  return (
    <span className={`${styles.tag} ${className || ""}`} {...props}>
      {children}
    </span>
  );
}