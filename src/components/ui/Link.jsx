"use client";

import styles from "./Link.module.css";

export default function Link({ children, href, className, external = false, ...props }) {
  const Component = external ? "a" : href ? "a" : "span";
  const target = external ? "_blank" : undefined;
  const rel = external ? "noopener noreferrer" : undefined;

  return (
    <Component
      className={`${styles.link} ${className || ""}`}
      href={href}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Component>
  );
}