function PhasesSection() {
  return (
    <section id="fase" className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">05</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Roadmap Fase
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Kerjakan per fase. Setiap fase: branch baru dari main, commit bertahap,
          push branch ke GitHub. Jangan merge ke main -- kelompok akan memeriksa
          dan me-merge sendiri.
        </p>

        {/* Timeline */}
        <div className="space-y-0">
          <PhaseCard
            number="0"
            title="Dokumen Desain"
            duration="Minggu 1"
            status="active"
            items={[
              'DESIGN.md: usulan nama, statistik kapal, rumus titik cegat, struct ABI, skema database',
              'STYLE.md: arah visual, palet, font, satu halaman contoh',
              'Struktur folder monorepo, README awal, .gitignore, .env.example',
            ]}
          />
          <PhaseCard
            number="1"
            title="Smart Contract"
            duration="Minggu 2--3"
            status="upcoming"
            items={[
              'Role dan akses (proteksi Laksamana Agung terakhir)',
              'BattleEngine v1: gerak, laser, torpedo, damage, suplai, objektif, kartu as',
              'MatchLedger: commit, finalize, replay',
              'Test Hardhat: determinisme, gas report, edge cases',
            ]}
          />
          <PhaseCard
            number="2"
            title="Server Inti"
            duration="Minggu 3--4"
            status="upcoming"
            items={[
              'Express, Socket.IO, koneksi MySQL, migrasi awal',
              'Kode otorisasi, lobby, pemilihan kapal, timer giliran',
              'Resolusi via eth_call, kabut perang, autopilot, finalize',
              'Dompet relayer untuk bayar gas',
            ]}
          />
          <PhaseCard
            number="3"
            title="Antarmuka Kru (2D)"
            duration="Minggu 5--6"
            status="upcoming"
            items={[
              'Landing briefing, lobby, layar Perwira Radar, layar Kapten',
              'Peta 2D Komandan, layar hasil dengan tautan transaksi',
              'Seluruh permainan bisa dimainkan dengan mouse dan keyboard',
            ]}
          />
          <PhaseCard
            number="4"
            title="Peta 3D & Gestur Komandan"
            duration="Minggu 6--7"
            status="upcoming"
            items={[
              'Peta 3D lazy-loaded, kapal prosedural low-poly',
              'Cadangan 2D otomatis jika WebGL tidak tersedia',
              'Gestur MediaPipe: geser, pilih, zoom, konfirmasi',
              'Halaman diagnostik gestur dan tes akurasi',
            ]}
          />
          <PhaseCard
            number="5"
            title="Admin (Laksamana)"
            duration="Minggu 7--8"
            status="upcoming"
            items={[
              'Login dompet (MetaMask + nonce + signature verification)',
              'CRUD skenario dengan editor peta',
              'CRUD kode otorisasi',
              'Pengelolaan Laksamana (on-chain dari MetaMask)',
            ]}
          />
          <PhaseCard
            number="6"
            title="Deploy & Rapikan"
            duration="Minggu 8"
            status="upcoming"
            items={[
              'Deploy kontrak ke Sepolia, verifikasi Etherscan',
              'Database produksi, hosting Node.js',
              'README lengkap, THIRD_PARTY_NOTICES.md',
              'Daftar periksa demo: server, database, faucet, kode otorisasi, gestur',
            ]}
          />
        </div>

        {/* Additional notes */}
        <div className="mt-10 panel-border bg-bg-panel p-6">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Pemeriksaan Wajib Setiap Fase
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <CheckItem text="Kontrak: npx hardhat test lulus, laporan gas dilampirkan" />
            <CheckItem text="Server/frontend: lint dan build lulus" />
            <CheckItem text="Tidak ada kunci privat atau kredensial yang ter-commit" />
            <CheckItem text="Tidak ada aset yang melanggar hak cipta" />
            <CheckItem text="Laporan: file yang diubah, cara uji manual, keputusan desain" />
            <CheckItem text="Nama branch dan hash commit yang di-push" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseCard({ number, title, duration, status, items }: {
  number: string;
  title: string;
  duration: string;
  status: 'active' | 'upcoming';
  items: string[];
}) {
  const isActive = status === 'active';

  return (
    <div className={`relative flex gap-4 sm:gap-6 py-5 ${!isActive ? 'opacity-70' : ''}`}>
      {/* Timeline indicator */}
      <div className="shrink-0 flex flex-col items-center">
        <div className={`w-8 h-8 flex items-center justify-center font-mono text-xs font-bold border
          ${isActive
            ? 'border-signal-amber text-signal-amber bg-signal-amber/10'
            : 'border-border text-text-muted bg-bg-panel'
          }`}
        >
          {number}
        </div>
        <div className="w-px flex-1 bg-border mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
          <h3 className={`font-display text-lg font-semibold uppercase tracking-wide
            ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            {title}
          </h3>
          <span className="font-mono text-xs text-text-muted tabular">{duration}</span>
          {isActive && (
            <span className="font-mono text-[10px] px-1.5 py-0.5 bg-signal-amber/20 text-signal-amber uppercase tracking-wide">
              Sedang Berjalan
            </span>
          )}
        </div>
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${isActive ? 'bg-signal-amber/60' : 'bg-text-muted/40'}`}></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-4 h-4 border border-border flex items-center justify-center shrink-0 mt-0.5">
        <div className="w-2 h-2 bg-signal-amber/40"></div>
      </div>
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );
}

export default PhasesSection;
