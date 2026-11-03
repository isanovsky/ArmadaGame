function TechStackSection() {
  return (
    <section id="stack" className="border-b border-border py-16 sm:py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">04</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Stack Teknologi
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Pilihan yang paling mudah diimplementasikan dan dijelaskan. Setiap anggota kelompok
          harus bisa menjelaskan kode saat presentasi. Utamakan kode yang sederhana, eksplisit,
          dan mudah ditelusuri.
        </p>

        {/* Stack table */}
        <div className="panel-border bg-bg-panel overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-secondary/50">
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs w-36">Bagian</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs">Pilihan</th>
                  <th className="text-left px-4 py-3 font-display font-semibold text-signal-amber uppercase tracking-wide text-xs hidden md:table-cell">Alasan</th>
                </tr>
              </thead>
              <tbody>
                <StackRow
                  part="Smart Contract"
                  choice="Solidity, Hardhat (JS), OpenZeppelin"
                  reason="Hardhat dengan JavaScript -- satu bahasa untuk kontrak dan skrip. OpenZeppelin untuk AccessControl yang sudah teruji."
                />
                <StackRow
                  part="Jaringan"
                  choice="Hardhat lokal + Sepolia testnet"
                  reason="Tanpa mainnet, tanpa uang sungguhan. Sepolia gratis dari faucet."
                />
                <StackRow
                  part="Server"
                  choice="Node.js, Express, Socket.IO, ethers v6, mysql2"
                  reason="Satu bahasa (JavaScript) untuk server dan kontrak. Socket.IO untuk multiplayer real-time."
                />
                <StackRow
                  part="Frontend"
                  choice="Vite + JS, Three.js, MediaPipe CDN"
                  reason="Vite cepat. Three.js hanya untuk peta 3D Komandan (lazy-loaded). MediaPipe dari CDN, versi di-pin."
                />
                <StackRow
                  part="Database"
                  choice="MySQL / MariaDB"
                  reason="XAMPP sudah terpasang di lokal. Migrasi plain SQL, bisa dijalankan di mana saja."
                />
                <StackRow
                  part="Hosting"
                  choice="Render / Railway (gratis)"
                  reason="Satu layanan Node.js menyajikan API, Socket.IO, dan frontend sekaligus. Satu target deploy."
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Smart Contract structure */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <ContractCard
            name="FleetCommand"
            desc="Akses dan role. DEFAULT_ADMIN_ROLE, ADMIRAL_ROLE, GAME_SERVER_ROLE. Proteksi Laksamana Agung terakhir."
            items={['AccessControlEnumerable', 'revokeRole override', 'renounceRole override', 'getRoleMemberCount check']}
          />
          <ContractCard
            name="BattleEngine"
            desc="Library pure: aturan permainan. Gerak, laser, torpedo, damage, suplai, objektif, batas giliran, kartu as."
            items={['resolveTurn() pure', 'Integer sqrt (Babylonia)', 'Deterministic random', 'AI musuh & autopilot']}
          />
          <ContractCard
            name="MatchLedger"
            desc="Commit, finalize, replay, hasil. Verifikasi hash, putar ulang pertandingan, catat hasil permanen."
            items={['startMatch()', 'finalizeMatch()', 'Replay verification', 'Event emission']}
          />
        </div>

        {/* Database tables */}
        <div className="panel-border bg-bg-panel p-6 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Database Off-Chain (MySQL)
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            Database hanya menyimpan yang tidak perlu dipercaya publik atau yang perlu cepat.
            Tidak ada tabel users -- identitas admin adalah alamat dompet, role dicek langsung ke smart contract.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <TableCard name="scenarios" desc="Peta, armada musuh, objektif, batas giliran, status terbit" />
            <TableCard name="access_codes" desc="Hash kode (bukan kode asli), masa berlaku, batas pemakaian" />
            <TableCard name="matches" desc="Kode room, skenario, status, seed aman, hash transaksi" />
            <TableCard name="match_players" desc="Nickname, role, kapal, token pemain" />
            <TableCard name="match_orders" desc="Log perintah per giliran untuk replay" />
            <TableCard name="admin_audit" desc="Catatan aksi admin: siapa, apa, kapan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StackRow({ part, choice, reason }: { part: string; choice: string; reason: string }) {
  return (
    <tr className="border-b border-border/50">
      <td className="px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wide">{part}</td>
      <td className="px-4 py-3 text-text-primary font-medium">{choice}</td>
      <td className="px-4 py-3 text-text-secondary text-xs hidden md:table-cell">{reason}</td>
    </tr>
  );
}

function ContractCard({ name, desc, items }: { name: string; desc: string; items: string[] }) {
  return (
    <div className="panel-border bg-bg-panel p-5">
      <h4 className="font-mono text-sm font-medium text-signal-amber mb-2">{name}</h4>
      <p className="text-xs text-text-secondary mb-3 leading-relaxed">{desc}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-text-muted">
            <span className="w-1 h-1 bg-signal-amber/50 rounded-full"></span>
            <span className="font-mono">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TableCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="p-3 bg-bg-secondary/50 border border-border">
      <div className="font-mono text-xs text-signal-amber mb-1">{name}</div>
      <div className="text-xs text-text-muted">{desc}</div>
    </div>
  );
}

export default TechStackSection;
