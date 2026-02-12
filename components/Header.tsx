import React from 'react';

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
  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const styleClasses = variant === 'transparent' 
    ? "bg-transparent text-white" 
    : "bg-chelsea-dark/95 backdrop-blur-md border-b border-white/5 text-white";

  return (
    <header className={`${baseClasses} ${styleClasses}`}>
      <div className="h-16 px-4 flex items-center justify-between max-w-md mx-auto w-full">
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
            <div className="w-8 h-8 rounded-full bg-chelsea-blue flex items-center justify-center shadow-lg shadow-blue-900/50">
              <span className="material-symbols-outlined text-white text-sm">sports_soccer</span>
            </div>
          ) : null}
        </div>

        {/* Center Title */}
        <div className="flex-1 flex items-center justify-center">
          {logoMode ? (
             <h1 className="text-lg font-bold tracking-tight uppercase italic">
               CFCW<span className="text-chelsea-blue">Hub</span>
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
        <div className="px-4 pb-3 max-w-md mx-auto w-full animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </header>
  );
};

export default Header;