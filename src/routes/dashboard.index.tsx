import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { ArrowUpRight, Eye, Headphones, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Speaky" },
      { name: "description", content: "Track widget performance, listen rate and retention uplift." },
    ],
  }),
  component: DashboardOverview,
});

const timeOnSite = [
  { name: "Mon", listened: 4.8, skipped: 2.1 },
  { name: "Tue", listened: 5.4, skipped: 2.3 },
  { name: "Wed", listened: 6.1, skipped: 2.0 },
  { name: "Thu", listened: 5.9, skipped: 2.2 },
  { name: "Fri", listened: 6.6, skipped: 2.5 },
  { name: "Sat", listened: 7.1, skipped: 2.7 },
  { name: "Sun", listened: 6.8, skipped: 2.4 },
];

const segments = [
  { name: "First-time", value: 58 },
  { name: "Returning", value: 24 },
  { name: "From email", value: 12 },
  { name: "Paid ads", value: 6 },
];
const segmentColors = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
];

const funnel = [
  { step: "Widget shown", count: 12480, pct: 100, ts: "live" },
  { step: "Header expanded", count: 6210, pct: 49.8, ts: "live" },
  { step: "Form filled", count: 2890, pct: 23.2, ts: "live" },
  { step: "Intro played", count: 2104, pct: 16.9, ts: "live" },
  { step: "Listened > 20s", count: 1530, pct: 12.3, ts: "live" },
  { step: "Booked / Signup", count: 412, pct: 3.3, ts: "live" },
];

function DashboardOverview() {
  return (
    <DashboardShell>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
            <p className="mt-1 text-sm text-muted-foreground">Last 7 days · acme.com</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs">
            <span className="speaky-pulse h-1.5 w-1.5 rounded-full bg-brand-green" />
            Widget online
          </div>
        </div>

        {/* Metric cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <MetricCard label="Widget shown" value="12,480" delta="+18%" icon={Eye} accent="bg-brand-sky-soft text-brand-navy" />
          <MetricCard label="Listen rate" value="41.2%" delta="+6.4 pts" icon={Headphones} accent="bg-brand-orange-soft text-brand-orange" />
          <MetricCard label="Retention uplift" value="+38%" delta="vs control" icon={TrendingUp} accent="bg-brand-green-soft text-brand-green" />
        </div>

        {/* Charts row */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Time on site by listener type</h3>
              <span className="text-xs text-muted-foreground">minutes / visitor</span>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timeOnSite}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Bar dataKey="listened" name="Listened" fill="var(--color-brand-orange)" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="skipped" name="Skipped" fill="var(--color-brand-sky)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-semibold">Visitor segments</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={segments} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                    {segments.map((_, i) => (
                      <Cell key={i} fill={segmentColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 12, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-1.5 text-xs">
              {segments.map((s, i) => (
                <li key={s.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm" style={{ background: segmentColors[i] }} />
                    {s.name}
                  </span>
                  <span className="font-medium">{s.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Funnel table */}
        <div className="mt-6 rounded-2xl border border-border bg-surface">
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-semibold">Event funnel</h3>
              <p className="text-xs text-muted-foreground">Live · last 24h</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-muted/60 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Step</th>
                  <th className="px-5 py-3 font-medium">Count</th>
                  <th className="px-5 py-3 font-medium">% of shown</th>
                  <th className="px-5 py-3 font-medium">Last event</th>
                </tr>
              </thead>
              <tbody>
                {funnel.map((row, i) => (
                  <tr key={row.step} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-medium">{row.step}</td>
                    <td className="px-5 py-3">{row.count.toLocaleString()}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-32 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full rounded-full bg-brand-orange"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{row.pct.toFixed(1)}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">
                      {i === 0 ? "just now" : `${i * 7}s ago`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function MetricCard({
  label,
  value,
  delta,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-green">
        <ArrowUpRight className="h-3 w-3" /> {delta}
      </p>
    </div>
  );
}
