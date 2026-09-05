"use client";

import styles from "./Surface.module.css";

export default function Surface({ children, className, as: Component = "div", ...props }) {
  return (
    <Component className={`${styles.surface} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
}