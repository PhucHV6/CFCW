import React from 'react';
import { IMAGES } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

interface PlayerProfileProps {
  onBack: () => void;
}

const PlayerProfileScreen: React.FC<PlayerProfileProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <Header 
        title="Player Profile" 
        showBack 
        onBack={onBack} 
        variant="transparent" 
        rightIcon="share"
      />

      <PageLayout noPaddingTop>
        {/* Hero Section */}
        <div className="relative h-[480px] w-full overflow-hidden -mx-4 w-[calc(100%+2rem)]">
          <img 
            src={IMAGES.SAM_KERR} 
            alt="Sam Kerr" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chelsea-dark via-chelsea-dark/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-chelsea-blue px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg">Forward</span>
                  <div className="flex items-center gap-1 text-blue-400">
                    <span className="material-symbols-outlined text-base fill-1">verified</span>
                  </div>
                </div>
                <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight text-white">
                  SAM<br/><span className="text-chelsea-blue">KERR</span>
                </h2>
              </div>
              <div className="text-right">
                <span className="text-8xl font-black text-white/5 leading-none">20</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Goals', value: '12' },
                { label: 'Assists', value: '08' },
                { label: 'Apps', value: '15' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-3 flex flex-col items-center justify-center border border-white/10">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-12">
          {/* Highlights */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold tracking-tight text-white">Season Highlights</h3>
              <button className="text-chelsea-blue text-xs font-bold uppercase tracking-wider">View All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4">
              {[
                { img: IMAGES.HIGHLIGHT_1, title: 'Top Corner Screamer vs Arsenal' },
                { img: IMAGES.HIGHLIGHT_2, title: 'Match Winning Brace' }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-72 aspect-video rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10">
                  <img src={item.img} alt="Highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                      <span className="material-symbols-outlined text-white text-3xl fill-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs font-semibold text-white">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Chat Card */}
          <section className="bg-gradient-to-br from-[#1337ec]/20 to-transparent border border-chelsea-blue/30 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-chelsea-blue/20 rounded-full blur-[60px]"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-chelsea-blue overflow-hidden shadow-lg shadow-blue-500/20">
                  <img src={IMAGES.AI_AVATAR} alt="AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-chelsea-blue rounded-full border-2 border-chelsea-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-white">bolt</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none mb-1 text-white">Ask Sam</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">AI Agent Online</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6 relative z-10">
              <div className="bg-surface-dark/80 p-4 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm">
                <p className="text-sm text-gray-200 leading-relaxed">
                  Hey Blue! I'm here to chat about my career, goals, and life at Chelsea. What's on your mind?
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-chelsea-blue/50 text-[11px] font-medium text-gray-300 px-4 py-2 rounded-full transition-all">
                  "My pre-match meal?"
                </button>
                <button className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-chelsea-blue/50 text-[11px] font-medium text-gray-300 px-4 py-2 rounded-full transition-all">
                  "Advice for young stars?"
                </button>
              </div>
            </div>

            <div className="relative z-10">
              <input 
                type="text" 
                placeholder="Ask Sam anything..." 
                className="w-full bg-chelsea-dark/60 border border-white/10 rounded-xl py-4 px-5 pr-14 text-sm text-white focus:ring-2 focus:ring-chelsea-blue focus:border-transparent placeholder:text-gray-500 outline-none transition-all shadow-inner"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-chelsea-blue rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-white text-xl">send</span>
              </button>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h3 className="text-lg font-bold mb-8 tracking-tight text-white">Follow Her Journey</h3>
            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>
              
              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-chelsea-blue border-4 border-chelsea-dark shadow-[0_0_15px_rgba(3,70,148,0.5)] group-hover:scale-110 transition-transform"></div>
                <div>
                  <span className="text-[10px] font-bold text-chelsea-blue uppercase tracking-[0.2em]">November 2019</span>
                  <h4 className="font-bold text-base mt-1 text-white">Signs for the Blues</h4>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">The superstar forward joins in a landmark deal, instantly becoming a fan favorite.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-chelsea-blue border-4 border-chelsea-dark group-hover:scale-110 transition-transform"></div>
                <div>
                  <span className="text-[10px] font-bold text-chelsea-blue uppercase tracking-[0.2em]">May 2021</span>
                  <h4 className="font-bold text-base mt-1 text-white">Golden Boot Winner</h4>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">Secured her first top-scorer award, leading Chelsea to another WSL title.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-gray-700 border-4 border-chelsea-dark group-hover:scale-110 transition-transform"></div>
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Future</span>
                  <h4 className="font-bold text-base mt-1 text-white">The Legacy Continues</h4>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">Continuing to break records and inspire the next generation of football stars.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageLayout>
      
      {/* Like FAB */}
      <div className="fixed bottom-24 right-6 z-50">
        <button className="w-14 h-14 bg-chelsea-blue text-white rounded-full shadow-2xl shadow-blue-900/50 flex items-center justify-center transition-transform active:scale-90 hover:scale-105 border border-white/10">
          <span className="material-symbols-outlined text-2xl fill-1">favorite</span>
        </button>
      </div>
    </div>
  );
};

export default PlayerProfileScreen;