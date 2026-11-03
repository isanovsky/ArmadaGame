function AceCardSection() {
  return (
    <section className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">03.3</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Kartu As & AI Musuh
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Senjata pamungkas kapal induk dan kecerdasan buatan musuh yang sepenuhnya deterministik.
          Aturan "sekali per pertandingan" ditegakkan oleh smart contract saat replay.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Ace Card */}
          <div className="panel-border bg-bg-panel p-6 sm:p-8 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-signal-amber/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="status-dot status-dot--warning"></div>
                <h3 className="font-display text-lg font-semibold text-signal-amber uppercase tracking-wide">
                  Kartu As: "Ledakan Inti Fajar"
                </h3>
              </div>

              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Usulan nama orisinal: kapal induk membuka panel inti reaktor dan melepaskan
                gelombang energi terarah. Nama bisa diganti saat Fase 0 setelah diskusi kelompok.
              </p>

              {/* Visual: charging indicator */}
              <div className="bg-bg-primary border border-border p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-text-muted uppercase tracking-widest">Status Pengisian</span>
                  <span className="font-mono text-xs text-signal-amber tabular">1/2</span>
                </div>
                <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-signal-amber/60 rounded-full"></div>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="status-dot status-dot--danger"></span>
                    <span className="font-mono text-[10px] text-text-muted">Perisai turun</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="status-dot status-dot--warning"></span>
                    <span className="font-mono text-[10px] text-text-muted">Tidak bisa gerak</span>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="space-y-2">
                <AceRule text="Hanya bisa dipakai jika hull kapal induk di bawah 30%" />
                <AceRule text="Butuh 2 giliran mengisi daya" />
                <AceRule text="Selama mengisi: kapal induk tidak bisa bergerak, perisai turun" />
                <AceRule text="Hanya sekali per pertandingan (ditegakkan kontrak)" />
                <AceRule text="Menghantam area, bukan semua musuh" />
                <AceRule text="Bisa diaktifkan/dimatikan per skenario oleh Laksamana" />
              </div>
            </div>
          </div>

          {/* AI Enemy */}
          <div className="panel-border bg-bg-panel p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
              AI Musuh Deterministik
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Armada musuh dikendalikan aturan deterministik dari skenario. Variasi perilaku
              berasal dari seed pertandingan, bukan dari random number generator yang berbeda
              setiap kali dijalankan.
            </p>

            {/* AI behavior tree */}
            <div className="bg-bg-primary border border-border p-4 mb-4">
              <div className="font-mono text-[10px] text-text-muted mb-3 uppercase tracking-widest">
                Pohon Keputusan AI
              </div>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-signal-amber">?</span>
                  <span className="text-text-secondary">Apakah kapal induk pemain dalam jangkauan?</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-friend">Y</span>
                  <span className="text-text-muted">--&gt; Fokus tembakan ke kapal induk</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-foe">N</span>
                  <span className="text-text-muted">--&gt; Lanjut ke pertanyaan berikutnya</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-signal-amber">?</span>
                  <span className="text-text-secondary">Apakah ada kapal pemain lemah dalam jangkauan?</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-friend">Y</span>
                  <span className="text-text-muted">--&gt; Tembak target terlemah</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <span className="text-foe">N</span>
                  <span className="text-text-muted">--&gt; Mendekati kapal induk pemain</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <AiRule text="Aturan sama untuk AI musuh dan autopilot kapal tanpa kapten" />
              <AiRule text="Variasi dari seed: pilihan target, sedikit deviasi arah" />
              <AiRule text="Tidak ada machine learning -- semua aturan eksplisit di Solidity" />
              <AiRule text="Perulangan berbatas: jumlah kapal, giliran, sub-langkah punya maksimum" />
            </div>
          </div>
        </div>

        {/* Risk section */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Risiko Teknis & Mitigasi
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RiskCard
              risk="Gas finalizeMatch terlalu mahal"
              mitigation="Batasi jumlah kapal dan giliran maksimum. Ukur gas di Fase 1."
              level="medium"
            />
            <RiskCard
              risk="Server mati saat pertandingan"
              mitigation="Pertandingan bisa di-rejoin dengan token. CommitHash tetap on-chain sebagai bukti."
              level="medium"
            />
            <RiskCard
              risk="Gestur tidak akurat di ruangan gelap"
              mitigation="Cadangan 2D otomatis. Mouse/keyboard selalu tersedia. Diagnostik gestur untuk setel ambang."
              level="low"
            />
            <RiskCard
              risk="Dompet server kehabisan saldo"
              mitigation="Kode Otorisasi Armada membatasi pembuatan pertandingan. Monitor saldo."
              level="medium"
            />
            <RiskCard
              risk="Replay tidak cocok dengan hasil per giliran"
              mitigation="Test Hardhat: determinisme wajib. Input sama = hasil sama, 100%."
              level="high"
            />
            <RiskCard
              risk="Sepolia faucet tidak tersedia"
              mitigation="Siapkan beberapa faucet alternatif. Hardhat node lokal untuk development."
              level="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AceRule({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-signal-amber/60 mt-2 shrink-0"></span>
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );
}

function AiRule({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-foe/60 mt-2 shrink-0"></span>
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );
}

function RiskCard({ risk, mitigation, level }: {
  risk: string;
  mitigation: string;
  level: 'low' | 'medium' | 'high';
}) {
  const levelColors = {
    low: 'bg-friend/20 text-friend border-friend/30',
    medium: 'bg-signal-amber/20 text-signal-amber border-signal-amber/30',
    high: 'bg-danger/20 text-danger border-danger/30',
  };

  const levelLabels = {
    low: 'Rendah',
    medium: 'Sedang',
    high: 'Tinggi',
  };

  return (
    <div className="p-4 bg-bg-secondary/50 border border-border">
      <div className="flex items-center justify-between mb-2">
        <span className={`font-mono text-[10px] px-1.5 py-0.5 border ${levelColors[level]} uppercase tracking-wide`}>
          {levelLabels[level]}
        </span>
      </div>
      <div className="font-display text-sm font-semibold text-text-primary mb-2">{risk}</div>
      <p className="text-xs text-text-muted leading-relaxed">
        <span className="text-friend">Mitigasi:</span> {mitigation}
      </p>
    </div>
  );
}

export default AceCardSection;
