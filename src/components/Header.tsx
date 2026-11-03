interface HeaderProps {
  time: Date;
}

function Header({ time }: HeaderProps) {
  const formatTime = (d: Date) => {
    return d.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <header className="border-b border-border bg-bg-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left: Logo/Project name */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-friend animate-signal"></div>
              <span className="font-display font-bold text-lg tracking-wide text-text-primary uppercase">
                ArmadaGame
              </span>
            </div>
            <span className="hidden sm:inline text-text-muted text-xs font-mono border-l border-border pl-3 ml-1">
              BRIEFING TERMINAL
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#ikhtisar" className="text-text-secondary hover:text-signal-amber text-sm transition-colors duration-200">
              Ikhtisar
            </a>
            <a href="#arsitektur" className="text-text-secondary hover:text-signal-amber text-sm transition-colors duration-200">
              Arsitektur
            </a>
            <a href="#armada" className="text-text-secondary hover:text-signal-amber text-sm transition-colors duration-200">
              Armada
            </a>
            <a href="#stack" className="text-text-secondary hover:text-signal-amber text-sm transition-colors duration-200">
              Stack
            </a>
            <a href="#fase" className="text-text-secondary hover:text-signal-amber text-sm transition-colors duration-200">
              Fase
            </a>
          </nav>

          {/* Right: Status */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-text-muted">
              <span>{formatDate(time)}</span>
              <span className="text-border-light">|</span>
              <span className="tabular text-signal-amber">{formatTime(time)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="status-dot status-dot--active"></span>
              <span className="text-xs text-text-muted hidden sm:inline">SISTEM AKTIF</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
