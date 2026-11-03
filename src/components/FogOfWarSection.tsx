function FogOfWarSection() {
  return (
    <section id="kabut" className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">03.2</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Kabut Perang & Pembagian Informasi
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Server adalah otoritas informasi. Setiap pemain hanya menerima data yang boleh mereka lihat
          sesuai role. Ini yang membuat permainan kooperatif bermakna -- tidak ada pemain yang
          melihat seluruh peta.
        </p>

        {/* Radar visualization */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-6 uppercase tracking-wide">
            Tampilan Perwira Radar
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Radar display mockup */}
            <div className="aspect-square max-w-sm mx-auto lg:mx-0 relative bg-bg-primary border border-border rounded-full overflow-hidden">
              {/* Radar rings */}
              <div className="absolute inset-[10%] border border-border/30 rounded-full"></div>
              <div className="absolute inset-[25%] border border-border/30 rounded-full"></div>
              <div className="absolute inset-[40%] border border-border/30 rounded-full"></div>
              {/* Crosshairs */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-border/30"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/30"></div>
              {/* Sweep */}
              <div className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left animate-radar"
                style={{
                  background: 'linear-gradient(90deg, var(--color-signal-amber), transparent)',
                  opacity: 0.6,
                }}
              />
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-friend border-2 border-bg-primary"></div>

              {/* Blips - friendlies */}
              <div className="absolute top-[40%] left-[55%] flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-friend"></div>
                <span className="font-mono text-[8px] text-friend">D-01</span>
              </div>

              {/* Blips - enemies (uncertain) */}
              <div className="absolute top-[25%] left-[65%]">
                <div className="w-4 h-4 rounded-full border border-foe opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-foe animate-signal"></div>
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-mono text-[8px] text-foe/60">???</span>
              </div>
              <div className="absolute top-[70%] left-[30%]">
                <div className="w-6 h-6 rounded-full border border-foe/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-foe/50 animate-signal"></div>
                </div>
              </div>

              {/* Sector highlight */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-signal-amber/5 border-b border-l border-signal-amber/20">
                <span className="absolute top-2 right-2 font-mono text-[8px] text-signal-amber/60">Sektor A dipertajam</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="space-y-4">
              <div className="p-3 border-l-2 border-friend/50 bg-bg-secondary/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-friend"></div>
                  <span className="font-display text-sm font-semibold text-friend">Kontak Kawan</span>
                </div>
                <p className="text-xs text-text-secondary">
                  Posisi kapal kawan terlihat jelas. ID kapal ditampilkan.
                </p>
              </div>
              <div className="p-3 border-l-2 border-foe/50 bg-bg-secondary/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-foe animate-signal"></div>
                  <span className="font-display text-sm font-semibold text-foe">Kontak Musuh (Kabur)</span>
                </div>
                <p className="text-xs text-text-secondary">
                  Posisi musuh tidak pasti -- ditampilkan sebagai area dengan ketidakpastian.
                  Perwira Radar bisa mempertajam sektor tertentu untuk mengurangi ketidakpastian.
                </p>
              </div>
              <div className="p-3 border-l-2 border-signal-amber/50 bg-bg-secondary/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-signal-amber"></div>
                  <span className="font-display text-sm font-semibold text-signal-amber">Sektor Dipertajam</span>
                </div>
                <p className="text-xs text-text-secondary">
                  Perwira Radar memilih sektor untuk dipertajam. Kontak di sektor itu
                  menjadi lebih akurat, tapi sektor lain tetap kabur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role information access */}
        <div className="grid md:grid-cols-3 gap-4">
          <RoleAccessCard
            role="Komandan"
            sees={['Peta taktis 3D lengkap', 'Semua kapal kawan', 'Titik tujuan & target', 'Status kartu as']}
            cannot={['Posisi musuh pasti', 'Detail kontak kabur']}
          />
          <RoleAccessCard
            role="Perwira Radar"
            sees={['Kontak musuh kabur', 'Sektor radar', 'Kalkulator titik cegat', 'Solusi tembak']}
            cannot={['Peta 3D', 'Perintah gerak kapal induk']}
          />
          <RoleAccessCard
            role="Kapten"
            sees={['Kapal sendiri', 'Kontak dalam jangkauan sensor', 'Perintah dari Komandan']}
            cannot={['Peta strategis', 'Posisi kapal kawan lain (jauh)']}
          />
        </div>
      </div>
    </section>
  );
}

function RoleAccessCard({ role, sees, cannot }: {
  role: string;
  sees: string[];
  cannot: string[];
}) {
  return (
    <div className="panel-border bg-bg-panel p-5">
      <h4 className="font-display text-sm font-semibold text-signal-amber mb-3 uppercase tracking-wide">
        {role}
      </h4>
      <div className="mb-3">
        <div className="font-mono text-[10px] text-friend mb-1.5 uppercase tracking-widest">Melihat</div>
        <ul className="space-y-1">
          {sees.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="w-1 h-1 bg-friend rounded-full mt-1.5 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="font-mono text-[10px] text-foe mb-1.5 uppercase tracking-widest">Tidak Melihat</div>
        <ul className="space-y-1">
          {cannot.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-text-muted">
              <span className="w-1 h-1 bg-foe/50 rounded-full mt-1.5 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FogOfWarSection;
