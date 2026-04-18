import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SpeakyWidget } from "@/components/SpeakyWidget";
import { SiteHeader } from "@/components/SiteHeader";
import { ShoppingBag, Star, Heart } from "lucide-react";

export const Route = createFileRoute("/simulator")({
  head: () => ({
    meta: [
      { title: "Live demo — Speaky widget simulator" },
      {
        name: "description",
        content: "See exactly how the Speaky voice widget looks and feels on a real website.",
      },
      { property: "og:title", content: "Speaky — Live widget simulator" },
      { property: "og:description", content: "Try the Speaky widget on a demo site." },
    ],
  }),
  component: Simulator,
});

function Simulator() {
  const [position, setPosition] = useState<"bottom-right" | "top-right">("bottom-right");
  const [founder, setFounder] = useState("Maya Chen");
  const [hook, setHook] = useState("Most teams set this up in under 4 minutes — want a hand?");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Widget simulator</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              This is a demo e-commerce page. The Speaky widget is live — click it.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
            <label className="text-xs font-medium text-muted-foreground">Position</label>
            <div className="flex gap-1 rounded-lg bg-secondary p-1 text-xs">
              {(["bottom-right", "top-right"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPosition(p)}
                  className={`rounded-md px-2.5 py-1 font-medium transition ${
                    position === p ? "bg-surface shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  {p === "bottom-right" ? "Bottom" : "Top"}
                </button>
              ))}
            </div>
            <input
              value={founder}
              onChange={(e) => setFounder(e.target.value)}
              placeholder="Founder name"
              className="w-36 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs"
            />
            <input
              value={hook}
              onChange={(e) => setHook(e.target.value)}
              placeholder="Hook text"
              className="w-72 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs"
            />
          </div>
        </div>

        {/* Fake demo site */}
        <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-sky-soft/40 via-surface to-brand-orange-soft/30">
          <div className="border-b border-border bg-surface/80 px-6 py-3 text-sm font-medium">
            🛍️  acme-store.com
          </div>
          <div className="px-8 py-10">
            <h2 className="font-display text-4xl font-bold">Spring drop, just landed.</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Clean basics, made to outlast trends. Free shipping over $50.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Linen tee", price: "$48", icon: Star },
                { name: "Wide canvas pant", price: "$92", icon: Heart },
                { name: "Knit overshirt", price: "$118", icon: ShoppingBag },
                { name: "Crew sweater", price: "$84", icon: Star },
                { name: "Garden short", price: "$56", icon: Heart },
                { name: "Field jacket", price: "$168", icon: ShoppingBag },
              ].map((p) => (
                <div key={p.name} className="rounded-xl border border-border bg-surface p-5">
                  <div className="flex h-32 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-sm text-muted-foreground">{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SpeakyWidget
        key={position + founder + hook}
        position={position}
        founderName={founder}
        hookText={hook}
        defaultOpen
      />
    </div>
  );
}
