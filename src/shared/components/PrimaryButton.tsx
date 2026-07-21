import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({ children, className = "", ...props }: Props) {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
