import { useState, useEffect } from 'react';

interface HeaderProps {
  time: Date;
}

function Header({ time }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 100;
        if (window.scrollY >= top) {
          current = el.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { href: '#ikhtisar', label: 'Ikhtisar' },
    { href: '#arsitektur', label: 'Arsitektur' },
    { href: '#alur', label: 'Alur' },
    { href: '#armada', label: 'Armada' },
    { href: '#stack', label: 'Stack' },
    { href: '#akses', label: 'Akses' },
    { href: '#fase', label: 'Fase' },
    { href: '#presentasi', label: 'Presentasi' },
  ];

  const isActive = (href: string) => {
    const id = href.replace('#', '');
    return activeSection === id;
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

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-signal-amber'
                    : 'text-text-secondary hover:text-signal-amber'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Status + Mobile menu */}
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

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1 border border-border hover:border-signal-amber transition-colors"
              aria-label="Menu navigasi"
              aria-expanded={mobileOpen}
            >
              <span className={`w-4 h-px bg-current transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
              <span className={`w-4 h-px bg-current transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-4 h-px bg-current transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-bg-secondary">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 px-3 text-sm transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-signal-amber bg-signal-amber/5 border-l-2 border-signal-amber'
                    : 'text-text-secondary hover:text-signal-amber border-l-2 border-transparent'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
