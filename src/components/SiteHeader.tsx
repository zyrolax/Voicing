import { Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-navy text-white">
            <Mic className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Speaky</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground">
            Product
          </Link>
          <Link to="/simulator" activeProps={{ className: "text-foreground" }} className="hover:text-foreground">
            Live demo
          </Link>
          <Link to="/dashboard" activeProps={{ className: "text-foreground" }} className="hover:text-foreground">
            Dashboard
          </Link>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard"
            className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg bg-brand-orange px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
