"use client";

import styles from "./Card.module.css";

export default function Card({ children, className, hover = true, as: Component = "article", ...props }) {
  const hoverClass = hover ? styles.hover : "";
  return (
    <Component className={`${styles.card} ${hoverClass} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
}