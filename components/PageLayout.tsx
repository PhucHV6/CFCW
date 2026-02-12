import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  noPaddingTop?: boolean; // For transparent headers where content goes behind
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  noPaddingTop = false,
  className = ""
}) => {
  return (
    <div className={`flex-1 min-h-0 overflow-y-auto overflow-x-hidden hide-scrollbar bg-chelsea-dark text-white pb-[max(7rem,calc(5rem+env(safe-area-inset-bottom)))] ${noPaddingTop ? 'pt-0' : 'pt-20'} ${className} animate-in fade-in duration-500`}>
      <main className="mx-auto w-full px-4 max-w-[428px]">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;