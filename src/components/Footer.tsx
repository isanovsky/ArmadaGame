function Footer() {
  return (
    <footer className="bg-bg-secondary/50 border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Project info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-friend animate-signal"></div>
              <span className="font-display font-bold text-sm tracking-wide uppercase text-text-primary">
                ArmadaGame
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Permainan komando armada luar angkasa kooperatif berbasis Web3.
              Proyek tugas kelompok mahasiswa.
            </p>
          </div>

          {/* Tech */}
          <div>
            <h4 className="font-display text-xs font-semibold text-signal-amber uppercase tracking-wide mb-3">
              Teknologi
            </h4>
            <ul className="space-y-1.5 text-xs text-text-muted">
              <li>Solidity + Hardhat</li>
              <li>Node.js + Express + Socket.IO</li>
              <li>Vite + Three.js + MediaPipe</li>
              <li>MySQL / MariaDB</li>
              <li>Sepolia Testnet</li>
            </ul>
          </div>

          {/* Concepts */}
          <div>
            <h4 className="font-display text-xs font-semibold text-signal-amber uppercase tracking-wide mb-3">
              Konsep Kunci
            </h4>
            <ul className="space-y-1.5 text-xs text-text-muted">
              <li>Commit-Reveal untuk skenario</li>
              <li>Replay verification on-chain</li>
              <li>Kabut perang (fog of war)</li>
              <li>Titik cegat (intercept point)</li>
              <li>Gestur tangan untuk peta 3D</li>
            </ul>
          </div>

          {/* Principles */}
          <div>
            <h4 className="font-display text-xs font-semibold text-signal-amber uppercase tracking-wide mb-3">
              Prinsip Desain
            </h4>
            <ul className="space-y-1.5 text-xs text-text-muted">
              <li>Server untuk kecepatan</li>
              <li>Blockchain untuk kepercayaan</li>
              <li>Kode sederhana dan eksplisit</li>
              <li>Satu aturan di Solidity saja</li>
              <li>Pemain tanpa dompet kripto</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs text-text-muted">
            <span className="text-signal-amber/60">REF:</span> AG-BRIEFING-001
            <span className="mx-2 text-border">|</span>
            <span className="text-signal-amber/60">STATUS:</span> DOKUMEN DESAIN
          </div>
          <div className="font-mono text-xs text-text-muted">
            Bahasa Indonesia -- Teks UI dan komentar kode
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
