
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { AppStage, Persona, Match, TicketOffer, AddOn, Screen } from '../types';
import { MATCHES, OFFERS_BY_PERSONA } from '../constants';

// Sub-components
import Onboarding from '../components/Matchday/Onboarding';
import MatchSelection from '../components/Matchday/MatchSelection';
import Offers from '../components/Matchday/Offers';
import SeatSelection from '../components/Matchday/SeatSelection';
import Essentials from '../components/Matchday/Essentials';
import Checkout from '../components/Matchday/Checkout';
import AccountCreation from '../components/Matchday/AccountCreation';
import Tickets from '../components/Matchday/Tickets';
import InGame from '../components/Matchday/InGame';
import PostMatch from '../components/Matchday/PostMatch';

interface MatchdayScreenProps {
  onNavigate?: (screen: Screen) => void;
}

const MatchdayScreen: React.FC<MatchdayScreenProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'stamford' | 'kingsmeadow'>('stamford');

  // Booking Flow State
  const [stage, setStage] = useState<AppStage>(AppStage.ONBOARDING);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<TicketOffer | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  const [isUpgraded, setIsUpgraded] = useState(false);
  const [ticketCount, setTicketCount] = useState(1); // Default to 1 for now

  // Scroll to top on stage change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage]);

  // Derived state for matches based on stadium toggle
  const activeStadiumCode = activeTab === 'stamford' ? 'SB' : 'KM';
  const filteredMatches = MATCHES.filter(m => m.stadiumCode === activeStadiumCode);

  const renderContent = () => {
    switch (stage) {
      case AppStage.ONBOARDING:
        return (
          <Onboarding
            onSelect={(p) => {
              setPersona(p);
              if (p === Persona.BIG_GAMES) {
                setStage(AppStage.MATCH_SELECTION);
              } else {
                setStage(AppStage.OFFERS);
              }
            }}
          />
        );

      case AppStage.MATCH_SELECTION:
        return (
          <MatchSelection
            persona={persona}
            matches={filteredMatches}
            onBack={() => setStage(AppStage.ONBOARDING)}
            onSelect={(m, type) => {
              setSelectedMatch(m);
              // FLOW: Match-First paths
              if (type === 'TICKET_ONLY') {
                // Find default offer for ticket only
                const gaOffer = OFFERS_BY_PERSONA[Persona.BIG_GAMES].find(o => o.id === 'bg-ticket');
                setSelectedOffer(gaOffer || null);
                setStage(AppStage.SEAT_MAP);
              } else if (type === 'EXPERIENCE') {
                setStage(AppStage.OFFERS);
              } else {
                // Fallback
                setStage(AppStage.SEAT_MAP);
              }
            }}
          />
        );

      case AppStage.OFFERS:
        return (
          <Offers
            persona={persona || 'ALL'} // Default to ALL if somehow null
            selectedMatch={selectedMatch}
            onBack={() => {
              if (persona === Persona.BIG_GAMES) setStage(AppStage.MATCH_SELECTION);
              else setStage(AppStage.ONBOARDING);
            }}
            onSelect={(o) => {
              setSelectedOffer(o);
              if (selectedMatch) {
                setStage(AppStage.SEAT_MAP);
              } else {
                setStage(AppStage.MATCH_SELECTION);
              }
            }}
            onFilterHospitality={() => {
              // Special handler for "Browse individual match" from sold out view
              setPersona(Persona.BIG_GAMES);
              setStage(AppStage.MATCH_SELECTION);
            }}
            onBrowseAll={() => {
              setPersona('ALL' as any); // Type assertion for UI flow
            }}
          />
        );

      case AppStage.SEAT_MAP:
        return (
          <SeatSelection
            onBack={() => {
              // History logic could be better, but simple back for now
              if (persona === Persona.BIG_GAMES && !selectedOffer) setStage(AppStage.MATCH_SELECTION);
              else setStage(AppStage.OFFERS);
            }}
            onNext={(upgraded) => {
              setIsUpgraded(upgraded);
              setStage(AppStage.ESSENTIALS);
            }}
          />
        );

      case AppStage.ESSENTIALS:
        return (
          <Essentials
            onBack={() => setStage(AppStage.SEAT_MAP)}
            onNext={(addons) => {
              setSelectedAddOns(addons);
              setStage(AppStage.CHECKOUT);
            }}
          />
        );

      case AppStage.CHECKOUT:
        return (
          selectedOffer ? (
            <Checkout
              offer={selectedOffer}
              addOns={selectedAddOns}
              isUpgraded={isUpgraded}
              count={ticketCount}
              onSuccess={() => setStage(AppStage.ACCOUNT_CREATION)}
            />
          ) : <div>Error loading checkout</div>
        );

      case AppStage.ACCOUNT_CREATION:
        return (
          <AccountCreation onComplete={() => setStage(AppStage.TICKETS)} />
        );

      case AppStage.TICKETS:
        return (
          <Tickets onSelectMatch={() => setStage(AppStage.IN_GAME)} />
        );

      case AppStage.IN_GAME:
        return (
          <InGame onMatchEnd={() => setStage(AppStage.POST_MATCH)} />
        );

      case AppStage.POST_MATCH:
        return (
          <PostMatch />
        );

      default:
        return <div>Unknown Stage</div>;
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
      {/* Header with Stadium Toggle - Only show if in pre-game stages, or maybe always? 
          The source hid the header in some views, but here we probably want to keep it consistent 
          until maybe InGame/PostMatch/Tickets?
      */}
      {stage !== AppStage.IN_GAME && stage !== AppStage.POST_MATCH && (
        <Header title="Matchday" onNavigate={onNavigate}>
          <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
            <button
              onClick={() => setActiveTab('stamford')}
              className={`flex-1 py-1.5 rounded-[10px] text-xs font-bold transition-all ${activeTab === 'stamford' ? 'bg-white text-chelsea-blue shadow-sm' : 'text-chelsea-text-gray hover:text-chelsea-text-dark'}`}
            >
              Stamford Bridge
            </button>
            <button
              onClick={() => setActiveTab('kingsmeadow')}
              className={`flex-1 py-1.5 rounded-[10px] text-xs font-bold transition-all ${activeTab === 'kingsmeadow' ? 'bg-white text-chelsea-blue shadow-sm' : 'text-chelsea-text-gray hover:text-chelsea-text-dark'}`}
            >
              Kingsmeadow
            </button>
          </div>
        </Header>
      )}

      {/* Main Content Area */}
      <PageLayout className={`pt-[124px] pb-20 ${stage === AppStage.IN_GAME || stage === AppStage.POST_MATCH ? 'pt-0 !bg-blue-900' : ''}`}>
        {renderContent()}
      </PageLayout>
    </div>
  );
};

export default MatchdayScreen;
