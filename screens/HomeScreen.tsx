import React from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { Screen } from '../types';

// Migrated Components
import SmartTicker from '../components/Home/SmartTicker';
import Hero from '../components/Home/Hero';
import MatchCountdown from '../components/Home/MatchCountdown';
import GafferAI from '../components/Home/GafferAI';
import ClubDNA from '../components/Home/ClubDNA';
import ManagerSpotlight from '../components/Home/ManagerSpotlight';
import SquadEntry from '../components/Home/SquadEntry';
import FanZone from '../components/Home/FanZone';
import SocialWall from '../components/Home/SocialWall';
import DeepLinks from '../components/Home/DeepLinks';
import StamfordQuest from '../components/Home/StamfordQuest';

interface HomeScreenProps {
  onNavigate?: (screen: Screen, playerId?: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-white relative">
      <Header onRightAction={() => console.log('Account')} onNavigate={onNavigate} />
      {/* Spacer for fixed Header */}
      <div className="h-16 pt-[env(safe-area-inset-top)]" />
      <SmartTicker />

      <PageLayout className="p-0 space-y-0" hidePadding>
        <Hero />
        <MatchCountdown />
        <GafferAI />
        <ClubDNA />
        <ManagerSpotlight />
        <SquadEntry onNavigate={onNavigate} />
        <FanZone />
        <SocialWall />
        <DeepLinks onNavigate={onNavigate} />

        {/* Footer Note */}
        <footer className="bg-slate-900 py-12 px-6 text-center">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Official CFCW Digital Hub</p>
          <div className="w-12 h-12 bg-white/5 mx-auto rounded-full flex items-center justify-center mb-6">
            <span className="text-white/20 font-serif italic text-xl">C</span>
          </div>
          <p className="text-white/40 text-[9px] font-bold leading-relaxed uppercase tracking-wider">
            © 2025 Chelsea Football Club Women<br />
            All Rights Reserved • Privacy Policy
          </p>
        </footer>
      </PageLayout>

      {/* Footer Note */}
    </div>
  );
};

export default HomeScreen;
