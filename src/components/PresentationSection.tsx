import { useState } from 'react';

function PresentationSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      question: '"Kenapa harus blockchain?"',
      answer: 'Blockchain menjamin Game Master tidak bisa curang. Skenario dan seed terkunci di awal pertandingan, dan hasil akhir dihitung ulang oleh kontrak yang bisa diverifikasi siapa saja.',
      detail: 'Tanpa blockchain, pemain harus percaya bahwa server menjalankan aturan dengan benar. Dengan blockchain, siapa saja bisa memutar ulang pertandingan dari data on-chain dan memastikan hasilnya identik.',
      color: 'amber',
    },
    {
      question: '"Kenapa tidak semua state di on-chain?"',
      answer: 'Karena data on-chain bersifat publik. Jika posisi musuh ditulis per giliran, pemain bisa mengintip dan role Perwira Radar kehilangan arti.',
      detail: 'Solusi: hanya commitHash di awal dan hasil akhir di on-chain. State selama permainan ada di database server, tidak perlu dipercaya publik karena hasil akhir diverifikasi oleh replay.',
      color: 'friend',
    },
    {
      question: '"Kenapa hanya 2 transaksi?"',
      answer: 'Satu transaksi bisa butuh belasan detik. Dengan 2 transaksi per pertandingan, target 3--5 menit tercapai.',
      detail: 'startMatch (1 TX) mengunci skenario. finalizeMatch (1 TX) memverifikasi dan mencatat hasil. Di antaranya, resolveTurn dipanggil via eth_call yang gratis dan instan.',
      color: 'amber',
    },
    {
      question: '"Kenapa pemain tidak perlu dompet kripto?"',
      answer: 'Server membayar gas dengan dompet relayer. Pemain cukup masuk dengan kode room dan nickname.',
      detail: 'Hanya Laksamana dan Laksamana Agung yang memakai MetaMask, untuk login dan aksi admin on-chain. Pengaman: Kode Otorisasi Armada mencegah orang acak menghabiskan saldo dompet server.',
      color: 'friend',
    },
    {
      question: '"Kenapa Solidity dan bukan bahasa lain?"',
      answer: 'Solidity adalah bahasa standar smart contract Ethereum. Hardhat dengan JavaScript menyatukan bahasa kontrak dan skrip.',
      detail: 'OpenZeppelin AccessControlEnumerable sudah teruji untuk manajemen role. BattleEngine ditulis sebagai library pure -- satu implementasi untuk eth_call (server) dan replay (kontrak).',
      color: 'amber',
    },
    {
      question: '"Bagaimana jika server mati di tengah pertandingan?"',
      answer: 'Pertandingan tidak bisa di-finalize, tapi commitHash tetap on-chain sebagai bukti bahwa pertandingan pernah dimulai.',
      detail: 'Pertandingan yang tidak di-finalize dalam waktu tertentu ditandai kedaluwarsa. Pemain bisa masuk kembali dengan token yang sama selama server hidup kembali.',
      color: 'friend',
    },
  ];

  return (
    <section id="presentasi" className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">06</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Bahan Presentasi
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Pertanyaan yang pasti muncul dari dosen. Setiap jawaban bisa dijelaskan dalam satu kalimat,
          lalu dikembangkan jika ditanya lebih lanjut.
        </p>

        {/* Slide viewer */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-text-muted tabular">
                {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveSlide((s) => Math.max(0, s - 1))}
                disabled={activeSlide === 0}
                className="w-8 h-8 border border-border flex items-center justify-center text-text-secondary hover:border-signal-amber hover:text-signal-amber disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveSlide((s) => Math.min(slides.length - 1, s + 1))}
                disabled={activeSlide === slides.length - 1}
                className="w-8 h-8 border border-border flex items-center justify-center text-text-secondary hover:border-signal-amber hover:text-signal-amber disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Slide content */}
          <div className="min-h-[240px]">
            <div className={`inline-block font-mono text-[10px] px-2 py-0.5 mb-4 uppercase tracking-widest ${
              slides[activeSlide].color === 'amber'
                ? 'bg-signal-amber/20 text-signal-amber'
                : 'bg-friend/20 text-friend'
            }`}>
              Pertanyaan Dosen
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-6 leading-tight">
              {slides[activeSlide].question}
            </h3>

            <div className="border-l-2 border-signal-amber/50 pl-4 mb-4">
              <p className="text-lg text-text-primary leading-relaxed font-medium">
                {slides[activeSlide].answer}
              </p>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              {slides[activeSlide].detail}
            </p>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? 'bg-signal-amber w-6'
                    : 'bg-border hover:bg-border-light'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick reference cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RefCard
            title="Kunci Jawaban"
            items={[
              'Blockchain = kepercayaan, bukan kecepatan',
              'Commit-reveal = skenario terkunci',
              'Replay = verifikasi independen',
              '2 TX = target durasi tercapai',
              'Relayer = pemain tanpa dompet',
            ]}
          />
          <RefCard
            title="Analogi Sederhana"
            items={[
              'Seperti amplop tertutup yang dibuka di akhir',
              'Aturan main di kontrak, bukan di server',
              'Siapa saja bisa jadi wasit',
              'Tidak perlu percaya server, cukup verifikasi',
            ]}
          />
          <RefCard
            title="Data On-Chain"
            items={[
              'commitHash (awal pertandingan)',
              'Hasil akhir (menang/kalah, giliran, kapal)',
              'Event untuk pencatatan permanen',
              'TIDAK: posisi per giliran, perintah pemain',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function RefCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="panel-border bg-bg-panel p-5">
      <h4 className="font-display text-sm font-semibold text-signal-amber mb-3 uppercase tracking-wide">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
            <span className="w-1 h-1 bg-signal-amber/60 rounded-full mt-1.5 shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PresentationSection;
