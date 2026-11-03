function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Classification banner */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-signal-amber/30"></div>
          <span className="font-mono text-xs text-signal-amber tracking-widest uppercase">
            Dokumen Briefing -- Terbatas
          </span>
          <div className="h-px flex-1 bg-signal-amber/30"></div>
        </div>

        {/* Main title block */}
        <div className="max-w-4xl">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="font-mono text-xs text-text-muted tabular">REF: AG-001</span>
            <span className="font-mono text-xs text-text-muted">/</span>
            <span className="font-mono text-xs text-text-muted tabular">REV. 1.0</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[0.9] mb-6">
            ARMADA
            <br />
            <span className="text-signal-amber">GAME</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
            Permainan komando armada luar angkasa kooperatif 1--5 pemain.
            Satu kapal induk, hingga tiga kapal kapten, melawan armada musuh
            yang dikendalikan aturan deterministik. Tiga sampai lima menit
            per pertandingan, berbasis giliran serentak.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <StatBlock label="Pemain" value="1--5" />
            <StatBlock label="Durasi" value="3--5 mnt" />
            <StatBlock label="Kelas Kapal" value="4" />
            <StatBlock label="Jaringan" value="Sepolia" />
          </div>

          {/* CTA area */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#arsitektur"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-signal-amber text-bg-primary font-display font-semibold text-sm uppercase tracking-wide hover:bg-signal-amber-glow transition-colors duration-200"
            >
              <span>Lihat Arsitektur</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#fase"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-light text-text-secondary font-display font-semibold text-sm uppercase tracking-wide hover:border-signal-amber hover:text-signal-amber transition-colors duration-200"
            >
              <span>Roadmap Fase</span>
            </a>
          </div>
        </div>

        {/* Decorative element: radar display */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
          <div className="relative w-full h-full">
            {/* Radar circles */}
            <div className="absolute inset-0 border border-border rounded-full"></div>
            <div className="absolute inset-8 border border-border rounded-full"></div>
            <div className="absolute inset-16 border border-border rounded-full"></div>
            {/* Crosshairs */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>
            {/* Sweep line */}
            <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-signal-amber origin-left animate-radar opacity-60"></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-signal-amber"></div>
            {/* Blips */}
            <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 rounded-full bg-foe"></div>
            <div className="absolute top-[65%] left-[35%] w-1.5 h-1.5 rounded-full bg-foe"></div>
            <div className="absolute top-[45%] left-[70%] w-1.5 h-1.5 rounded-full bg-friend"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="panel-border bg-bg-panel p-3">
      <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wide">{label}</div>
      <div className="font-display text-2xl font-bold text-signal-amber tabular">{value}</div>
    </div>
  );
}

export default HeroSection;
