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
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] bg-surface-dark/98 backdrop-blur-xl border-t border-white/10 rounded-t-[1.25rem] pt-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center gap-1">
        <button 
          onClick={() => onNavigate(Screen.HOME)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[56px] justify-center rounded-xl transition-all duration-200 active:scale-95 ${getTabClass(currentScreen === Screen.HOME)}`}
        >
          <span className={`material-symbols-outlined text-[22px] ${getIconClass(currentScreen === Screen.HOME)}`}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.MATCHDAY)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[56px] justify-center rounded-xl transition-all duration-200 active:scale-95 ${getTabClass(currentScreen === Screen.MATCHDAY)}`}
        >
          <span className={`material-symbols-outlined text-[22px] ${getIconClass(currentScreen === Screen.MATCHDAY)}`}>stadium</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Matchday</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.ROSTER)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[56px] justify-center rounded-xl transition-all duration-200 active:scale-95 ${getTabClass(isProfileActive)}`}
        >
          <span className={`material-symbols-outlined text-[22px] ${getIconClass(isProfileActive)}`}>groups</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Profiles</span>
        </button>
        <button 
          onClick={() => onNavigate(Screen.ABOUT)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[56px] justify-center rounded-xl transition-all duration-200 active:scale-95 ${getTabClass(currentScreen === Screen.ABOUT)}`}
        >
          <span className={`material-symbols-outlined text-[22px] ${getIconClass(currentScreen === Screen.ABOUT)}`}>info</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">About</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;