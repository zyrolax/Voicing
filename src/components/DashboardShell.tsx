import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, Mic2, Code2, Settings, LifeBuoy } from "lucide-react";
import type { ReactNode } from "react";

const items = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/voices", label: "Voice library", icon: Mic2, exact: false },
  { to: "/dashboard/embed", label: "Embed snippet", icon: Code2, exact: false },
];

export function DashboardShell({ children }: { children?: ReactNode }) {
  const location = useLocation();
  return (
    <div className="flex min-h-screen w-full bg-surface-muted/40">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface md:flex">
        <Link to="/" className="flex items-center gap-2 px-5 py-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy text-white">
            <Mic2 className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold">Speaky</span>
        </Link>
        <nav className="flex-1 space-y-1 px-3 py-2">
          {items.map((it) => {
            const active = it.exact
              ? location.pathname === it.to
              : location.pathname.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-brand-navy text-white"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <it.icon className="h-4 w-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border p-3">
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary" href="#">
            <Settings className="h-4 w-4" /> Settings
          </a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary" href="#">
            <LifeBuoy className="h-4 w-4" /> Support
          </a>
          <div className="mt-3 flex items-center gap-3 rounded-lg bg-secondary px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-xs font-semibold text-white">MC</div>
            <div className="text-xs">
              <p className="font-semibold">Maya Chen</p>
              <p className="text-muted-foreground">Pro plan</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden">{children ?? <Outlet />}</main>
    </div>
  );
}
