import React from 'react';
import { IMAGES, SQUAD_DATA } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

interface PlayerProfileProps {
  playerId: number;
  onBack: () => void;
}

const PlayerProfileScreen: React.FC<PlayerProfileProps> = ({ playerId, onBack }) => {
  const player = SQUAD_DATA.find(p => p.id === playerId) || SQUAD_DATA[0];
  const nameParts = player.name.split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts[nameParts.length - 1].toUpperCase();

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
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
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue/90 via-chelsea-blue/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-chelsea-blue px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg">{player.position}</span>
                  <div className="flex items-center gap-1 text-blue-400">
                    <span className="material-symbols-outlined text-base fill-1">verified</span>
                  </div>
                </div>
                <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight text-white">
                  {firstName}<br /><span className="text-white/40">{lastName}</span>
                </h2>
              </div>
              <div className="text-right">
                <span className="text-8xl font-black text-white/5 leading-none">{player.number}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: player.position === 'Forward' ? 'Goals' : 'Inter.', value: player.position === 'Forward' ? (player.statLine?.split(' ')[0] || '12') : '25' },
                { label: 'Assists', value: player.position === 'Midfielder' ? (player.statLine?.split(' ')[0] || '08') : '04' },
                { label: 'Apps', value: '15' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-md rounded-2xl p-3 flex flex-col items-center justify-center border border-white/20">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-blue-100/80 font-bold">{stat.label}</span>
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
              <button className="text-white/60 text-xs font-bold uppercase tracking-wider">View All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-4 px-4">
              {[
                { img: IMAGES.HIGHLIGHT_1, title: `Top Class Performance vs Arsenal` },
                { img: IMAGES.HIGHLIGHT_2, title: 'Season Defining Moment' }
              ].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-72 aspect-video rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5">
                  <img src={item.img} alt="Highlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
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
          <section className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-sm backdrop-blur-sm">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-[60px]"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden shadow-md">
                  <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-chelsea-blue flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-chelsea-blue">bolt</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none mb-1 text-white">Ask {player.name.split(' ')[0]}</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">AI Agent Online</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6 relative z-10">
              <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/10 shadow-sm">
                <p className="text-sm text-white/90 leading-relaxed">
                  Hey Blue! I'm here to chat about my career, goals, and life at Chelsea. What's on your mind?
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="bg-white/10 border border-white/10 hover:bg-white/20 text-[11px] font-bold text-white/80 px-4 py-2 rounded-full transition-all shadow-sm">
                  "My pre-match meal?"
                </button>
                <button className="bg-white/10 border border-white/10 hover:bg-white/20 text-[11px] font-bold text-white/80 px-4 py-2 rounded-full transition-all shadow-sm">
                  "Advice for young stars?"
                </button>
              </div>
            </div>

            <div className="relative z-10">
              <input
                type="text"
                placeholder={`Ask ${player.name.split(' ')[0]} anything...`}
                className="w-full bg-white/10 border border-white/10 rounded-xl py-4 px-5 pr-14 text-sm text-white focus:ring-1 focus:ring-white/30 outline-none transition-all shadow-sm placeholder:text-white/30"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors">
                <span className="material-symbols-outlined text-chelsea-blue text-xl">send</span>
              </button>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h3 className="text-lg font-bold mb-8 tracking-tight text-white">Follow Her Journey</h3>
            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"></div>

              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-white border-4 border-chelsea-blue shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform"></div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Previous Club</span>
                  <h4 className="font-bold text-base mt-1 text-white">Growth & Development</h4>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">Starting her professional journey and showing immense potential early on.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-white border-4 border-chelsea-blue group-hover:scale-110 transition-transform shadow-sm"></div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Chelsea FC</span>
                  <h4 className="font-bold text-base mt-1 text-white">Signs for the Blues</h4>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">Joined the world's elite at Chelsea, making an immediate impact on the squad.</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-white/20 border-4 border-chelsea-blue group-hover:scale-110 transition-transform shadow-sm"></div>
                <div>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Future</span>
                  <h4 className="font-bold text-base mt-1 text-white">The Legacy Continues</h4>
                  <p className="text-sm text-white/20 mt-2 leading-relaxed">Continuing to break records and inspire the next generation of football stars.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </PageLayout>

      {/* Like FAB */}
      <div className="fixed bottom-24 right-6 z-50">
        <button className="w-14 h-14 bg-white text-chelsea-blue rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 hover:scale-105 border border-white/10">
          <span className="material-symbols-outlined text-2xl fill-1">favorite</span>
        </button>
      </div>
    </div>
  );
};

export default PlayerProfileScreen;