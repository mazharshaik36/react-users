import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type FormLayoutProps = {
  title: string;
  subtitle?: string;
  backTo?: string;
  onBack?: () => void;
  children: ReactNode;
};

export default function FormLayout({ title, subtitle, backTo, onBack, children }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
        {(backTo || onBack) && (
          <>
            {onBack ? (
              <button
                type="button"
                onClick={onBack}
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            ) : (
              <Link
                to={backTo!}
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
            )}
          </>
        )}

        <h1 className="text-3xl font-bold">{title}</h1>

        {subtitle ? (
          <p className="mt-2 mb-8 text-gray-500">{subtitle}</p>
        ) : (
          <div className="mb-8" />
        )}

        {children}
      </div>
    </div>
  );
}
