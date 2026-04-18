import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BPc2mgTd.js";
import { S as SiteHeader, a as SpeakyWidget } from "./SiteHeader-CzyOjzm-.js";
import { c as createLucideIcon } from "./createLucideIcon-CUIuANaO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-9yHxiTpP.js";
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function Simulator() {
  const [position, setPosition] = reactExports.useState("bottom-right");
  const [founder, setFounder] = reactExports.useState("Maya Chen");
  const [hook, setHook] = reactExports.useState("Most teams set this up in under 4 minutes — want a hand?");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Widget simulator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "This is a demo e-commerce page. The Speaky widget is live — click it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 rounded-lg bg-secondary p-1 text-xs", children: ["bottom-right", "top-right"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPosition(p), className: `rounded-md px-2.5 py-1 font-medium transition ${position === p ? "bg-surface shadow-sm" : "text-muted-foreground"}`, children: p === "bottom-right" ? "Bottom" : "Top" }, p)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: founder, onChange: (e) => setFounder(e.target.value), placeholder: "Founder name", className: "w-36 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: hook, onChange: (e) => setHook(e.target.value), placeholder: "Hook text", className: "w-72 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-sky-soft/40 via-surface to-brand-orange-soft/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-surface/80 px-6 py-3 text-sm font-medium", children: "🛍️  acme-store.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold", children: "Spring drop, just landed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-muted-foreground", children: "Clean basics, made to outlast trends. Free shipping over $50." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: [{
            name: "Linen tee",
            price: "$48",
            icon: Star
          }, {
            name: "Wide canvas pant",
            price: "$92",
            icon: Heart
          }, {
            name: "Knit overshirt",
            price: "$118",
            icon: ShoppingBag
          }, {
            name: "Crew sweater",
            price: "$84",
            icon: Star
          }, {
            name: "Garden short",
            price: "$56",
            icon: Heart
          }, {
            name: "Field jacket",
            price: "$168",
            icon: ShoppingBag
          }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-surface p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 items-center justify-center rounded-lg bg-secondary text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.price })
            ] })
          ] }, p.name)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SpeakyWidget, { position, founderName: founder, hookText: hook, defaultOpen: true }, position + founder + hook)
  ] });
}
export {
  Simulator as component
};
