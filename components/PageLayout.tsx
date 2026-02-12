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
    <div className={`flex-1 min-h-0 overflow-y-auto overflow-x-hidden hide-scrollbar bg-chelsea-blue text-white pb-[max(106px,calc(74px+env(safe-area-inset-bottom)))] ${noPaddingTop ? 'pt-0' : 'pt-0'} animate-in fade-in duration-500`}>
      <main className={`mx-auto w-full px-4 max-w-[393px] flex flex-col ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;