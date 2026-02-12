import React, { useState } from 'react';
import { IMAGES, STORIES_DATA } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const HomeScreen: React.FC = () => {
  const [predicted, setPredicted] = useState(false);

  return (
    <>
      <Header logoMode />
      
      <PageLayout className="space-y-8">
        {/* Stories Rail - Key Features: Interaction Idea */}
        <section className="overflow-x-auto hide-scrollbar -mx-4 px-4 pt-2">
          <div className="flex gap-4">
            {STORIES_DATA.map((story) => (
              <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer group">
                <div className={`w-[68px] h-[68px] rounded-full p-[2px] ${story.seen ? 'bg-white/10' : 'bg-gradient-to-tr from-chelsea-blue to-blue-400'}`}>
                  <div className="w-full h-full rounded-full border-2 border-chelsea-dark overflow-hidden">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <span className="text-[10px] font-medium text-white">{story.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Video - Key Features: Big moments */}
        <section className="relative aspect-video w-full overflow-hidden rounded-unified shadow-2xl group cursor-pointer border border-white/5">
          <img 
            src={IMAGES.HOME_HERO} 
            alt="Featured" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue/90 via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(3,70,148,0.5)] group-hover:scale-110 transition-transform border border-white/20">
              <span className="material-symbols-outlined text-white text-4xl fill-1">play_arrow</span>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-chelsea-blue px-2 py-0.5 rounded">Exclusive</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-none italic uppercase drop-shadow-lg">The Derby Win: Unseen Angles</h2>
          </div>
        </section>

        {/* Upcoming Match Ticket Journey - Discovery & Tickets */}
        <section className="bg-surface-dark rounded-unified p-0 border border-white/5 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-chelsea-blue"></div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Next Fixture</span>
                <span className="text-[10px] font-bold text-chelsea-blue bg-blue-900/30 px-2 py-0.5 rounded border border-blue-800">WSL MD8</span>
            </div>
            <div className="flex items-center justify-between px-2 mb-6">
                <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-gradient-to-br from-chelsea-blue to-blue-900 rounded-full flex items-center justify-center border-2 border-white/10 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">shield</span>
                </div>
                <span className="text-[12px] font-black uppercase text-white tracking-wide">CHE</span>
                </div>
                <div className="text-center">
                <div className="text-3xl font-black text-white italic tracking-tighter opacity-80">VS</div>
                <div className="text-[10px] text-gray-400 mt-1 font-medium bg-white/5 px-2 py-1 rounded-full">24 OCT • 18:45</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-surface-dark rounded-full flex items-center justify-center border-2 border-white/10 shadow-lg">
                    <span className="material-symbols-outlined text-red-500 text-2xl">shield</span>
                </div>
                <span className="text-[12px] font-black uppercase text-white tracking-wide">ARS</span>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex-1 py-3.5 bg-chelsea-blue hover:bg-blue-600 text-white font-bold rounded-lg text-sm transition-colors shadow-lg flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">confirmation_number</span>
                    Buy Tickets
                </button>
                <button className="px-4 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg text-sm transition-colors border border-white/10">
                    <span className="material-symbols-outlined">calendar_add_on</span>
                </button>
            </div>
          </div>
        </section>

        {/* Quick Links - Key Journeys */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark p-4 rounded-unified border border-white/5 flex flex-col justify-between h-32 group cursor-pointer hover:border-chelsea-blue/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined">stadium</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Matchday Guide</h3>
              <p className="text-[10px] text-gray-500 mt-1">Plan your visit</p>
            </div>
          </div>
          <div className="bg-surface-dark p-4 rounded-unified border border-white/5 flex flex-col justify-between h-32 group cursor-pointer hover:border-chelsea-blue/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Official Store</h3>
              <p className="text-[10px] text-gray-500 mt-1">New kits available</p>
            </div>
          </div>
        </div>

        {/* Gamified Fan Zone - Data Capture */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Fan Zone
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase border border-emerald-500/20">Live</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a1a1d] to-[#121212] rounded-unified p-0 relative overflow-hidden shadow-xl border border-white/10">
            <div className="px-5 py-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-black text-white italic uppercase">Predict the Score</h3>
                    <p className="text-[11px] text-gray-400">Win a signed Kerr shirt!</p>
                </div>
                <span className="material-symbols-outlined text-chelsea-blue text-3xl">military_tech</span>
            </div>

            <div className="p-6">
                {!predicted ? (
                    <>
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white mb-2">CHE</span>
                                <input type="number" min="0" placeholder="-" className="w-16 h-16 bg-black/50 border-2 border-white/10 rounded-xl text-center text-2xl font-bold text-white focus:border-chelsea-blue outline-none transition-colors" />
                            </div>
                            <span className="text-gray-600 font-bold text-xl">:</span>
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-white mb-2">ARS</span>
                                <input type="number" min="0" placeholder="-" className="w-16 h-16 bg-black/50 border-2 border-white/10 rounded-xl text-center text-2xl font-bold text-white focus:border-chelsea-blue outline-none transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <input 
                                type="email" 
                                placeholder="Enter email to save prediction" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white placeholder:text-gray-500 focus:ring-1 focus:ring-chelsea-blue outline-none"
                            />
                            <button 
                                onClick={() => setPredicted(true)}
                                className="w-full bg-chelsea-blue hover:bg-blue-600 text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
                            >
                                Submit Prediction
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-6 animate-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/20">
                            <span className="material-symbols-outlined text-3xl">check</span>
                        </div>
                        <h4 className="text-white font-bold text-lg">Prediction Saved!</h4>
                        <p className="text-gray-400 text-xs mt-1">Good luck! Winners announced Monday.</p>
                    </div>
                )}
            </div>
          </div>
        </section>

        {/* Trending Moments */}
        <section className="space-y-3">
             <h2 className="text-lg font-bold text-white">Trending Moments</h2>
             <div className="flex overflow-x-auto gap-4 hide-scrollbar -mx-4 px-4 pb-4">
            <div className="flex-none w-64 space-y-2 group cursor-pointer">
              <div className="relative h-40 rounded-unified overflow-hidden border border-white/10">
                <img 
                  src={IMAGES.HIGHLIGHT_1} 
                  alt="Highlight 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-white text-4xl shadow-lg drop-shadow-md">play_circle</span>
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Goal</div>
              </div>
              <p className="text-sm font-bold line-clamp-2 text-white group-hover:text-chelsea-blue transition-colors leading-tight">Match Recap: The Screamer that sealed the WSL title</p>
            </div>
            <div className="flex-none w-64 space-y-2 group cursor-pointer">
              <div className="relative h-40 rounded-unified overflow-hidden border border-white/10">
                <img 
                  src={IMAGES.HIGHLIGHT_2} 
                  alt="Highlight 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-white text-4xl shadow-lg drop-shadow-md">play_circle</span>
                </div>
                <div className="absolute top-2 left-2 bg-chelsea-blue text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Analysis</div>
              </div>
              <p className="text-sm font-bold line-clamp-2 text-white group-hover:text-chelsea-blue transition-colors leading-tight">Kerr's Movement: A Masterclass in positioning</p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HomeScreen;