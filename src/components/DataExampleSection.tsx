import { useState } from 'react';

function DataExampleSection() {
  const [activeTab, setActiveTab] = useState<'scenario' | 'ship' | 'orders' | 'result'>('scenario');

  const tabs = [
    { id: 'scenario' as const, label: 'Scenario' },
    { id: 'ship' as const, label: 'ShipState' },
    { id: 'orders' as const, label: 'Orders' },
    { id: 'result' as const, label: 'MatchResult' },
  ];

  const examples: Record<string, { struct: string; json: string; desc: string }> = {
    scenario: {
      struct: `struct Scenario {
    uint8 objective;      // 0=hancurkan, 1=bertahan, 2=kabur, 3=kawal
    uint16 maxTurns;      // batas giliran (5-8)
    uint16 mapSize;       // ukuran peta (10000)
    bool aceEnabled;      // kartu as aktif
    EnemyShip[] enemies;  // armada musuh
    uint256[2] jumpPoint; // titik lompat (jika objektif kabur)
    uint256[2] goalPoint; // titik tujuan (jika objektif kawal)
}`,
      json: `{
  "objective": 0,
  "maxTurns": 6,
  "mapSize": 10000,
  "aceEnabled": true,
  "enemies": [
    { "class": 1, "x": 8000, "y": 5000, "hp": 100 },
    { "class": 2, "x": 7500, "y": 3000, "hp": 60 },
    { "class": 2, "x": 8500, "y": 7000, "hp": 60 }
  ],
  "jumpPoint": [0, 0],
  "goalPoint": [0, 0]
}`,
      desc: 'Skenario disimpan di database, tapi hash-nya ikut terkunci di commitHash sehingga tidak bisa diubah setelah pertandingan dimulai.',
    },
    ship: {
      struct: `struct ShipState {
    uint8 shipClass;      // 0=induk, 1=dreadnought, 2=destroyer, 3=suplai
    uint8 team;           // 0=pemain, 1=musuh
    uint16 x;             // posisi X (0-10000)
    uint16 y;             // posisi Y (0-10000)
    int16 vx;             // kecepatan X
    int16 vy;             // kecepatan Y
    uint16 hp;            // hull point
    uint8 torpedoes;      // sisa torpedo
    uint8 supplies;       // stok suplai
    bool charging;        // sedang isi daya kartu as
    uint8 chargeTurns;    // giliran isi daya tersisa
}`,
      json: `{
  "shipClass": 2,
  "team": 0,
  "x": 2000,
  "y": 5000,
  "vx": 50,
  "vy": 0,
  "hp": 80,
  "torpedoes": 3,
  "supplies": 0,
  "charging": false,
  "chargeTurns": 0
}`,
      desc: 'Semua angka bilangan bulat. Peta dalam satuan 0-10000 per sumbu. Akar kuadrat bilangan bulat (metode Babylonia) untuk jarak.',
    },
    orders: {
      struct: `struct Orders {
    uint8 shipId;         // ID kapal yang diberi perintah
    uint8 orderType;      // 0=gerak, 1=tembak laser, 2=tembak torpedo,
                          // 3=suplai, 4=isi daya kartu as
    uint16 targetX;       // target X (untuk gerak atau bidik)
    uint16 targetY;       // target Y
    uint8 sector;         // sektor radar (khusus Perwira Radar)
}`,
      json: `{
  "shipId": 2,
  "orderType": 2,
  "targetX": 4250,
  "targetY": 4000,
  "sector": 0
}`,
      desc: 'Log perintah per giliran disimpan di database untuk replay di finalizeMatch. Torpedo dibidik ke titik (bukan sudut) agar smart contract tidak butuh sinus/kosinus.',
    },
    result: {
      struct: `struct MatchResult {
    bool playerWin;       // menang atau kalah
    uint16 turnsPlayed;   // jumlah giliran dimainkan
    uint8 shipsRemaining; // kapal pemain tersisa
    bool aceUsed;         // apakah kartu as dipakai
    uint256 matchHash;    // hash hasil untuk verifikasi
}`,
      json: `{
  "playerWin": true,
  "turnsPlayed": 5,
  "shipsRemaining": 3,
  "aceUsed": false,
  "matchHash": "0x7f3a..."
}`,
      desc: 'Hasil dicatat permanen di smart contract sebagai event dan state. Tautan transaksi di Etherscan ditampilkan di layar hasil.',
    },
  };

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-signal-amber tracking-widest">04.1</span>
          <div className="h-px w-8 bg-signal-amber/50"></div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Contoh Format Data
          </h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-3xl">
          Struct ABI dirancang agar mudah di-encode dari JavaScript, hemat gas, dan mudah dibaca.
          Semua angka bilangan bulat -- tidak ada floating point di smart contract.
        </p>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-1 mb-6 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-signal-amber text-signal-amber'
                  : 'border-transparent text-text-muted hover:text-text-secondary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="panel-border bg-bg-panel overflow-hidden">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Struct */}
            <div className="p-4 sm:p-6">
              <div className="font-mono text-[10px] text-text-muted mb-3 uppercase tracking-widest">
                Solidity Struct
              </div>
              <pre className="text-xs text-text-secondary font-mono leading-relaxed overflow-x-auto whitespace-pre">
                {examples[activeTab].struct}
              </pre>
            </div>

            {/* JSON */}
            <div className="p-4 sm:p-6">
              <div className="font-mono text-[10px] text-text-muted mb-3 uppercase tracking-widest">
                Contoh JSON (JavaScript)
              </div>
              <pre className="text-xs text-text-secondary font-mono leading-relaxed overflow-x-auto whitespace-pre">
                {examples[activeTab].json}
              </pre>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-border p-4 sm:px-6 sm:py-4 bg-bg-secondary/30">
            <p className="text-sm text-text-secondary leading-relaxed">
              {examples[activeTab].desc}
            </p>
          </div>
        </div>

        {/* Gas estimates */}
        <div className="mt-8 panel-border bg-bg-panel p-6">
          <h3 className="font-display text-lg font-semibold text-signal-amber mb-4 uppercase tracking-wide">
            Perkiraan Gas
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <GasCard
              func="startMatch"
              gas="~80.000"
              desc="Simpan commitHash + matchId. Relatif murah karena hanya menulis hash dan ID."
            />
            <GasCard
              func="finalizeMatch"
              gas="~500.000--2.000.000"
              desc="Verifikasi hash + replay seluruh pertandingan. Gas tergantung jumlah giliran dan kapal."
            />
            <GasCard
              func="resolveTurn (eth_call)"
              gas="0 (gratis)"
              desc="Dipanggil via eth_call, tidak menulis ke blockchain. Gratis dan instan."
            />
          </div>
          <div className="mt-4 p-3 bg-bg-secondary/50 border border-border">
            <p className="text-xs text-text-muted leading-relaxed">
              Untuk pertandingan terpanjang (8 giliran, 4 kapal pemain + 5 musuh):
              diperkirakan finalizeMatch menghabiskan sekitar 1.500.000 gas.
              Di Sepolia, ini sekitar $0,01 dengan harga gas normal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GasCard({ func, gas, desc }: { func: string; gas: string; desc: string }) {
  return (
    <div className="p-4 bg-bg-secondary/50 border border-border">
      <div className="font-mono text-xs text-text-primary mb-1">{func}</div>
      <div className="font-mono text-lg text-signal-amber tabular mb-2">{gas}</div>
      <p className="text-xs text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

export default DataExampleSection;
