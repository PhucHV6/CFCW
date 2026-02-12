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
    <div className={`min-h-screen bg-chelsea-dark text-white pb-32 ${noPaddingTop ? 'pt-0' : 'pt-20'} ${className} animate-in fade-in duration-500`}>
      <main className="max-w-md mx-auto w-full px-4">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;