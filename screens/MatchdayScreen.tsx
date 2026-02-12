import React, { useState } from 'react';
import { IMAGES } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const MatchdayScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stamford' | 'kingsmeadow'>('stamford');
  const [attending, setAttending] = useState<boolean | null>(null);

  return (
    <>
      <Header title="Matchday Guide">
        <div className="bg-white/10 p-1 rounded-xl flex gap-1">
          <button 
            onClick={() => setActiveTab('stamford')}
            className={`flex-1 py-1.5 rounded-[10px] text-xs font-bold transition-all ${activeTab === 'stamford' ? 'bg-white text-chelsea-dark shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Stamford Bridge
          </button>
          <button 
            onClick={() => setActiveTab('kingsmeadow')}
            className={`flex-1 py-1.5 rounded-[10px] text-xs font-bold transition-all ${activeTab === 'kingsmeadow' ? 'bg-white text-chelsea-dark shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Kingsmeadow
          </button>
        </div>
      </Header>

      <PageLayout className="space-y-6 pt-32">
        
        {/* User Flow: Personalization decision */}
        <section className="bg-gradient-to-br from-chelsea-blue to-blue-900 rounded-ios p-5 shadow-lg border border-white/5 relative overflow-hidden">
             <div className="relative z-10">
                 <h2 className="text-xl font-bold text-white mb-2">Next Match: Arsenal (H)</h2>
                 {attending === null ? (
                     <div>
                         <p className="text-sm text-blue-100 mb-4">Are you heading to the stadium?</p>
                         <div className="flex gap-3">
                             <button onClick={() => setAttending(true)} className="flex-1 bg-white text-chelsea-blue font-bold py-2.5 rounded-lg text-sm shadow-md active:scale-95 transition-transform">Yes, I'm going</button>
                             <button onClick={() => setAttending(false)} className="flex-1 bg-black/20 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-black/30 transition-colors">No, watching live</button>
                         </div>
                     </div>
                 ) : attending ? (
                     <div className="animate-in fade-in slide-in-from-bottom-2">
                         <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-green-400">check_circle</span>
                            <p className="text-sm text-white font-medium">You're all set!</p>
                            <button onClick={() => setAttending(null)} className="ml-auto text-xs text-blue-200 underline">Change</button>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-colors border border-white/10">
                                <span className="material-symbols-outlined text-2xl">wallet</span>
                                <span className="text-xs font-bold">Tickets</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-colors border border-white/10">
                                <span className="material-symbols-outlined text-2xl">map</span>
                                <span className="text-xs font-bold">Seat View</span>
                            </button>
                         </div>
                     </div>
                 ) : (
                     <div className="animate-in fade-in slide-in-from-bottom-2">
                         <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-white">tv</span>
                            <p className="text-sm text-white font-medium">Follow the action live</p>
                            <button onClick={() => setAttending(null)} className="ml-auto text-xs text-blue-200 underline">Change</button>
                         </div>
                         <div className="flex gap-3">
                            <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-xs font-bold transition-colors border border-white/10">
                                TV Guide
                            </button>
                            <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-xs font-bold transition-colors border border-white/10">
                                Live Blog
                            </button>
                         </div>
                     </div>
                 )}
             </div>
        </section>

        {/* Visitor Info Card - Orientation */}
        <section className="bg-surface-dark rounded-ios p-6 text-white relative overflow-hidden shadow-lg border border-white/5">
          <div className="relative z-10 pr-10">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider mb-2 backdrop-blur-md text-chelsea-blue border border-chelsea-blue/20">Visitor Info</span>
            <h2 className="text-xl font-bold mb-1 tracking-tight">New to the Bridge?</h2>
            <p className="text-gray-400 text-sm mb-5 leading-snug">Everything you need for your first visit to our historic home.</p>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm active:scale-95 transition-all">
              View Guide
            </button>
          </div>
        </section>

        {/* Stadium Map */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-white">Stadium Map</h3>
            <span className="text-xs font-bold text-chelsea-blue flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Live Updates
            </span>
          </div>
          <div className="rounded-ios aspect-[16/10] relative overflow-hidden border border-white/10 shadow-lg">
            <img 
              src={IMAGES.STADIUM_MAP} 
              alt="Stadium Map" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Map Pin */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-chelsea-blue text-white p-2 rounded-full shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-lg block">location_on</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 flex gap-2">
              <button className="bg-surface-dark/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 text-white border border-white/10 hover:bg-surface-dark transition-colors">
                <span className="material-symbols-outlined text-sm">zoom_in</span>
                Enlarge
              </button>
              <button className="bg-surface-dark/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 text-white border border-white/10 hover:bg-surface-dark transition-colors">
                <span className="material-symbols-outlined text-sm text-chelsea-blue">near_me</span>
                Locate
              </button>
            </div>
          </div>
        </section>

        {/* Getting There */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold px-1 text-white">Getting There</h3>
          <div className="bg-surface-dark rounded-ios border border-white/5 divide-y divide-white/5 overflow-hidden">
            <div className="p-4 flex items-center justify-between active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">directions_subway</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-white">District Line</p>
                  <p className="text-xs text-gray-400">Fulham Broadway (2 mins walk)</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-500">chevron_right</span>
            </div>
            <div className="p-4 flex items-center justify-between active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">directions_bus</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-white">Bus Routes</p>
                  <p className="text-xs text-gray-400">14, 211, 414 & more</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-gray-500">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Chants */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-white">Learn the Chants</h3>
            <button className="text-xs font-bold text-chelsea-blue uppercase">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
            <div className="flex-shrink-0 w-64 bg-surface-dark rounded-ios p-4 border border-white/5">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-chelsea-blue text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
                  <span className="material-symbols-outlined fill-1">play_arrow</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-gray-500">Classic</span>
              </div>
              <p className="font-bold mb-1 text-white">Blue is the Colour</p>
              <p className="text-xs text-gray-400 italic mb-4">"Blue is the colour, football is the game..."</p>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-chelsea-blue w-1/3"></div>
              </div>
            </div>
            <div className="flex-shrink-0 w-64 bg-surface-dark rounded-ios p-4 border border-white/5">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <span className="material-symbols-outlined fill-1">play_arrow</span>
                </div>
                <span className="text-[10px] font-bold uppercase text-gray-500">Player</span>
              </div>
              <p className="font-bold mb-1 text-white">Super Sam Kerr</p>
              <p className="text-xs text-gray-400 italic mb-4">"The Australian striker we love so dear..."</p>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-chelsea-blue w-0"></div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default MatchdayScreen;