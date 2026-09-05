"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className,
  startIcon,
  endIcon,
  fullWidth = false,
  type = "button",
  external = false,
  ...props
}) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;
  const widthClass = fullWidth ? styles.fullWidth : "";
  const Component = href ? "a" : "button";

  const commonProps = {
    className: `${styles.button} ${variantClass} ${sizeClass} ${widthClass} ${className || ""}`,
    disabled: !href && disabled,
    onClick,
    type: href ? undefined : type,
    ...props,
  };

  if (href && external) {
    commonProps.target = "_blank";
    commonProps.rel = "noopener noreferrer";
  }

  return (
    <Component {...commonProps} href={href}>
      {startIcon && <span className={styles.icon} aria-hidden="true">{startIcon}</span>}
      <span className={styles.label}>{children}</span>
      {endIcon && <span className={styles.icon} aria-hidden="true">{endIcon}</span>}
    </Component>
  );
}