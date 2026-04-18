import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";

export const Route = createFileRoute("/dashboard/embed")({
  head: () => ({
    meta: [
      { title: "Embed snippet — Speaky" },
      { name: "description", content: "Paste the Speaky widget on any site in 30 seconds." },
    ],
  }),
  component: Embed,
});

function Embed() {
  const [siteId, setSiteId] = useState("acme_4f7c2a");
  const [position, setPosition] = useState("bottom-right");
  const [copied, setCopied] = useState(false);

  const snippet = `<!-- Speaky widget -->
<script
  src="https://cdn.speaky.app/v1/widget.js"
  data-site-id="${siteId}"
  data-position="${position}"
  defer
></script>`;

  const copy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <DashboardShell>
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="text-2xl font-bold tracking-tight">Embed snippet</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Drop this single tag before <code className="rounded bg-secondary px-1 py-0.5 text-xs">&lt;/body&gt;</code> on any page.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-5">
            <label className="text-xs font-medium text-muted-foreground">Site ID</label>
            <input
              value={siteId}
              onChange={(e) => setSiteId(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono"
            />
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <label className="text-xs font-medium text-muted-foreground">Position</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="bottom-right">Bottom right</option>
              <option value="top-right">Top right</option>
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-brand-navy text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Code2 className="h-4 w-4 text-brand-orange" /> install.html
            </div>
            <button
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium hover:bg-white/20"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-brand-green" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed text-white/90">
            <code>{snippet}</code>
          </pre>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-brand-orange-soft p-5 text-sm">
          <p className="font-semibold text-brand-navy">Need help?</p>
          <p className="mt-1 text-muted-foreground">
            Send the snippet to your developer or paste it via Google Tag Manager. We'll detect the install automatically.
          </p>
        </div>
      </div>
    </DashboardShell>
  );
}
