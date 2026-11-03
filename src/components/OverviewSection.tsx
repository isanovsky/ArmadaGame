function OverviewSection() {
  return (
    <section id="ikhtisar" className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-signal-amber tracking-widest">01</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Ikhtisar Permainan
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-3 uppercase tracking-wide">
                Ringkasan Misi
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                ArmadaGame adalah permainan komando armada luar angkasa kooperatif.
                Pemain mengendalikan kapal-kapal dalam satu armada, melawan armada musuh
                yang dikendalikan aturan deterministik dari skenario yang dibuat Game Master.
                Satu pertandingan berlangsung 3 sampai 5 menit, berbasis giliran serentak.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Setiap pemain memiliki peran spesifik: Komandan mengatur strategi dari peta taktis 3D,
                Perwira Radar membaca kontak dan menghitung titik tembak, Kapten menggerakkan
                dan menembakkan kapal mereka. Permainan tetap berjalan dengan satu pemain
                melalui autopilot deterministik.
              </p>
            </div>

            {/* Roles */}
            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
                Peran Pemain
              </h3>
              <div className="space-y-3">
                <RoleRow
                  role="Komandan"
                  vessel="Kapal Induk"
                  desc="Strategi: menggerakkan kapal induk, memasang titik tujuan dan penandaan target di peta taktis 3D dengan gestur tangan."
                />
                <RoleRow
                  role="Perwira Radar"
                  vessel="Kapal Induk"
                  desc="Membaca kontak musuh yang kabur, mempertajam sektor, menghitung solusi tembak (titik cegat) untuk kapal penyerang."
                />
                <RoleRow
                  role="Kapten"
                  vessel="Destroyer / Dreadnought / Suplai"
                  desc="Menggerakkan kapalnya sendiri dan menembak, atau memasok amunisi dan perbaikan ke kapal kawan."
                />
              </div>
            </div>
          </div>

          {/* Right: Key rules */}
          <div className="space-y-6">
            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
                Aturan Kunci
              </h3>
              <ul className="space-y-3">
                <RuleItem text="Maksimal 4 kapal pemain (1 induk + 3 kapten)" />
                <RuleItem text="Giliran serentak: semua pemain merencanakan, lalu hasil dihitung bersamaan" />
                <RuleItem text="Timer 25 detik per fase perencanaan" />
                <RuleItem text="Kapal induk hancur = misi gagal" />
                <RuleItem text="Kartu as: sekali per pertandingan, butuh 2 giliran isi daya" />
              </ul>
            </div>

            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
                Objektif Misi
              </h3>
              <div className="space-y-2">
                <ObjectiveRow label="Hancurkan Induk" desc="Kapal induk musuh hancur" default />
                <ObjectiveRow label="Bertahan" desc="Induk pemain hidup setelah N giliran" />
                <ObjectiveRow label="Kabur" desc="Induk mencapai titik lompat" />
                <ObjectiveRow label="Kawal" desc="Kapal Suplai mencapai tujuan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleRow({ role, vessel, desc }: { role: string; vessel: string; desc: string }) {
  return (
    <div className="flex gap-3 p-3 bg-bg-secondary/50 border-l-2 border-signal-amber/30">
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-display font-semibold text-text-primary">{role}</span>
          <span className="font-mono text-xs text-text-muted">-- {vessel}</span>
        </div>
        <p className="text-sm text-text-secondary">{desc}</p>
      </div>
    </div>
  );
}

function RuleItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-signal-amber/60 mt-2 shrink-0"></span>
      <span className="text-sm text-text-secondary">{text}</span>
    </li>
  );
}

function ObjectiveRow({ label, desc, default: isDefault }: { label: string; desc: string; default?: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      {isDefault && (
        <span className="font-mono text-[10px] px-1.5 py-0.5 bg-signal-amber/20 text-signal-amber uppercase tracking-wide">
          Default
        </span>
      )}
      <span className="text-sm font-medium text-text-primary min-w-[100px]">{label}</span>
      <span className="text-sm text-text-muted">-- {desc}</span>
    </div>
  );
}

export default OverviewSection;
