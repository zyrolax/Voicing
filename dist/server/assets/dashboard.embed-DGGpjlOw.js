import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BPc2mgTd.js";
import { D as DashboardShell, C as CodeXml } from "./DashboardShell-C0L2WqYG.js";
import { C as Check } from "./check-BfWZ9oCm.js";
import { c as createLucideIcon } from "./createLucideIcon-CUIuANaO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-9yHxiTpP.js";
const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode);
function Embed() {
  const [siteId, setSiteId] = reactExports.useState("acme_4f7c2a");
  const [position, setPosition] = reactExports.useState("bottom-right");
  const [copied, setCopied] = reactExports.useState(false);
  const snippet = `<!-- Speaky widget -->
<script
  src="https://cdn.speaky.app/v1/widget.js"
  data-site-id="${siteId}"
  data-position="${position}"
  defer
><\/script>`;
  const copy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Embed snippet" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
      "Drop this single tag before ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-secondary px-1 py-0.5 text-xs", children: "</body>" }),
      " on any page."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Site ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: siteId, onChange: (e) => setSiteId(e.target.value), className: "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Position" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: position, onChange: (e) => setPosition(e.target.value), className: "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bottom-right", children: "Bottom right" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "top-right", children: "Top right" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 overflow-hidden rounded-2xl border border-border bg-brand-navy text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4 text-brand-orange" }),
          " install.html"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: "inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium hover:bg-white/20", children: [
          copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-brand-green" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5" }),
          copied ? "Copied" : "Copy"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto p-5 text-xs leading-relaxed text-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: snippet }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-brand-orange-soft p-5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-brand-navy", children: "Need help?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Send the snippet to your developer or paste it via Google Tag Manager. We'll detect the install automatically." })
    ] })
  ] }) });
}
export {
  Embed as component
};
