"use client";

import styles from "./Chip.module.css";

export default function Chip({ children, variant = "default", size = "md", className, onClick, href, ...props }) {
  const variantClass = styles[variant] || styles.default;
  const sizeClass = styles[size] || styles.md;
  const Component = href ? "a" : onClick ? "button" : "span";

  return (
    <Component
      className={`${styles.chip} ${variantClass} ${sizeClass} ${className || ""}`}
      onClick={onClick}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
}