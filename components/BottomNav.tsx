import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const isProfileActive = currentScreen === Screen.ROSTER || currentScreen === Screen.PROFILE;

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] bg-chelsea-blue/80 backdrop-blur-md border-t border-white/10 pt-1 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] z-50">
      <div className="flex justify-between items-center gap-1 relative">
        <button
          onClick={() => onNavigate(Screen.HOME)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[60px] justify-center relative transition-all duration-300 ${currentScreen === Screen.HOME ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
        >
          {currentScreen === Screen.HOME && <div className="absolute top-[-4px] w-6 h-1 bg-white rounded-full animate-in fade-in zoom-in duration-300" />}
          <span className={`material-symbols-outlined text-[26px] ${currentScreen === Screen.HOME ? 'fill-1' : ''}`}>home</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button
          onClick={() => onNavigate(Screen.MATCHDAY)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[60px] justify-center relative transition-all duration-300 ${currentScreen === Screen.MATCHDAY ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
        >
          {currentScreen === Screen.MATCHDAY && <div className="absolute top-[-4px] w-6 h-1 bg-white rounded-full animate-in fade-in zoom-in duration-300" />}
          <span className={`material-symbols-outlined text-[26px] ${currentScreen === Screen.MATCHDAY ? 'fill-1' : ''}`}>stadium</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Matchday</span>
        </button>
        <button
          onClick={() => onNavigate(Screen.ROSTER)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[60px] justify-center relative transition-all duration-300 ${isProfileActive ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
        >
          {isProfileActive && <div className="absolute top-[-4px] w-6 h-1 bg-white rounded-full animate-in fade-in zoom-in duration-300" />}
          <span className={`material-symbols-outlined text-[26px] ${isProfileActive ? 'fill-1' : ''}`}>groups</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Squad</span>
        </button>
        <button
          onClick={() => onNavigate(Screen.ABOUT)}
          className={`flex-1 flex flex-col items-center gap-1 min-h-[60px] justify-center relative transition-all duration-300 ${currentScreen === Screen.ABOUT ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
        >
          {currentScreen === Screen.ABOUT && <div className="absolute top-[-4px] w-6 h-1 bg-white rounded-full animate-in fade-in zoom-in duration-300" />}
          <span className={`material-symbols-outlined text-[26px] ${currentScreen === Screen.ABOUT ? 'fill-1' : ''}`}>info</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">About</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;