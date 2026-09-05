"use client";

import styles from "./Container.module.css";

export default function Container({ children, className, narrow = false, wide = false, as: Component = "div", ...props }) {
  const layoutClass = narrow ? styles.narrow : wide ? styles.wide : "";
  return (
    <Component className={`${styles.container} ${layoutClass} ${className || ""}`} {...props}>
      {children}
    </Component>
  );
}