import React, { useState } from 'react';
import { CHELSEA_LOGO } from '../constants';
import { Screen } from '../types';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcon?: string;
  onRightAction?: () => void;
  onNavigate?: (screen: Screen) => void;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack,
  onBack,
  rightIcon, // No longer default to account_circle
  onRightAction,
  onNavigate,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (screen: Screen) => {
    setIsMenuOpen(false);
    if (onNavigate) onNavigate(screen);
  };

  return (
    <>
      <header className="shrink-0 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] z-50 pt-[env(safe-area-inset-top)] bg-chelsea-blue/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
        <div className="h-16 min-h-[64px] px-4 flex items-center justify-between w-full">
          {/* Left Action - Chelsea Logo or Back Button */}
          <div className="flex items-center gap-3">
            {showBack ? (
              <button
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors -ml-2"
              >
                <span className="material-symbols-outlined text-2xl text-white">arrow_back_ios_new</span>
              </button>
            ) : (
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <img src={CHELSEA_LOGO} alt="Chelsea FC" className="w-full h-full object-contain drop-shadow-md" />
              </div>
            )}
            {title && !showBack && (
              <h1 className="text-white font-bold text-lg uppercase tracking-wider">{title}</h1>
            )}
          </div>

          {/* Center - Title if Back button is shown, otherwise empty */}
          {showBack && title && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <span className="text-white font-bold text-lg uppercase tracking-wider">{title}</span>
            </div>
          )}

          {/* Right Action - Hamburger Menu or Custom Action */}
          <div className="flex items-center justify-end">
            {rightIcon ? (
              <button
                onClick={onRightAction}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl text-white">{rightIcon}</span>
              </button>
            ) : (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl text-white">menu</span>
              </button>
            )}
          </div>
        </div>

        {/* Optional Bottom Content (Tabs, etc) */}
        {children && (
          <div className="px-4 pb-4 w-full animate-in fade-in slide-in-from-top-2 duration-300">
            {children}
          </div>
        )}
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] h-full z-[100] bg-chelsea-blue/95 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col">
          <div className="h-16 pt-[env(safe-area-inset-top)] px-4 flex items-center justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl text-white">close</span>
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
            <button onClick={() => handleNavClick(Screen.HOME)} className="text-3xl font-black text-white uppercase tracking-tighter hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => handleNavClick(Screen.MATCHDAY)} className="text-3xl font-black text-white uppercase tracking-tighter hover:text-gray-300 transition-colors">Matchday</button>
            <button onClick={() => handleNavClick(Screen.ROSTER)} className="text-3xl font-black text-white uppercase tracking-tighter hover:text-gray-300 transition-colors">Squad</button>
            <button onClick={() => handleNavClick(Screen.ABOUT)} className="text-3xl font-black text-white uppercase tracking-tighter hover:text-gray-300 transition-colors">About</button>
          </nav>

          <div className="p-8 text-center">
            <img src={CHELSEA_LOGO} alt="Chelsea FC" className="w-16 h-16 object-contain mx-auto opacity-20 mb-4" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
