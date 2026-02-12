import React from 'react';
import { IMAGES, SQUAD_DATA } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { Player } from '../types';

interface PlayerProfileProps {
  playerId: number | string;
  onBack: () => void;
}

const PlayerProfileScreen: React.FC<PlayerProfileProps> = ({ playerId, onBack }) => {
  const [activeTab, setActiveTab] = React.useState<'OVERVIEW' | 'ANALYSIS' | 'BIO'>('OVERVIEW');
  const player = SQUAD_DATA.find(p => p.id === playerId) || SQUAD_DATA[0];
  const nameParts = player.name.split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts[nameParts.length - 1].toUpperCase();

  const isStaff = player.squadType === 'Staff';
  const tabs = isStaff ? ['OVERVIEW', 'BIO'] : ['OVERVIEW', 'ANALYSIS', 'BIO'];

  const getCoachQuote = (p: Player) => {
    if (p.name.includes('Lauren James')) return "She has the ability to change a game in a split second. A generational talent.";
    if (p.name.includes('Kerr')) return "A born winner. When the team needs a goal, Sam is always there.";
    if (p.name.includes('Bright')) return "The definition of a leader. She puts her body on the line every single match.";
    if (p.position === 'Goalkeeper') return "Her presence in goal gives the whole team confidence to play forward.";
    if (p.position === 'Defender') return "Solid, dependable, and intelligent in her reading of the game.";
    if (p.position === 'Midfielder') return "She controls the tempo perfectly and connects our play effortlessly.";
    return "An integral part of our squad with a fantastic attitude in training.";
  };

  const getTraits = (p: Player) => {
    const traits = [];
    if (p.name.includes('Lauren James')) return ['Technical Dribbler', 'Power Shot', 'Playmaker'];
    if (p.stats && p.stats.pace > 85) traits.push('Speedster');
    if (p.stats && p.stats.physical > 85) traits.push('Strength');
    if (p.stats && p.stats.shooting > 85) traits.push('Finisher');
    if (p.stats && p.stats.passing > 85) traits.push('Vision');
    if (p.stats && p.stats.dribbling > 85) traits.push('Flair');
    if (p.stats && p.stats.defending > 85) traits.push('Interceptor');

    if (traits.length === 0) {
      if (p.position === 'Forward') return ['Poacher', 'Speed Dribbler'];
      if (p.position === 'Midfielder') return ['Box-to-Box', 'Playmaker'];
      if (p.position === 'Defender') return ['Aerial Threat', 'Tackler'];
      return ['Reflexes', 'Distribution'];
    }
    return traits.slice(0, 3);
  };

  const getHeatmapColor = (p: Player) => {
    if (p.position === 'Forward') return 'from-red-500/40 to-transparent';
    if (p.position === 'Defender') return 'from-blue-500/40 to-transparent';
    if (p.position === 'Goalkeeper') return 'from-yellow-500/40 to-transparent';
    return 'from-green-500/40 to-transparent';
  };

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
        <div className="relative h-[520px] w-full overflow-hidden -mx-4 w-[calc(100%+2rem)] pt-[15px]">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue via-chelsea-blue/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white border border-white/10">{player.position}</span>
                  <div className="flex items-center gap-1 text-blue-400">
                    <span className="material-symbols-outlined text-base fill-1">verified</span>
                  </div>
                </div>
                <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight text-white uppercase italic">
                  {firstName}<br /><span className="text-white/40">{lastName}</span>
                </h2>
              </div>
              <div className="text-right">
                <span className="text-8xl font-black text-white/5 leading-none">{player.number}</span>
              </div>
            </div>

            {/* Tabs Selector */}
            <div className="flex gap-6 mb-2 border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`pb-3 text-[10px] font-bold uppercase tracking-widest relative transition-all ${activeTab === tab ? 'text-white' : 'text-white/40'}`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-12 pb-24">
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-10 animate-fade-in">
              {/* Stats Grid */}
              {player.stats && (
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Apps', value: player.stats.appearances },
                    { label: 'Goals', value: player.stats.goals },
                    { label: 'Assists', value: player.stats.assists }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 shadow-lg">
                      <span className="text-3xl font-black text-white">{stat.value}</span>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold mt-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Performance Stats */}
              {player.stats && (
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-1">Technical Ability</h3>
                  <div className="space-y-5 bg-white/5 rounded-3xl p-6 border border-white/10">
                    <StatBar label="Pace" value={player.stats.pace} delay={100} />
                    <StatBar label="Shooting" value={player.stats.shooting} delay={200} />
                    <StatBar label="Passing" value={player.stats.passing} delay={300} />
                    <StatBar label="Dribbling" value={player.stats.dribbling} delay={400} />
                    <StatBar label="Defending" value={player.stats.defending} delay={500} />
                    <StatBar label="Physical" value={player.stats.physical} delay={600} />
                  </div>
                </div>
              )}

              {/* AI Chat Card (Integrated into Overview) */}
              <section className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden shadow-md bg-chelsea-blue">
                      <img src={player.image} alt={player.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-chelsea-blue flex items-center justify-center">
                      <span className="material-symbols-outlined text-[12px] text-chelsea-blue">bolt</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-none mb-1 text-white uppercase italic">Talk to {player.name.split(' ')[0]}</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest">AI Profile Synchronized</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6 relative z-10">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 shadow-sm">
                    <p className="text-sm text-white/90 leading-relaxed italic">
                      "Ask me anything about my journey at Chelsea or my matchday routine!"
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <input
                    type="text"
                    placeholder={`Type your message...`}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 pr-14 text-sm text-white focus:ring-1 focus:ring-white/30 outline-none transition-all placeholder:text-white/20"
                  />
                  <button className="absolute right-2 top-2 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-chelsea-blue text-xl">send</span>
                  </button>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'ANALYSIS' && !isStaff && (
            <div className="space-y-10 animate-fade-in">
              {/* Heatmap */}
              <section className="space-y-4 text-center">
                <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-1">Heatmap Analysis</h3>
                <div className="h-64 bg-white/5 rounded-3xl relative overflow-hidden border border-white/10 flex items-center justify-center p-4">
                  {/* Pitch visual */}
                  <div className="absolute inset-4 border border-white/10 rounded-sm"></div>
                  <div className="absolute top-1/2 w-[calc(100%-2rem)] border-t border-white/5"></div>
                  <div className="absolute left-1/2 h-[calc(100%-2rem)] border-l border-white/5"></div>
                  <div className="absolute w-24 h-24 border border-white/10 rounded-full"></div>

                  {/* Heat Blob */}
                  <div className={`absolute inset-0 opacity-40 blur-3xl bg-gradient-to-t ${getHeatmapColor(player)}`}></div>

                  <div className="z-10 text-center">
                    <span className="material-symbols-outlined text-white/20 text-6xl">insights</span>
                    <p className="text-[10px] font-bold text-white/40 uppercase mt-2">Season 24/25 • High Intensity</p>
                  </div>
                </div>
              </section>

              {/* Coach Quote */}
              <section className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative">
                <span className="material-symbols-outlined absolute top-6 left-6 text-white/5 text-6xl rotate-180">format_quote</span>
                <p className="text-white/90 text-sm font-medium leading-relaxed italic relative z-10 mb-6">
                  "{getCoachQuote(player)}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden ring-2 ring-white/5">
                    <img src="https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Sonia_Bompastor_profile_2025-26_avatar-removebg.png" className="w-full h-full object-cover" alt="Coach" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Sonia Bompastor</h4>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Head Coach</p>
                  </div>
                </div>
              </section>

              {/* Traits */}
              <section className="space-y-4 px-1">
                <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Core Attributes</h3>
                <div className="flex flex-wrap gap-2">
                  {getTraits(player).map(trait => (
                    <span key={trait} className="bg-white/10 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">
                      {trait}
                    </span>
                  ))}
                  <span className="bg-yellow-500/10 text-yellow-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-yellow-500/20">
                    World Class
                  </span>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'BIO' && (
            <div className="space-y-10 animate-fade-in px-1">
              <section>
                <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4">{isStaff ? 'CAREER' : 'BIOGRAPHY'}</h3>
                <p className="text-white/80 leading-relaxed text-sm bg-white/5 p-6 rounded-3xl border border-white/10">
                  {player.bio}
                </p>
              </section>

              <section>
                <h3 className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">emoji_events</span> Recent Honours
                </h3>
                <div className="space-y-3">
                  {['Champions League Finalist 23/24', 'WSL Champion 22/23'].map(honor => (
                    <div key={honor} className="bg-white/5 p-4 rounded-2xl flex items-center justify-between border border-white/5">
                      <span className="text-xs text-white/90 font-medium">{honor}</span>
                      <span className="material-symbols-outlined text-yellow-500 text-lg">verified</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </PageLayout>
    </div>
  );
};

const StatBar: React.FC<{ label: string; value: number; delay: number }> = ({ label, value, delay }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const getColor = (val: number) => {
    if (val > 85) return 'bg-emerald-500';
    if (val > 70) return 'bg-yellow-500';
    return 'bg-white/20';
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
        <span className="text-white/40">{label}</span>
        <span className="text-white">{value}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,255,255,0.1)] ${getColor(value)}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PlayerProfileScreen;
