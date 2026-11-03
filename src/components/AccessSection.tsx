function AccessSection() {
  return (
    <section id="akses" className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">05</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Akses & Peran Admin
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Tidak ada tabel users. Identitas admin adalah alamat dompet, role dicek langsung ke
          smart contract. Pemain biasa cukup masuk dengan kode room -- tanpa akun, tanpa dompet.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Access Code */}
          <div className="panel-border bg-bg-panel p-6">
            <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
              Kode Otorisasi Armada
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Wajib untuk membuat pertandingan. Dibuat, diganti, dan dicabut oleh Laksamana
              atau Laksamana Agung. Bisa diberi masa berlaku dan batas pemakaian.
            </p>

            {/* Code example */}
            <div className="bg-bg-primary border border-border p-4 mb-4">
              <div className="font-mono text-xs text-text-muted mb-2">Contoh Kode:</div>
              <div className="font-mono text-sm text-signal-amber tabular tracking-wider">
                AG-7X4K-M9P2-QW8R
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary border border-border text-text-muted">
                  Berlaku: 3 jam
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-bg-secondary border border-border text-text-muted">
                  Maks: 10 pertandingan
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-friend/20 border border-friend/30 text-friend">
                  Aktif
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <AccessRule text="Hanya hash kode disimpan di database, bukan kode asli" />
              <AccessRule text="Jangan simpan hash kode pendek di blockchain (data on-chain publik)" />
              <AccessRule text="Batas: jumlah room aktif per kode, maksimal 5 pemain per room" />
              <AccessRule text="Pertandingan kedaluwarsa otomatis dibersihkan secara oportunistik" />
            </div>
          </div>

          {/* Visitor access */}
          <div className="panel-border bg-bg-panel p-6">
            <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
              Akses Tanpa Kode (Kadet)
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Tanpa kode otorisasi, pengunjung tetap bisa mengakses fitur publik.
              Mereka disebut Kadet -- belum resmi bagian dari armada.
            </p>

            <div className="space-y-3">
              <VisitorAccess icon="beranda" label="Beranda & tutorial permainan" />
              <VisitorAccess icon="gestur" label="Uji gestur tangan (diagnostik)" />
              <VisitorAccess icon="tonton" label="Menonton pertandingan berjalan" />
              <VisitorAccess icon="riwayat" label="Riwayat pertandingan on-chain" />
              <VisitorAccess icon="blokir" label="Tidak bisa membuat atau masuk pertandingan" />
            </div>

            <div className="mt-4 p-3 bg-bg-secondary/50 border border-border">
              <p className="text-xs text-text-muted leading-relaxed">
                Untuk bermain, Kadet harus mendapat kode room dari Komandan yang sudah
                masuk dengan Kode Otorisasi Armada.
              </p>
            </div>
          </div>
        </div>

        {/* Admin roles */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8 mb-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-6 uppercase tracking-wide">
            Peran On-Chain
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Role Tampilan</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Role Kontrak</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Hak</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-text-primary">Laksamana Agung</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-text-muted">DEFAULT_ADMIN_ROLE</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">
                    Semua hak Laksamana + mengangkat/mencabut Laksamana + mengatur dompet server
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-text-primary">Laksamana</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-text-muted">ADMIRAL_ROLE</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">
                    CRUD skenario, CRUD kode otorisasi, lihat & kelola riwayat
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-text-primary">Server Game Master</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-text-muted">GAME_SERVER_ROLE</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">
                    Hanya startMatch dan finalizeMatch
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Login flow */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Alur Login Dompet (Admin)
          </h3>
          <div className="grid sm:grid-cols-4 gap-4">
            <LoginStep step="1" title="Nonce" desc="Server memberi nonce acak" />
            <LoginStep step="2" title="Tanda Tangan" desc="Pengguna menandatangani pesan di MetaMask" />
            <LoginStep step="3" title="Verifikasi" desc="Server verifikasi tanda tangan + cek role ke kontrak" />
            <LoginStep step="4" title="Sesi" desc="Cookie httpOnly, secure, sameSite dibuat" />
          </div>
          <div className="mt-4 p-3 bg-bg-secondary/50 border border-border">
            <p className="text-xs text-text-muted leading-relaxed">
              Tanpa password, tanpa email. Identitas = alamat dompet. Role dicek langsung ke smart contract
              setiap kali ada aksi admin. Hak akses dicek di server dan ditegakkan kontrak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessRule({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-signal-amber/60 mt-2 shrink-0"></span>
      <span className="text-sm text-text-secondary">{text}</span>
    </div>
  );
}

function VisitorAccess({ icon, label }: { icon: string; label: string }) {
  const icons: Record<string, React.ReactNode> = {
    beranda: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    gestur: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 113.15 0v5.598M10.05 4.575v5.598M13.2 4.575a1.575 1.575 0 113.15 0v3.847M13.2 4.575v5.598M16.35 4.575a1.575 1.575 0 113.15 0v6.448M6.9 7.725a1.575 1.575 0 00-3.15 0v5.325c0 3.798 2.982 6.975 6.75 7.493" />
      </svg>
    ),
    tonton: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
    riwayat: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    blokir: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  };

  const isBlocked = icon === 'blokir';

  return (
    <div className={`flex items-center gap-3 p-2 ${isBlocked ? 'opacity-50' : ''}`}>
      <div className={`w-8 h-8 flex items-center justify-center border ${
        isBlocked ? 'border-foe/30 text-foe/50' : 'border-border text-text-muted'
      }`}>
        {icons[icon]}
      </div>
      <span className={`text-sm ${isBlocked ? 'text-text-muted' : 'text-text-secondary'}`}>{label}</span>
    </div>
  );
}

function LoginStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="p-3 bg-bg-secondary/50 border border-border text-center">
      <div className="font-mono text-xs text-signal-amber mb-1 tabular">{step}</div>
      <div className="font-display text-sm font-semibold text-text-primary mb-1">{title}</div>
      <div className="text-xs text-text-muted">{desc}</div>
    </div>
  );
}

export default AccessSection;
