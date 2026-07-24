import { SearchX } from "lucide-react";
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export default function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-slate-100 p-5 text-slate-500">
        {icon ?? <SearchX size={36} />}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      {description && <p className="mt-2 max-w-sm text-sm text-slate-500">{description}</p>}
    </div>
  );
}
