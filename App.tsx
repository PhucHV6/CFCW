import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import MatchdayScreen from './screens/MatchdayScreen';
import RosterScreen from './screens/RosterScreen';
import PlayerProfileScreen from './screens/PlayerProfileScreen';
import AboutScreen from './screens/AboutScreen';
import TreasureHuntScreen from './screens/TreasureHuntScreen';
import StamfordQuest from './components/Home/StamfordQuest';
import TicketFloatingAction from './components/Home/TicketFloatingAction';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | string | null>(null);

  const handleNavigate = (screen: Screen, playerId?: number | string) => {
    if (screen === Screen.PROFILE && playerId) {
      setSelectedPlayerId(playerId);
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onNavigate={handleNavigate} />;
      case Screen.MATCHDAY:
        return <MatchdayScreen onNavigate={handleNavigate} />;
      case Screen.ROSTER:
        return <RosterScreen onNavigate={handleNavigate} />;
      case Screen.PROFILE:
        return (
          <PlayerProfileScreen
            playerId={selectedPlayerId || 1} // Fallback to 1 if null, though logic should prevent this
            onBack={() => setCurrentScreen(Screen.ROSTER)}
          />
        );
      case Screen.ABOUT:
        return <AboutScreen onNavigate={handleNavigate} />;
      case Screen.TREASURE_HUNT:
        return <TreasureHuntScreen onBack={() => setCurrentScreen(Screen.HOME)} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="w-full max-w-[393px] mx-auto h-full min-h-0 bg-chelsea-blue relative flex flex-col shadow-2xl ring-1 ring-white/10 md:rounded-[2.5rem] md:min-h-[760px] overflow-hidden">
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {renderScreen()}
      </div>
      <StamfordQuest currentScreen={currentScreen} />
      <TicketFloatingAction />
    </div>
  );
};

export default App;