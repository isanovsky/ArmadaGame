import { useState, useEffect, useRef } from 'react';

function MatchFlowSection() {
  const [activePhase, setActivePhase] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActivePhase((p) => (p + 1) % 4);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const phases = [
    {
      time: '00:00 - 00:30',
      duration: '30 detik',
      title: 'Briefing & Pemilihan Kapal',
      desc: 'Komandan masuk dengan Kode Otorisasi Armada. Kru masuk dengan kode room dan nickname. Pemilihan komposisi kapal: kapal induk wajib, ditambah hingga 3 kapal kapten (Dreadnought, Destroyer, atau Suplai).',
      tx: '0',
      color: 'friend',
    },
    {
      time: '00:30 - 03:30',
      duration: '5-8 giliran x 30 detik',
      title: 'Pelaksanaan Giliran',
      desc: 'Setiap giliran: 25 detik perencanaan serentak, lalu 5 detik animasi hasil. Server memanggil resolveTurn via eth_call (gratis). Kabut perang disembunyikan sesuai role. Timer habis = perintah terakhir dipakai otomatis.',
      tx: '0',
      color: 'friend',
    },
    {
      time: '03:30 - 03:50',
      duration: '20 detik',
      title: 'Finalisasi & Pencatatan',
      desc: 'Server membuka seed, mengirim skenario + seluruh log perintah ke kontrak. Kontrak memverifikasi hash, memutar ulang pertandingan, mencatat hasil permanen. Event dipancarkan.',
      tx: '1',
      color: 'amber',
    },
    {
      time: '03:50 - 04:00',
      duration: '10 detik',
      title: 'Layar Hasil',
      desc: 'Menang/kalah, jumlah giliran, kapal tersisa, apakah kartu as dipakai. Tautan transaksi di Etherscan. Statistik pertandingan tersimpan di database.',
      tx: '0',
      color: 'friend',
    },
  ];

  return (
    <section id="alur" className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">02.1</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Alur Satu Pertandingan
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Target durasi: <span className="text-signal-amber font-medium tabular">3--5 menit</span>.
          Hanya dua transaksi on-chain per pertandingan, keduanya dibayar server.
          Pemain tidak pernah menunggu konfirmasi blok.
        </p>

        {/* Timeline visualization */}
        <div className="panel-border bg-bg-panel p-4 sm:p-6 mb-8">
          {/* Progress bar */}
          <div className="relative h-2 bg-bg-secondary rounded-full mb-6 overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-signal-amber transition-all duration-700 ease-out"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />
            {/* Phase markers */}
            {phases.map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-bg-panel transition-colors duration-300"
                style={{
                  left: `${(i / (phases.length - 1)) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: i <= activePhase ? 'var(--color-signal-amber)' : 'var(--color-bg-tertiary)',
                }}
              />
            ))}
          </div>

          {/* Phase buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
            {phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`text-left p-3 border transition-all duration-300 ${
                  activePhase === i
                    ? 'border-signal-amber bg-signal-amber/5'
                    : 'border-border bg-bg-secondary/30 hover:border-border-light'
                }`}
              >
                <div className="font-mono text-[10px] text-text-muted tabular mb-1">{phase.time}</div>
                <div className={`text-xs font-display font-semibold uppercase tracking-wide ${
                  activePhase === i ? 'text-signal-amber' : 'text-text-secondary'
                }`}>
                  {phase.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div className="border-t border-border pt-5">
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <span className="font-mono text-xs text-text-muted tabular">{phases[activePhase].time}</span>
              <span className="font-mono text-xs text-text-muted">/</span>
              <span className="font-mono text-xs text-text-muted">{phases[activePhase].duration}</span>
              <span className={`ml-auto font-mono text-xs px-2 py-0.5 ${
                phases[activePhase].tx === '1'
                  ? 'bg-signal-amber/20 text-signal-amber'
                  : 'bg-friend/20 text-friend'
              }`}>
                {phases[activePhase].tx} TX on-chain
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-2 uppercase tracking-wide">
              {phases[activePhase].title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-3xl">
              {phases[activePhase].desc}
            </p>
          </div>
        </div>

        {/* Turn cycle detail */}
        <div className="panel-border bg-bg-panel p-6">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Siklus Satu Giliran
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <TurnStep
              step="1"
              title="Perencanaan"
              duration="25 detik"
              items={[
                'Komandan: gerakkan induk, pasang tujuan',
                'Perwira Radar: pertajam sektor, hitung titik bidik',
                'Kapten: gerakkan kapal, pilih target, isi daya',
              ]}
            />
            <TurnStep
              step="2"
              title="Pengumpulan"
              duration="Otomatis"
              items={[
                'Timer habis = perintah terakhir dipakai',
                'Pemain terputus = kapal beralih ke autopilot',
                'Server memvalidasi semua perintah',
              ]}
            />
            <TurnStep
              step="3"
              title="Resolusi"
              duration="5 detik"
              items={[
                'resolveTurn via eth_call (gratis)',
                'Gerak, tembakan, damage, suplai dihitung',
                'Hasil dikirim ke pemain sesuai kabut perang',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TurnStep({ step, title, duration, items }: {
  step: string;
  title: string;
  duration: string;
  items: string[];
}) {
  return (
    <div className="p-4 bg-bg-secondary/50 border border-border">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-xs text-signal-amber tabular">{step}.</span>
        <span className="font-display font-semibold text-text-primary text-sm uppercase tracking-wide">{title}</span>
      </div>
      <div className="font-mono text-[10px] text-text-muted mb-3 tabular">{duration}</div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
            <span className="w-1 h-1 bg-signal-amber/50 rounded-full mt-1.5 shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchFlowSection;
