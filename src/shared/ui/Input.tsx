"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  const baseStyles = "px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400";

  return <input className={clsx(baseStyles, className)} {...props} />;
};