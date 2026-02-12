import React, { useState } from 'react';
import { IMAGES, CLUB_LOGOS, CHELSEA_LOGO } from '../constants';
import { Screen } from '../types';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

interface HomeScreenProps {
  onNavigate?: (screen: Screen, playerId?: number) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [predicted, setPredicted] = useState(false);

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
      <Header />
      <PageLayout className="space-y-[34px] pt-[90px]">
        {/* Hero Section - Chelsea Style */}
        <section className="relative aspect-video w-full overflow-hidden rounded-unified shadow-lg group cursor-pointer border border-chelsea-border">
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
        <section className="chelsea-card p-0 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full chelsea-gradient-blue"></div>
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold text-chelsea-text-gray tracking-widest uppercase">Next Fixture</span>
              <span className="text-[10px] font-bold text-chelsea-blue bg-blue-100 px-2 py-0.5 rounded border border-blue-200">WSL MD8</span>
            </div>
            <div className="flex items-center justify-between px-2 mb-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-white/10 shadow-lg p-2">
                  <img src={CHELSEA_LOGO} alt="Chelsea" className="w-full h-full object-contain" />
                </div>
                <span className="text-[12px] font-black uppercase text-chelsea-text-dark tracking-wide">CHE</span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-chelsea-text-dark italic tracking-tighter opacity-80">VS</div>
                <div className="text-[10px] text-chelsea-text-gray mt-1 font-medium bg-gray-100 px-2 py-1 rounded-full">24 OCT • 18:45</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-chelsea-border shadow-md p-2">
                  <img src={CLUB_LOGOS.ARSENAL} alt="Arsenal" className="w-full h-full object-contain" />
                </div>
                <span className="text-[12px] font-black uppercase text-chelsea-text-dark tracking-wide">ARS</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3.5 chelsea-btn-primary rounded-lg text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">confirmation_number</span>
                Buy Tickets
              </button>
              <button className="px-4 py-3.5 chelsea-btn-secondary rounded-lg text-sm">
                <span className="material-symbols-outlined">calendar_add_on</span>
              </button>
            </div>
          </div>
        </section>

        {/* Quick Links - Key Journeys */}
        <div className="grid grid-cols-2 gap-[26px]">
          <div className="chelsea-card p-4 flex flex-col justify-between h-32 group cursor-pointer hover:border-chelsea-blue/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">stadium</span>
            </div>
            <div>
              <h3 className="font-bold text-chelsea-text-dark text-sm">Matchday Guide</h3>
              <p className="text-[10px] text-chelsea-text-gray mt-1">Plan your visit</p>
            </div>
          </div>
          <div className="chelsea-card p-4 flex flex-col justify-between h-32 group cursor-pointer hover:border-chelsea-blue/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-pink-500/10 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">shopping_bag</span>
            </div>
            <div>
              <h3 className="font-bold text-chelsea-text-dark text-sm">Official Store</h3>
              <p className="text-[10px] text-chelsea-text-gray mt-1">New kits available</p>
            </div>
          </div>
        </div>

        {/* Matchday Treasure Hunt - Start game (demo: full user journey) */}
        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate(Screen.TREASURE_HUNT)}
            className="w-full min-h-[56px] flex items-center gap-4 p-4 rounded-unified bg-white border-2 border-amber-200 text-left hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400/50 shadow-sm"
            aria-label="Play Matchday Treasure Hunt game"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
              <span className="material-symbols-outlined text-2xl text-amber-600">military_tech</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-chelsea-text-dark text-base">Play Matchday Treasure Hunt</h3>
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-chelsea-blue border border-blue-200">Matchday</span>
              </div>
              <p className="text-[11px] text-chelsea-text-gray mt-1">Start the game — find the treasure, answer 3 questions, claim rewards</p>
            </div>
            <span className="material-symbols-outlined text-amber-600 shrink-0" aria-hidden>play_circle</span>
          </button>
        )}

        {/* Gamified Fan Zone - Data Capture */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Fan Zone
              <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase border border-emerald-200">Live</span>
            </h2>
          </div>

          <div className="chelsea-card p-0 relative overflow-hidden shadow-lg">
            <div className="px-5 py-4 border-b border-chelsea-border bg-gray-50 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-black text-chelsea-text-dark italic uppercase">Predict the Score</h3>
                <p className="text-[11px] text-chelsea-text-gray">Win a signed Kerr shirt!</p>
              </div>
              <span className="material-symbols-outlined text-chelsea-blue text-3xl">military_tech</span>
            </div>

            <div className="p-6">
              {!predicted ? (
                <>
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-chelsea-text-dark mb-2">CHE</span>
                      <input type="number" min="0" placeholder="-" className="w-16 h-16 bg-gray-50 border-2 border-chelsea-border rounded-xl text-center text-2xl font-bold text-chelsea-text-dark focus:border-chelsea-blue outline-none transition-colors" />
                    </div>
                    <span className="text-gray-400 font-bold text-xl">:</span>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-chelsea-text-dark mb-2">ARS</span>
                      <input type="number" min="0" placeholder="-" className="w-16 h-16 bg-gray-50 border-2 border-chelsea-border rounded-xl text-center text-2xl font-bold text-chelsea-text-dark focus:border-chelsea-blue outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter email to save prediction"
                      className="w-full bg-white border border-chelsea-border rounded-lg py-3 px-4 text-sm text-chelsea-text-dark placeholder:text-gray-400 focus:ring-1 focus:ring-chelsea-blue outline-none"
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
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h4 className="text-chelsea-text-dark font-bold text-lg">Prediction Saved!</h4>
                  <p className="text-chelsea-text-gray text-xs mt-1">Good luck! Winners announced Monday.</p>
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
              <div className="relative h-40 rounded-unified overflow-hidden border border-chelsea-border">
                <img
                  src={IMAGES.HIGHLIGHT_1}
                  alt="Highlight 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-white text-4xl shadow-lg drop-shadow-md">play_circle</span>
                </div>
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Goal</div>
              </div>
              <p className="text-sm font-bold line-clamp-2 text-white group-hover:text-blue-200 transition-colors leading-tight">Match Recap: The Screamer that sealed the WSL title</p>
            </div>
            <div className="flex-none w-64 space-y-2 group cursor-pointer">
              <div className="relative h-40 rounded-unified overflow-hidden border border-chelsea-border">
                <img
                  src={IMAGES.HIGHLIGHT_2}
                  alt="Highlight 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-white text-4xl shadow-lg drop-shadow-md">play_circle</span>
                </div>
                <div className="absolute top-2 left-2 bg-chelsea-blue text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Analysis</div>
              </div>
              <p className="text-sm font-bold line-clamp-2 text-white group-hover:text-blue-200 transition-colors leading-tight">Kerr's Movement: A Masterclass in positioning</p>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default HomeScreen;