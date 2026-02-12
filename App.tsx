import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import MatchdayScreen from './screens/MatchdayScreen';
import RosterScreen from './screens/RosterScreen';
import PlayerProfileScreen from './screens/PlayerProfileScreen';
import AboutScreen from './screens/AboutScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen />;
      case Screen.MATCHDAY:
        return <MatchdayScreen />;
      case Screen.ROSTER:
        return <RosterScreen onNavigate={setCurrentScreen} />;
      case Screen.PROFILE:
        return <PlayerProfileScreen onBack={() => setCurrentScreen(Screen.ROSTER)} />;
      case Screen.ABOUT:
        return <AboutScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-chelsea-dark relative shadow-2xl overflow-hidden">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
};

export default App;