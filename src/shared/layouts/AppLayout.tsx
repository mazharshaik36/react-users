import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-lg">{children}</div>
    </div>
  );
}
