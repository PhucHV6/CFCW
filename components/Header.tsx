import React from 'react';
import { CHELSEA_LOGO } from '../constants';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcon?: string;
  onRightAction?: () => void;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack,
  onBack,
  rightIcon = "account_circle",
  onRightAction,
  children,
}) => {
  return (
    <header className="shrink-0 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[393px] z-50 pt-[env(safe-area-inset-top)] bg-chelsea-blue/80 backdrop-blur-md border-b border-white/10">
      <div className="h-16 min-h-[64px] px-4 flex items-center justify-between w-full">
        {/* Left Action - Back button only */}
        <div className="w-12 flex items-center justify-start">
          {showBack && (
            <button
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl text-white">arrow_back_ios_new</span>
            </button>
          )}
        </div>

        {/* Center - Chelsea Crest & Title */}
        <div className="flex-1 flex flex-col items-center justify-center pt-2">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <img src={CHELSEA_LOGO} alt="Chelsea FC" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Right Action */}
        <div className="w-12 flex items-center justify-end">
          <button
            onClick={onRightAction}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl text-white">{rightIcon}</span>
          </button>
        </div>
      </div>

      {/* Optional Bottom Content (Tabs, etc) */}
      {children && (
        <div className="px-4 pb-4 w-full animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </header>
  );
};

export default Header;