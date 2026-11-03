import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ArchitectureSection from './components/ArchitectureSection';
import ShipSection from './components/ShipSection';
import TechStackSection from './components/TechStackSection';
import PhasesSection from './components/PhasesSection';
import Footer from './components/Footer';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body">
      <Header time={time} />
      <main>
        <HeroSection />
        <OverviewSection />
        <ArchitectureSection />
        <ShipSection />
        <TechStackSection />
        <PhasesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
