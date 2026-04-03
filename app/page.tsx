export default function ForexLandingPage() {
  const plans = [
    { name: "Starter", price: "Founding Access", desc: "1 MT4 account · Beginner friendly · Fast setup", cta: "Reserve Starter" },
    { name: "Pro", price: "Most Popular", desc: "Up to 3 MT4 accounts · Best for scaling", cta: "Reserve Pro", featured: true },
    { name: "VIP", price: "Priority Access", desc: "Priority onboarding · Premium support", cta: "Reserve VIP" },
  ];

  const steps = [
    {
      title: "Create your access",
      text: "Join the early-access list and get onboarding instructions as soon as spots open.",
    },
    {
      title: "Connect your MT4 account",
      text: "Use your existing broker account or set up a new MT4 account that matches our onboarding guide.",
    },
    {
      title: "Install the copier",
      text: "Follow our guided setup to link your account and prepare it for automated trade mirroring.",
    },
    {
      title: "Start copying automatically",
      text: "Once activated, your MT4 account mirrors our strategy without manual trade execution.",
    },
  ];

  const benefits = [
    "Automated copy trading workflow",
    "Built around MT4",
    "Keep funds in your own broker account",
    "Clean onboarding for beginners",
    "Subscription-based access",
    "Structured approach to execution",
  ];

  const faqs = [
    {
      q: "Is this a managed account?",
      a: "No. You keep your funds in your own broker account and connect your account to a copy-trading workflow.",
    },
    {
      q: "Do I need experience?",
      a: "No. The onboarding is designed to be simple, with a clear MT4 setup path.",
    },
    {
      q: "Which platform do I need?",
      a: "MetaTrader 4 (MT4).",
    },
    {
      q: "Are returns guaranteed?",
      a: "No. Trading involves risk and outcomes are never guaranteed.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute top-80 left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.2em] text-white/90 uppercase">AlphaMirror</div>
          </div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#benefits" className="transition hover:text-white">Benefits</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Get Early Access
          </a>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300" /> Early-access launch now open
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Automated <span className="bg-gradient-to-r from-fuchsia-400 via-white to-cyan-300 bg-clip-text text-transparent">Forex Copy Trading</span> for MT4.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Connect your MT4 account, install our copier, and automatically mirror our strategy with a premium onboarding experience designed to make setup simple.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#waitlist"
                  className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
                >
                  Reserve Your Spot
                </a>
                <a
                  href="#how"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/55">
                <span>Keep funds in your own broker account</span>
                <span>MT4 focused</span>
                <span>Subscription access</span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-fuchsia-500/10 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Strategy access</p>
                    <h3 className="mt-1 text-2xl font-semibold">Premium Early Access</h3>
                  </div>
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">Limited Seats</div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Execution</p>
                    <p className="mt-2 text-lg font-medium">Automated copier workflow</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Platform</p>
                    <p className="mt-2 text-lg font-medium">MetaTrader 4</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Access type</p>
                    <p className="mt-2 text-lg font-medium">Monthly subscription</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Onboarding</p>
                    <p className="mt-2 text-lg font-medium">Guided setup flow</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100/90">
                  Trading involves risk. Past performance does not guarantee future results.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Start copy trading in four simple steps.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 text-lg font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">Positioning</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Built for consistency, not hype.</h2>
              <p className="mt-5 text-base leading-8 text-white/70">
                Present the offer as a structured automation service with premium onboarding, simple account connection, and a clean subscription journey. The page is designed to feel high trust, modern, and premium.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-white/85">
                  <div className="mb-4 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Pricing preview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Simple plans. Premium brand presence.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Use these cards as a fake-door validation test. Clicking a plan should lead to the waitlist form or a reserve page instead of full checkout during validation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[2rem] border p-8 ${plan.featured ? "border-fuchsia-400/40 bg-gradient-to-b from-fuchsia-500/15 to-cyan-400/10 shadow-2xl shadow-fuchsia-500/10" : "border-white/10 bg-white/5"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  {plan.featured && <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900">Popular</span>}
                </div>
                <p className="mt-4 text-lg text-white/85">{plan.price}</p>
                <p className="mt-3 text-sm leading-7 text-white/60">{plan.desc}</p>
                <a
                  href="#waitlist"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition ${plan.featured ? "bg-white text-neutral-950 hover:scale-[1.02]" : "border border-white/15 bg-white/8 text-white hover:bg-white/12"}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Who this is for</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Made for people who want a cleaner, easier way to follow a strategy.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "People seeking passive exposure",
                "Busy traders with limited time",
                "Beginners who want guided setup",
                "Users who prefer automation over manual execution",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-neutral-900/50 p-5 text-sm leading-7 text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Waitlist</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Get early access.</h2>
      <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
        Join the waitlist and we will contact you when onboarding opens.
      </p>
    </div>

    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 md:p-8">
      <iframe
        src="https://tally.so/r/ODY8dg"
        width="100%"
        height="500"
        className="rounded-2xl border border-white/10"
      />
    </div>
  </div>
</section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300/80">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Common questions.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-4xl text-sm leading-7 text-white/45">
            Risk Disclaimer: Trading forex involves significant risk and is not suitable for all investors. Past performance does not guarantee future results. This page is for offer validation and onboarding interest only.
          </p>
        </div>
      </footer>
    </div>
  );
}
