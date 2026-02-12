import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const isProfileActive = currentScreen === Screen.ROSTER || currentScreen === Screen.PROFILE;

  const getTabClass = (isActive: boolean) => {
    return isActive 
      ? 'text-chelsea-blue scale-105' 
      : 'text-gray-500 hover:text-gray-300 active:scale-95';
  };

  const getIconClass = (isActive: boolean) => {
    return isActive ? 'fill-1 drop-shadow-[0_0_8px_rgba(3,70,148,0.5)]' : '';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-dark/95 backdrop-blur-xl border-t border-white/5 pb-8 pt-3 px-6 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate(Screen.HOME)}
          className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${getTabClass(currentScreen === Screen.HOME)}`}
        >
          <span className={`material-symbols-outlined text-2xl ${getIconClass(currentScreen === Screen.HOME)}`}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>

        <button 
          onClick={() => onNavigate(Screen.MATCHDAY)}
          className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${getTabClass(currentScreen === Screen.MATCHDAY)}`}
        >
          <span className={`material-symbols-outlined text-2xl ${getIconClass(currentScreen === Screen.MATCHDAY)}`}>stadium</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Matchday</span>
        </button>

        <button 
          onClick={() => onNavigate(Screen.ROSTER)}
          className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${getTabClass(isProfileActive)}`}
        >
          <span className={`material-symbols-outlined text-2xl ${getIconClass(isProfileActive)}`}>groups</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Profiles</span>
        </button>

        <button 
          onClick={() => onNavigate(Screen.ABOUT)}
          className={`flex flex-col items-center gap-1.5 transition-all duration-200 ${getTabClass(currentScreen === Screen.ABOUT)}`}
        >
          <span className={`material-symbols-outlined text-2xl ${getIconClass(currentScreen === Screen.ABOUT)}`}>info</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">About</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;