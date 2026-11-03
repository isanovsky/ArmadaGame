function GestureSection() {
  return (
    <section id="gestur" className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">03.1</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Peta Taktis 3D & Gestur Tangan
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Modul 3D hanya dimuat saat halaman Komandan dibuka (lazy import).
          Kru dan Kadet memakai tampilan 2D. Logika permainan tetap 2D --
          tampilan 3D hanya visual.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Left: 3D Map */}
          <div className="panel-border bg-bg-panel p-6">
            <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
              Kapal Prosedural
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Kapal dibuat low-poly secara prosedural dari primitif Three.js dengan flat shading.
              Tidak ada file model, tidak ada tekstur besar. Desain siluet orisinal,
              mudah dibedakan per kelas.
            </p>

            {/* Ship silhouette preview */}
            <div className="grid grid-cols-2 gap-3">
              <ShipPreview name="Induk" shape="capital" />
              <ShipPreview name="Dreadnought" shape="dreadnought" />
              <ShipPreview name="Destroyer" shape="destroyer" />
              <ShipPreview name="Suplai" shape="supply" />
            </div>
          </div>

          {/* Right: Fallback & Quality */}
          <div className="space-y-4">
            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
                Cadangan Otomatis
              </h3>
              <ul className="space-y-2">
                <FallbackItem text="WebGL tidak tersedia -- langsung ke 2D" />
                <FallbackItem text="FPS rata-rata di bawah ambang -- turun ke 2D" />
                <FallbackItem text="Layar kecil (mobile) -- pemberitahuan ramah + 2D" />
                <FallbackItem text="Mouse dan keyboard selalu tersedia sebagai cadangan" />
              </ul>
            </div>

            <div className="panel-border bg-bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
                Pilihan Kualitas
              </h3>
              <div className="space-y-2">
                <QualityRow level="Rendah" desc="Kapal kotak, tanpa bayangan, grid minim" />
                <QualityRow level="Sedang" desc="Low-poly, bayangan sederhana" />
                <QualityRow level="Tinggi" desc="Detail lebih, partikel, ambient occlusion" />
              </div>
            </div>
          </div>
        </div>

        {/* Gesture controls */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="status-dot status-dot--warning"></div>
            <h3 className="font-display text-lg font-semibold text-signal-amber uppercase tracking-wide">
              Tabel Gestur Tangan
            </h3>
          </div>
          <p className="text-sm text-text-secondary mb-6">
            MediaPipe Hand Landmarker, numHands: 2, mode VIDEO, dimuat dari CDN dengan versi di-pin.
            Pelajaran dari proyek GestureOrchestra diterapkan di sini.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <GestureCard
              name="Geser Peta"
              gesture="Telapak terbuka digerakkan"
              detail="Satu tangan terbuka, gerakan平移 menggeser viewport peta."
            />
            <GestureCard
              name="Pilih Target"
              gesture="Cubit ibu jari + telunjuk"
              detail="Jarak ujung ibu jari ke ujung telunjuk dibagi lebar telapak (world landmarks 3D). Target menempel ke kapal/titik terdekat."
            />
            <GestureCard
              name="Zoom"
              gesture="Dua tangan mencubit, dijauhkan/didekatkan"
              detail="Kedua tangan melakukan cubitan, jarak antar tangan mengatur zoom level."
            />
            <GestureCard
              name="Konfirmasi"
              gesture="Tahan cubitan ~1 detik"
              detail="Indikator progres melingkar muncul di sekitar target. Penuh = perintah dikirim."
            />
          </div>
        </div>

        {/* Lessons learned */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Pelajaran dari GestureOrchestra
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <LessonItem
              title="Pengukuran Cubitan"
              desc="Jarak ujung ibu jari ke ujung telunjuk dibagi lebar telapak, dari world landmarks (3D), bukan screen landmarks."
            />
            <LessonItem
              title="Hysteresis"
              desc="Ambang masuk dan keluar berbeda. Mencegah status cubitan berkedip saat tangan sedikit goyah."
            />
            <LessonItem
              title="Debounce"
              desc="Minimal 2 frame dengan jeda milidetik. Mencegah deteksi palsu dari noise kamera."
            />
            <LessonItem
              title="Target Menempel"
              desc="Pilihan target menempel ke kapal atau titik terdekat dalam radius besar. Tidak lompat-lompat."
            />
            <LessonItem
              title="Panduan Posisi"
              desc="Panduan posisi tangan di layar, peringatan jika tangan terpotong tepi kamera."
            />
            <LessonItem
              title="Diagnostik"
              desc="Halaman tes akurasi terpandu, ekspor rekaman JSON, ambang bisa disetel dari data nyata."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShipPreview({ name, shape }: { name: string; shape: string }) {
  const shapes: Record<string, React.ReactNode> = {
    capital: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polygon points="50,5 85,30 75,55 25,55 15,30" fill="none" stroke="var(--color-signal-amber)" strokeWidth="1.5" />
        <line x1="50" y1="5" x2="50" y2="55" stroke="var(--color-signal-amber)" strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="30" r="3" fill="var(--color-signal-amber)" opacity="0.6" />
      </svg>
    ),
    dreadnought: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polygon points="50,10 80,25 80,45 20,45 20,25" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <rect x="35" y="20" width="30" height="8" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1" />
      </svg>
    ),
    destroyer: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polygon points="50,12 75,30 65,50 35,50 25,30" fill="none" stroke="var(--color-friend)" strokeWidth="1.5" />
        <line x1="50" y1="12" x2="50" y2="50" stroke="var(--color-friend)" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
    supply: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="25" y="18" width="50" height="30" rx="2" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5" />
        <line x1="50" y1="18" x2="50" y2="48" stroke="var(--color-text-muted)" strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="33" r="4" fill="none" stroke="var(--color-text-muted)" strokeWidth="1" />
      </svg>
    ),
  };

  return (
    <div className="aspect-[5/3] bg-bg-secondary/50 border border-border p-2 flex flex-col items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        {shapes[shape]}
      </div>
      <span className="font-mono text-[10px] text-text-muted mt-1 uppercase tracking-wide">{name}</span>
    </div>
  );
}

function FallbackItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-text-secondary">
      <span className="w-1.5 h-1.5 rounded-full bg-signal-amber/60 mt-2 shrink-0"></span>
      <span>{text}</span>
    </li>
  );
}

function QualityRow({ level, desc }: { level: string; desc: string }) {
  return (
    <div className="flex items-baseline gap-3 py-1.5 border-b border-border/30 last:border-0">
      <span className="font-mono text-xs text-signal-amber tabular min-w-[60px]">{level}</span>
      <span className="text-xs text-text-muted">{desc}</span>
    </div>
  );
}

function GestureCard({ name, gesture, detail }: { name: string; gesture: string; detail: string }) {
  return (
    <div className="p-4 bg-bg-secondary/50 border border-border">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display font-semibold text-text-primary text-sm">{name}</span>
      </div>
      <div className="font-mono text-xs text-signal-amber mb-2">{gesture}</div>
      <p className="text-xs text-text-muted leading-relaxed">{detail}</p>
    </div>
  );
}

function LessonItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-3 bg-bg-secondary/50 border-l-2 border-signal-amber/30">
      <div className="font-display font-semibold text-text-primary text-sm mb-1">{title}</div>
      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

export default GestureSection;
