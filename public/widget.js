(function () {
  const BRAND = "#0f172a";

  // --- Inject styles ---
  const style = document.createElement("style");
  style.textContent = `
    #speaky-widget {
      position: fixed; bottom: 24px; right: 24px; z-index: 99999;
      width: 240px; font-family: system-ui, sans-serif; font-size: 13px;
      border-radius: 14px; overflow: hidden;
      border: 0.5px solid rgba(0,0,0,0.12);
      box-shadow: 0 4px 24px rgba(0,0,0,0.10);
    }
    #speaky-header {
      background: ${BRAND}; color: #fff;
      padding: 10px 14px; display: flex; align-items: center; gap: 8px;
      cursor: pointer;
    }
    #speaky-dot { width:7px;height:7px;border-radius:50%;background:#34d399;flex-shrink:0;animation:spk-pulse 1.5s infinite }
    @keyframes spk-pulse{0%,100%{opacity:1}50%{opacity:.3}}
    #speaky-header-text { flex:1 }
    #speaky-header-title { font-size:12px;font-weight:600 }
    #speaky-header-sub { font-size:10px;opacity:.65;margin-top:1px }
    #speaky-body { background:#fff; padding:14px }
    #speaky-body input {
      width:100%;padding:7px 10px;border:0.5px solid #e2e8f0;
      border-radius:8px;font-size:12px;margin-bottom:7px;
      outline:none;color:#0f172a;
    }
    #speaky-body input:focus { border-color:#94a3b8 }
    #speaky-play {
      width:100%;padding:8px;background:${BRAND};color:#fff;
      border:none;border-radius:8px;font-size:12px;cursor:pointer;
      transition:opacity .15s;
    }
    #speaky-play:hover { opacity:.85 }
    #speaky-play:disabled { opacity:.5;cursor:not-allowed }
    #speaky-wave {
      display:flex;align-items:center;justify-content:center;
      gap:3px;height:28px;margin:6px 0;
    }
    .spk-bar {
      width:3px;border-radius:2px;background:${BRAND};
      animation:spk-wave .7s ease-in-out infinite;
    }
    .spk-bar:nth-child(1){height:6px;animation-delay:0s}
    .spk-bar:nth-child(2){height:14px;animation-delay:.08s}
    .spk-bar:nth-child(3){height:22px;animation-delay:.16s}
    .spk-bar:nth-child(4){height:14px;animation-delay:.08s}
    .spk-bar:nth-child(5){height:6px;animation-delay:0s}
    @keyframes spk-wave{0%,100%{transform:scaleY(1);opacity:.5}50%{transform:scaleY(1.5);opacity:1}}
    #speaky-summary { font-size:12px;color:#1e293b;line-height:1.6;font-style:italic;margin-bottom:8px }
    #speaky-hook {
      background:${BRAND};color:#34d399;font-size:11px;
      padding:8px 12px;display:flex;align-items:center;gap:6px;cursor:pointer;
    }
    #speaky-close {
      position:absolute;top:8px;right:10px;color:rgba(255,255,255,.5);
      font-size:16px;cursor:pointer;line-height:1;background:none;border:none;
    }
  `;
  document.head.appendChild(style);

  // --- Scrape page content ---
  function getPageContent() {
    const title = document.title || "";
    const metas = [...document.querySelectorAll("meta[name='description'],meta[property='og:description']")]
      .map(m => m.content).filter(Boolean).join(" ");
    const headings = [...document.querySelectorAll("h1,h2")]
      .slice(0, 4).map(h => h.innerText.trim()).join(". ");
    const paras = [...document.querySelectorAll("p")]
      .slice(0, 3).map(p => p.innerText.trim()).filter(t => t.length > 20).join(" ");
    return `${title}. ${metas} ${headings} ${paras}`.slice(0, 600);
  }

  // --- Generate summary using window.ai (Chrome built-in, free) ---
  async function generateSummary(name, context, pageContent) {
    const prompt = `You are writing a personalized 1-2 sentence spoken intro for a website visitor.
Visitor name: ${name}
Visitor said: ${context}
Website content: ${pageContent}
Write a warm, personal, spoken intro under 30 words. Start with "Hey ${name}". No quotes, no markdown.`;

    // Try Chrome window.ai first (free, no API key)
    if (window.ai && window.ai.languageModel) {
      try {
        const session = await window.ai.languageModel.create();
        const result = await session.prompt(prompt);
        session.destroy();
        return result.trim();
      } catch (e) {}
    }

    // Fallback: rule-based summary (truly zero cost)
    const site = document.title || "this site";
    return `Hey ${name}! ${site} is built for people like you — ${context ? "especially if you're " + context + "." : "take 30 seconds to explore."}`;
  }

  // --- Speak using Web Speech API (free, built-in) ---
  function speak(text, onEnd) {
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.92;
    utt.pitch = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.name.includes("Samantha") || v.name.includes("Google UK") || v.lang === "en-GB");
    if (preferred) utt.voice = preferred;
    utt.onend = onEnd || null;
    window.speechSynthesis.speak(utt);
  }

  // --- Build widget HTML ---
  const widget = document.createElement("div");
  widget.id = "speaky-widget";
  widget.innerHTML = `
    <div id="speaky-header">
      <div id="speaky-dot"></div>
      <div id="speaky-header-text">
        <div id="speaky-header-title">Personal intro · 30 sec</div>
        <div id="speaky-header-sub">From the founder</div>
      </div>
      <button id="speaky-close">×</button>
    </div>
    <div id="speaky-body">
      <div id="speaky-step1">
        <input id="speaky-name" type="text" placeholder="Your first name" />
        <input id="speaky-ctx" type="text" placeholder="What brings you here?" />
        <button id="speaky-play">Play my intro →</button>
      </div>
      <div id="speaky-step2" style="display:none">
        <div id="speaky-wave">
          <div class="spk-bar"></div><div class="spk-bar"></div>
          <div class="spk-bar"></div><div class="spk-bar"></div>
          <div class="spk-bar"></div>
        </div>
        <div id="speaky-summary"></div>
      </div>
    </div>
    <div id="speaky-hook" style="display:none">
      <span style="width:6px;height:6px;border-radius:50%;background:#34d399;flex-shrink:0"></span>
      <span id="speaky-hook-text">Most teams set this up in 4 min →</span>
    </div>
  `;
  document.body.appendChild(widget);

  // --- Wire up events ---
  const pageContent = getPageContent();

  document.getElementById("speaky-play").addEventListener("click", async () => {
    const name = document.getElementById("speaky-name").value.trim();
    const ctx = document.getElementById("speaky-ctx").value.trim();
    if (!name) { document.getElementById("speaky-name").focus(); return; }

    const btn = document.getElementById("speaky-play");
    btn.disabled = true;
    btn.textContent = "Generating...";

    const summary = await generateSummary(name, ctx, pageContent);

    document.getElementById("speaky-step1").style.display = "none";
    document.getElementById("speaky-step2").style.display = "block";
    document.getElementById("speaky-summary").textContent = summary;

    speak(summary, () => {
      document.getElementById("speaky-hook").style.display = "flex";
    });

    // Analytics event (replace with your own tracker)
    console.log("[Speaky] played", { name, ctx, summary });
  });

  document.getElementById("speaky-close").addEventListener("click", () => {
    widget.style.display = "none";
  });

  document.getElementById("speaky-hook").addEventListener("click", () => {
    console.log("[Speaky] hook clicked");
  });

  // Only show to first-time visitors
  if (localStorage.getItem("speaky_seen")) {
    widget.style.display = "none";
  } else {
    localStorage.setItem("speaky_seen", "1");
  }
})();
