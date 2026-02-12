import React from 'react';
import { CHELSEA_LOGO } from '../constants';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightIcon?: string;
  onRightAction?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'transparent';
  logoMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBack, 
  onBack, 
  rightIcon = "account_circle", 
  onRightAction,
  children,
  variant = 'default',
  logoMode = false
}) => {
  const baseClasses = "fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[428px] z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]";
  const styleClasses = variant === 'transparent' 
    ? "bg-transparent text-white" 
    : "bg-chelsea-dark/98 backdrop-blur-xl border-b border-white/10 text-white shadow-[0_2px_16px_rgba(0,0,0,0.15)]";

  return (
    <header className={`shrink-0 ${baseClasses} ${styleClasses}`}>
      <div className="h-14 min-h-[56px] px-4 flex items-center justify-between w-full">
        {/* Left Action (Back or Logo Icon) */}
        <div className="w-10 flex items-center justify-start">
          {showBack ? (
            <button 
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
            </button>
          ) : logoMode ? (
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg border border-white/20 overflow-hidden shrink-0">
              <img src={CHELSEA_LOGO} alt="Chelsea FC" className="w-full h-full object-contain p-1" />
            </div>
          ) : null}
        </div>

        {/* Center Title */}
        <div className="flex-1 flex items-center justify-center">
          {logoMode ? (
             <h1 className="text-base font-bold tracking-tight uppercase">
               <span className="text-chelsea-blue">Women</span>
               <span className="text-white/90">’s Hub</span>
             </h1>
          ) : (
            <h1 className="text-base font-bold tracking-wider uppercase text-center truncate px-2">
              {title}
            </h1>
          )}
        </div>

        {/* Right Action */}
        <div className="w-10 flex items-center justify-end">
          <button 
            onClick={onRightAction}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">{rightIcon}</span>
          </button>
        </div>
      </div>
      
      {/* Optional Bottom Content (Tabs, etc) */}
      {children && (
        <div className="px-4 pb-3 w-full animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </header>
  );
};

export default Header;