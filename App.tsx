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

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case Screen.MATCHDAY:
        return <MatchdayScreen />;
      case Screen.ROSTER:
        return <RosterScreen onNavigate={setCurrentScreen} />;
      case Screen.PROFILE:
        return <PlayerProfileScreen onBack={() => setCurrentScreen(Screen.ROSTER)} />;
      case Screen.ABOUT:
        return <AboutScreen />;
      case Screen.TREASURE_HUNT:
        return <TreasureHuntScreen onBack={() => setCurrentScreen(Screen.HOME)} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  const showBottomNav = currentScreen !== Screen.TREASURE_HUNT;

  return (
    <div className="w-full max-w-[428px] mx-auto h-full min-h-0 bg-chelsea-dark relative flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.06)] md:shadow-2xl md:rounded-[2rem] md:min-h-[640px] overflow-hidden">
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