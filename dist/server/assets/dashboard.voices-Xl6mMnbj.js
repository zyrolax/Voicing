import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BPc2mgTd.js";
import { D as DashboardShell, M as MicVocal } from "./DashboardShell-C0L2WqYG.js";
import { c as createLucideIcon } from "./createLucideIcon-CUIuANaO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-9yHxiTpP.js";
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
const CloudUpload = createLucideIcon("cloud-upload", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const voices = [{
  name: "Maya Chen",
  vibe: "Warm · Founder",
  initials: "MC",
  active: true,
  color: "bg-brand-orange-soft text-brand-orange"
}, {
  name: "James Okafor",
  vibe: "Energetic · Sales",
  initials: "JO",
  active: false,
  color: "bg-brand-sky-soft text-brand-navy"
}, {
  name: "Sofia Reyes",
  vibe: "Calm · Support",
  initials: "SR",
  active: false,
  color: "bg-brand-green-soft text-brand-green"
}];
function Voices() {
  const [drag, setDrag] = reactExports.useState(false);
  const [file, setFile] = reactExports.useState(null);
  const inputRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Voice library" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Upload your founder's voice or pick one of your saved voices." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: (e) => {
      e.preventDefault();
      setDrag(true);
    }, onDragLeave: () => setDrag(false), onDrop: (e) => {
      e.preventDefault();
      setDrag(false);
      if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
    }, onClick: () => inputRef.current?.click(), className: `mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-surface px-6 py-12 text-center transition ${drag ? "border-brand-orange bg-brand-orange-soft" : "border-border hover:border-brand-orange/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, type: "file", accept: "audio/*", className: "hidden", onChange: (e) => setFile(e.target.files?.[0] ?? null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-semibold", children: file ? file.name : "Drop your 30-sec voice clip here" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: file ? "Ready to upload" : "WAV, MP3 or M4A · up to 10MB" }),
      file && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-navy px-4 py-2 text-xs font-semibold text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
        " Process voice"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-10 text-base font-semibold", children: "Your voices" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-4 md:grid-cols-3", children: voices.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-full font-semibold ${v.color}`, children: v.initials }),
        v.active && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-brand-green-soft px-2 py-0.5 text-[11px] font-medium text-brand-green", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "speaky-pulse h-1.5 w-1.5 rounded-full bg-brand-green" }),
          " Active"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-semibold", children: v.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: v.vibe }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium hover:bg-secondary", children: "Preview" }),
        !v.active && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-lg bg-brand-navy px-3 py-1.5 text-xs font-medium text-white", children: "Set active" })
      ] })
    ] }, v.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-2xl border border-border bg-surface p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-brand-sky-soft text-brand-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MicVocal, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Request a custom voice session" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Don't have a recording yet? Our team will guide a 15-min remote session." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Founder name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm", placeholder: "Email", type: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2", placeholder: "Best timezone for the session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, className: "rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2", placeholder: "What's the vibe? (warm, energetic, calm…)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-white sm:col-span-2 sm:w-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
            " Request session"
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  Voices as component
};
