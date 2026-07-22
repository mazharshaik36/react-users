import { type ReactNode } from "react";

type FormFieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">{label}</label>

      {children}

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
