"use client";

import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cetl-gold/50 disabled:opacity-50";

  const variants = {
    gold: "bg-cetl-gold text-cetl-darker hover:bg-cetl-gold-light",
    outline:
      "border border-cetl-gold text-cetl-gold hover:bg-cetl-gold hover:text-cetl-darker",
    ghost: "text-cetl-text-muted hover:text-cetl-text",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
