import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import MatchdayScreen from './screens/MatchdayScreen';
import RosterScreen from './screens/RosterScreen';
import PlayerProfileScreen from './screens/PlayerProfileScreen';
import AboutScreen from './screens/AboutScreen';
import TreasureHuntScreen from './screens/TreasureHuntScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

  const handleNavigate = (screen: Screen, playerId?: number) => {
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
        return <MatchdayScreen />;
      case Screen.ROSTER:
        return <RosterScreen onNavigate={handleNavigate} />;
      case Screen.PROFILE:
        return (
          <PlayerProfileScreen
            playerId={selectedPlayerId || 1}
            onBack={() => setCurrentScreen(Screen.ROSTER)}
          />
        );
      case Screen.ABOUT:
        return <AboutScreen />;
      case Screen.TREASURE_HUNT:
        return <TreasureHuntScreen onBack={() => setCurrentScreen(Screen.HOME)} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  const showBottomNav = currentScreen !== Screen.TREASURE_HUNT;

  return (
    <div className="w-full max-w-[393px] mx-auto h-full min-h-0 bg-chelsea-blue relative flex flex-col shadow-2xl ring-1 ring-white/10 md:rounded-[2.5rem] md:min-h-[760px] overflow-hidden">
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {renderScreen()}
      </div>
      {showBottomNav && (
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
};

export default App;