import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, Mic2, Send } from "lucide-react";

export const Route = createFileRoute("/dashboard/voices")({
  head: () => ({
    meta: [
      { title: "Voice library — Speaky" },
      { name: "description", content: "Upload and manage the voices that greet your visitors." },
    ],
  }),
  component: Voices,
});

const voices = [
  { name: "Maya Chen", vibe: "Warm · Founder", initials: "MC", active: true, color: "bg-brand-orange-soft text-brand-orange" },
  { name: "James Okafor", vibe: "Energetic · Sales", initials: "JO", active: false, color: "bg-brand-sky-soft text-brand-navy" },
  { name: "Sofia Reyes", vibe: "Calm · Support", initials: "SR", active: false, color: "bg-brand-green-soft text-brand-green" },
];

function Voices() {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <DashboardShell>
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="text-2xl font-bold tracking-tight">Voice library</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Upload your founder's voice or pick one of your saved voices.
        </p>

        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
          }}
          onClick={() => inputRef.current?.click()}
          className={`mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-surface px-6 py-12 text-center transition ${
            drag ? "border-brand-orange bg-brand-orange-soft" : "border-border hover:border-brand-orange/50"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-white">
            <UploadCloud className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm font-semibold">
            {file ? file.name : "Drop your 30-sec voice clip here"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {file ? "Ready to upload" : "WAV, MP3 or M4A · up to 10MB"}
          </p>
          {file && (
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white">
              <CheckCircle2 className="h-3.5 w-3.5" /> Process voice
            </button>
          )}
        </div>

        {/* Library cards */}
        <h2 className="mt-10 text-base font-semibold">Your voices</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {voices.map((v) => (
            <div key={v.name} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold ${v.color}`}>
                  {v.initials}
                </div>
                {v.active && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-green-soft px-2 py-0.5 text-[11px] font-medium text-brand-green">
                    <span className="speaky-pulse h-1.5 w-1.5 rounded-full bg-brand-green" /> Active
                  </span>
                )}
              </div>
              <p className="mt-4 font-semibold">{v.name}</p>
              <p className="text-xs text-muted-foreground">{v.vibe}</p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-secondary">
                  Preview
                </button>
                {!v.active && (
                  <button className="flex-1 rounded-lg bg-brand-navy px-3 py-1.5 text-xs font-medium text-white">
                    Set active
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom voice request */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-sky-soft text-brand-navy">
              <Mic2 className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <h3 className="font-semibold">Request a custom voice session</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Don't have a recording yet? Our team will guide a 15-min remote session.
              </p>
              <form className="mt-5 grid gap-3 sm:grid-cols-2">
                <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Founder name" />
                <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm" placeholder="Email" type="email" />
                <input className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" placeholder="Best timezone for the session" />
                <textarea
                  rows={3}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2"
                  placeholder="What's the vibe? (warm, energetic, calm…)"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-white sm:col-span-2 sm:w-fit"
                >
                  <Send className="h-3.5 w-3.5" /> Request session
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
