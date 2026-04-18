import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Play, Loader2 } from "lucide-react";

type Stage = "form" | "loading" | "playing";

interface SpeakyWidgetProps {
  founderName?: string;
  hookText?: string;
  introText?: string;
  defaultOpen?: boolean;
  position?: "bottom-right" | "top-right";
}

export function SpeakyWidget({
  founderName = "Maya Chen",
  hookText = "Most teams set this up in under 4 minutes — want a hand?",
  introText = "Hey — I'm Maya, founder of Speaky. We built this so visitors hear a real human in the first 30 seconds. Tell me what you're building and I'll point you to the fastest setup.",
  defaultOpen = true,
  position = "bottom-right",
}: SpeakyWidgetProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [stage, setStage] = useState<Stage>("form");
  const [name, setName] = useState("");
  const [context, setContext] = useState("");

  const handlePlay = () => {
    setStage("loading");
    setTimeout(() => setStage("playing"), 900);
  };

  const reset = () => {
    setStage("form");
    setName("");
    setContext("");
  };

  const posClasses =
    position === "bottom-right"
      ? "bottom-5 right-5 items-end"
      : "top-5 right-5 items-end";

  return (
    <div className={`pointer-events-none fixed z-50 flex flex-col gap-3 ${posClasses}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="pointer-events-auto w-[340px] overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            {/* Dark header */}
            <div className="flex items-center justify-between bg-brand-navy px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <span className="speaky-pulse inline-block h-2.5 w-2.5 rounded-full bg-brand-green" />
                <span className="text-sm font-medium">Personal intro</span>
                <span className="text-xs text-white/50">· 30 sec</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4">
              <AnimatePresence mode="wait">
                {stage === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                    />
                    <input
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder="What are you working on?"
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                    />
                    <button
                      onClick={handlePlay}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 active:scale-[0.99]"
                    >
                      <Play className="h-4 w-4 fill-white" />
                      Play my intro
                    </button>
                  </motion.div>
                )}

                {stage === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Personalizing your intro…
                  </motion.div>
                )}

                {stage === "playing" && (
                  <motion.div
                    key="playing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    {/* Sound wave */}
                    <div className="flex h-10 items-center justify-center gap-1">
                      {Array.from({ length: 22 }).map((_, i) => (
                        <span
                          key={i}
                          className="wave-bar w-[3px] rounded-full bg-brand-orange"
                          style={{
                            height: `${20 + ((i * 7) % 18)}px`,
                            animationDelay: `${(i % 8) * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="px-1 text-sm italic leading-relaxed text-foreground/90">
                      &ldquo;{introText}&rdquo;
                    </p>
                    <p className="text-right text-xs font-medium text-muted-foreground">
                      — {founderName}
                    </p>
                    <button
                      onClick={reset}
                      className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
                    >
                      Replay with a different name
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hook bar */}
            <div className="flex items-center gap-2 border-t border-white/5 bg-brand-navy px-4 py-2.5 text-white">
              <span className="speaky-pulse inline-block h-2 w-2 shrink-0 rounded-full bg-brand-green" />
              <p className="text-xs leading-snug text-white/85">{hookText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-xl ring-4 ring-brand-navy/10 transition hover:brightness-110"
        aria-label={open ? "Close widget" : "Open widget"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>
    </div>
  );
}
