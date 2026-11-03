function ArchitectureSection() {
  return (
    <section id="arsitektur" className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">02</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Arsitektur Sistem
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Prinsip inti: <span className="text-text-primary font-medium">server untuk kecepatan, blockchain untuk kepercayaan</span>.
          Dua transaksi on-chain per pertandingan -- awal dan akhir. Seluruh permainan berjalan di server.
        </p>

        {/* The "Why Blockchain" answer */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="status-dot status-dot--warning"></div>
            <h3 className="font-display text-lg font-semibold text-signal-amber uppercase tracking-wide">
              Mengapa Blockchain?
            </h3>
          </div>
          <p className="text-text-secondary leading-relaxed mb-6">
            Jawaban singkat untuk pertanyaan dosen: <span className="text-text-primary italic">
            "Blockchain menjamin bahwa Game Master tidak bisa curang. Senario dan seed terkunci
            di awal pertandingan, dan hasil akhir dihitung ulang oleh kontrak yang bisa diverifikasi siapa saja."</span>
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <WhyCard
              number="01"
              title="Komitmen Awal"
              desc="Server mengirim hash skenario + seed ke kontrak. Skenario terkunci, tidak bisa diubah setelah pertandingan dimulai."
            />
            <WhyCard
              number="02"
              title="Verifikasi Publik"
              desc="Data on-chain bersifat publik. Jika posisi musuh ditulis per giliran, pemain bisa mengintip dan role Perwira Radar kehilangan arti."
            />
            <WhyCard
              number="03"
              title="Replay Independen"
              desc="Siapa saja bisa memutar ulang pertandingan dari data on-chain dan memastikan hasilnya benar. Tidak perlu percaya server."
            />
          </div>
        </div>

        {/* Flow diagram */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-10">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-6 uppercase tracking-wide">
            Alur Pertandingan
          </h3>
          <div className="space-y-4">
            <FlowStep
              phase="AWAL"
              txCount="1 TX"
              title="startMatch"
              desc="Server Game Master membuat seed rahasia, menghitung commitHash = keccak256(scenarioHash, seed, salt), mengirim ke smart contract. Skenario dan perilaku musuh terkunci."
              txColor="amber"
            />
            <FlowConnector />
            <FlowStep
              phase="BERMAIN"
              txCount="0 TX"
              title="resolveTurn via eth_call"
              desc="Setiap giliran diselesaikan server dengan memanggil fungsi pure mesin pertempuran di smart contract lewat eth_call (gratis, tanpa menunggu blok). Aturan permainan hanya ada di Solidity -- server dan frontend tidak punya salinan aturan sendiri."
              txColor="friend"
            />
            <FlowConnector />
            <FlowStep
              phase="AKHIR"
              txCount="1 TX"
              title="finalizeMatch"
              desc="Server membuka seed, mengirim skenario dan seluruh catatan perintah. Kontrak memverifikasi hash, memutar ulang seluruh pertandingan, dan mencatat hasil secara permanen sebagai event dan state."
              txColor="amber"
            />
          </div>
        </div>

        {/* Additional details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="panel-border bg-bg-panel p-6">
            <h4 className="font-display font-semibold text-text-primary mb-3 uppercase tracking-wide text-sm">
              Siapa Membayar Gas?
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Server membayar gas dengan dompet server (relayer) untuk 2 transaksi per pertandingan.
              Pemain tidak perlu dompet kripto sama sekali. Hanya Laksamana dan Laksamana Agung
              yang memakai MetaMask untuk login dan aksi admin on-chain.
            </p>
            <div className="mt-3 p-2 bg-bg-secondary/50 border border-border">
              <span className="font-mono text-xs text-text-muted">
                Pengaman: Kode Otorisasi Armada diperlukan untuk membuat pertandingan,
                mencegah orang acak menghabiskan saldo dompet server.
              </span>
            </div>
          </div>

          <div className="panel-border bg-bg-panel p-6">
            <h4 className="font-display font-semibold text-text-primary mb-3 uppercase tracking-wide text-sm">
              Kabut Perang
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Karena state selama permainan tidak ditulis on-chain (untuk mencegah pengintipan),
              server hanya mengirim ke tiap pemain informasi yang boleh mereka lihat.
              Kontak di luar jangkauan sensor disembunyikan; posisi yang terlihat
              diberi ketidakpastian visual. Ini yang membuat role Perwira Radar bermakna.
            </p>
            <div className="mt-3 p-2 bg-bg-secondary/50 border border-border">
              <span className="font-mono text-xs text-text-muted">
                State on-chain hanya: commitHash (awal) dan hasil akhir.
                Sisanya di database server, tidak perlu dipercaya publik.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="p-4 bg-bg-secondary/50 border border-border">
      <span className="font-mono text-xs text-signal-amber mb-2 block tabular">{number}</span>
      <h4 className="font-display font-semibold text-text-primary text-sm mb-2">{title}</h4>
      <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}

function FlowStep({ phase, txCount, title, desc, txColor }: {
  phase: string;
  txCount: string;
  title: string;
  desc: string;
  txColor: 'amber' | 'friend';
}) {
  const txBgClass = txColor === 'amber' ? 'bg-signal-amber/20 text-signal-amber' : 'bg-friend/20 text-friend';

  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 flex flex-col items-center">
        <div className={`w-16 text-center py-1 font-mono text-xs font-medium ${txBgClass}`}>
          {txCount}
        </div>
      </div>
      <div className="flex-1 border-l border-border pl-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{phase}</span>
          <span className="font-mono text-sm text-text-primary font-medium">{title}</span>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex gap-4 items-stretch">
      <div className="shrink-0 w-16 flex justify-center">
        <div className="w-px h-6 bg-border"></div>
      </div>
      <div className="border-l border-border ml-4">
        <div className="w-px h-6 border-l border-dashed border-border-light"></div>
      </div>
    </div>
  );
}

export default ArchitectureSection;
