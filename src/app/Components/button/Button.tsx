import React from "react";

interface ButtonTypeProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  title?: string;
  ariaLabel?: string;
}

export default function Button({
  type = "button",
  className,
  onClick,
  children,
  title,
  ariaLabel,
}: ButtonTypeProps) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}