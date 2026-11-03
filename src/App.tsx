import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import ArchitectureSection from './components/ArchitectureSection';
import MatchFlowSection from './components/MatchFlowSection';
import ShipSection from './components/ShipSection';
import FogOfWarSection from './components/FogOfWarSection';
import GestureSection from './components/GestureSection';
import AceCardSection from './components/AceCardSection';
import TechStackSection from './components/TechStackSection';
import DataExampleSection from './components/DataExampleSection';
import AccessSection from './components/AccessSection';
import PhasesSection from './components/PhasesSection';
import PresentationSection from './components/PresentationSection';
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
        <MatchFlowSection />
        <ShipSection />
        <FogOfWarSection />
        <GestureSection />
        <AceCardSection />
        <TechStackSection />
        <DataExampleSection />
        <AccessSection />
        <PhasesSection />
        <PresentationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
