function ShipSection() {
  return (
    <section id="armada" className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">03</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Kelas Kapal & Senjata
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Mekanik inti adalah kinematika dan titik cegat, bukan parabola. Tidak ada gravitasi
          permukaan di luar angkasa. Semua perhitungan memakai aritmetika bilangan bulat --
          smart contract tidak membutuhkan sinus atau kosinus.
        </p>

        {/* Ship classes table */}
        <div className="panel-border bg-bg-panel overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-secondary/50">
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Kelas</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Kecepatan</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Ketahanan</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Senjata</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs hidden sm:table-cell">Catatan</th>
                </tr>
              </thead>
              <tbody>
                <ShipRow
                  name="Kapal Induk"
                  speed="Lambat"
                  hull="Tinggi"
                  weapon="Lemah + Kartu As"
                  note="Hancur = misi gagal. Wajib 1 per armada."
                  isCapital
                />
                <ShipRow
                  name="Dreadnought"
                  speed="Sangat Lambat"
                  hull="Sangat Tinggi"
                  weapon="Meriam Berat"
                  note="Jarak menengah. Maks 1 per armada."
                />
                <ShipRow
                  name="Destroyer"
                  speed="Cepat"
                  hull="Sedang"
                  weapon="Laser + Torpedo"
                  note="Torpedo terbatas. Maks 2 per armada."
                />
                <ShipRow
                  name="Kapal Suplai"
                  speed="Sedang"
                  hull="Rendah"
                  weapon="Hampir Tidak Ada"
                  note="Memperbaiki & isi amunisi. Opsional, lemah."
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Weapons explanation */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="panel-border bg-bg-panel p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-px bg-signal-amber"></div>
              <h3 className="font-display font-semibold text-text-primary uppercase tracking-wide text-sm">
                Meriam Laser
              </h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Kena seketika, jarak pendek. Peluang kena turun seiring jarak,
              ditentukan secara deterministik dari angka acak pertandingan.
            </p>
            <div className="font-mono text-xs text-text-muted bg-bg-secondary/50 p-2 border border-border">
              hit_chance = base_chance - (jarak / jarak_maks) * faktor_penurunan
            </div>
          </div>

          <div className="panel-border bg-bg-panel p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-px bg-foe"></div>
              <h3 className="font-display font-semibold text-text-primary uppercase tracking-wide text-sm">
                Torpedo
              </h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              Waktu tempuh dan kecepatan tetap. Pemain membidik sebuah titik, bukan sudut.
              Torpedo kena jika target berada dalam radius ledak di titik itu saat torpedo tiba.
            </p>
            <div className="font-mono text-xs text-text-muted bg-bg-secondary/50 p-2 border border-border">
              titik_cegat = posisi_target + v_target * (jarak / v_torpedo)
            </div>
          </div>
        </div>

        {/* Intercept calculation example */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Contoh Hitungan Titik Cegat
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono text-xs text-text-muted mb-3 uppercase tracking-widest">Data Input</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Posisi target</span>
                  <span className="text-text-primary tabular">(3000, 4000)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Kecepatan target</span>
                  <span className="text-text-primary tabular">50 satuan/giliran</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Arah target</span>
                  <span className="text-text-primary tabular">0 derajat (kanan)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Jarak ke target</span>
                  <span className="text-text-primary tabular">5000 satuan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Kecepatan torpedo</span>
                  <span className="text-text-primary tabular">200 satuan/giliran</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs text-text-muted mb-3 uppercase tracking-widest">Perhitungan</h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Waktu tempuh</span>
                  <span className="text-text-primary tabular">5000 / 200 = 25 giliran</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Perpindahan target</span>
                  <span className="text-text-primary tabular">50 x 25 = 1250</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 mt-2">
                  <span className="text-signal-amber">Titik bidik</span>
                  <span className="text-signal-amber tabular font-bold">(4250, 4000)</span>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-4 leading-relaxed">
                Perwira Radar boleh memakai tombol "komputer" yang memberi titik bidik instan,
                tetapi dengan galat (akurasi berkurang). Hitungan manual yang tepat mendapat akurasi penuh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipRow({ name, speed, hull, weapon, note, isCapital }: {
  name: string;
  speed: string;
  hull: string;
  weapon: string;
  note: string;
  isCapital?: boolean;
}) {
  return (
    <tr className={`border-b border-border/50 ${isCapital ? 'bg-signal-amber/5' : ''}`}>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          {isCapital && <span className="status-dot status-dot--warning"></span>}
          <span className={`font-medium ${isCapital ? 'text-signal-amber' : 'text-text-primary'}`}>{name}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-text-secondary tabular">{speed}</td>
      <td className="px-4 py-3 text-text-secondary tabular">{hull}</td>
      <td className="px-4 py-3 text-text-secondary">{weapon}</td>
      <td className="px-4 py-3 text-text-muted text-xs hidden sm:table-cell">{note}</td>
    </tr>
  );
}

export default ShipSection;
