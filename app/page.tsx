export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Kill Reddit&apos;s App Nags — Forever
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Tired of Reddit begging you to install its app every 30 seconds? Reddit App Nag Killer
          silently blocks every banner, popup, and interstitial so you can browse mobile web in peace.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-150 shadow-lg"
        >
          Get Access — $3/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome &amp; Firefox.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["100%", "App prompts blocked"],
            ["0ms", "Added page load"],
            ["2 min", "Setup time"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-4xl font-extrabold text-white mb-1">$3<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything included. No tiers.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Blocks all Reddit app install prompts",
              "Hides banners, modals & interstitials",
              "Custom blocking rules dashboard",
              "Instant updates via subscription",
              "Chrome & Firefox support",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-150"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does it work?",
              "The extension injects a content script into Reddit pages that detects and hides app-install banners, modals, and interstitials using CSS and DOM observation — before they ever appear.",
            ],
            [
              "Which browsers are supported?",
              "Chrome (and Chromium-based browsers like Edge and Brave) and Firefox. Safari support is on the roadmap.",
            ],
            [
              "What happens if I cancel?",
              "Your subscription ends at the billing period and the extension stops receiving updates. You can resubscribe anytime.",
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        &copy; {new Date().getFullYear()} Reddit App Nag Killer. Not affiliated with Reddit, Inc.
      </footer>
    </main>
  );
}
