import React from 'react';
import { IMAGES, CFCW_LINKS } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const AboutScreen: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <Header title="About CFCW" />
      <PageLayout className="space-y-0">
        {/* Hero */}
        <section className="mb-10">
          <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 shadow-2xl border border-white/5 group">
            <img src={IMAGES.ABOUT_HERO} alt="Club Hero" className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-chelsea-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block px-2.5 py-1 rounded bg-chelsea-blue text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">Established 1992</span>
              <h2 className="text-3xl font-extrabold leading-tight text-white">Club History &<br/>Future</h2>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            Tracing the incredible journey of Chelsea FC Women from early formation to becoming global icons of the women's game.
          </p>
        </section>

        {/* History Timeline */}
        <section className="mb-10">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white">Honours & History</h3>
          </div>
          <div className="space-y-0 relative">
             {/* Timeline Line */}
             <div className="absolute left-[23px] top-6 bottom-10 w-px bg-chelsea-blue/30"></div>

            <div className="relative flex gap-6 pb-10 group">
              <div className="relative z-10 w-12 h-12 rounded-full border border-chelsea-blue bg-chelsea-dark flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(3,70,148,0.2)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-chelsea-blue">history_edu</span>
              </div>
              <div className="flex-1 pt-1">
                <span className="text-chelsea-blue font-bold text-sm tracking-wider uppercase">1992</span>
                <h4 className="text-[17px] font-bold mt-0.5 text-white">Club Foundation</h4>
                <p className="text-gray-500 text-sm mt-1">The beginning of a legacy in South West London.</p>
                <div className="mt-3 rounded-lg overflow-hidden h-24 border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={IMAGES.HISTORY_BW} alt="History" className="w-full h-full object-cover grayscale" />
                </div>
              </div>
            </div>

            <div className="relative flex gap-6 pb-10 group">
              <div className="relative z-10 w-12 h-12 rounded-full border border-chelsea-blue bg-chelsea-dark flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(3,70,148,0.2)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-chelsea-blue">emoji_events</span>
              </div>
              <div className="flex-1 pt-1">
                <span className="text-chelsea-blue font-bold text-sm tracking-wider uppercase">2015</span>
                <h4 className="text-[17px] font-bold mt-0.5 text-white">The First Double</h4>
                <p className="text-gray-500 text-sm mt-1">Winning the WSL and FA Cup in a historic season.</p>
              </div>
            </div>

            <div className="relative flex gap-6 group">
              <div className="relative z-10 w-12 h-12 rounded-full border border-chelsea-blue bg-chelsea-dark flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(3,70,148,0.2)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-chelsea-blue">military_tech</span>
              </div>
              <div className="flex-1 pt-1">
                <span className="text-chelsea-blue font-bold text-sm tracking-wider uppercase">2021</span>
                <h4 className="text-[17px] font-bold mt-0.5 text-white">The Quadruple</h4>
                <p className="text-gray-500 text-sm mt-1">Total domestic dominance and Champions League final.</p>
                <div className="mt-3 rounded-lg overflow-hidden h-24 border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={IMAGES.TROPHY} alt="Trophy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Songs */}
        <section className="mb-10">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Club Songs</h3>
            <p className="text-gray-500 text-[13px]">Anthems of the Shed End</p>
          </div>
          <div className="bg-surface-dark rounded-2xl border border-white/5 divide-y divide-white/5 overflow-hidden">
            {[
              { title: 'The Liquidator', subtitle: 'Matchday Kick-off Anthem', active: true },
              { title: 'Blue is the Colour', subtitle: 'Official Club Song', active: false },
              { title: 'CFC Pride', subtitle: 'Modern Supporters Chant', active: false }
            ].map((song, i) => (
              <div key={i} className={`p-4 flex items-center gap-4 ${song.active ? 'bg-white/5' : ''} hover:bg-white/5 transition-colors cursor-pointer`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${song.active ? 'bg-chelsea-blue/20 text-chelsea-blue' : 'bg-white/5 text-gray-500'}`}>
                  <span className={`material-symbols-outlined ${song.active ? 'fill-1' : ''}`}>play_arrow</span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-[15px] ${song.active ? 'text-chelsea-blue' : 'text-white'}`}>{song.title}</h4>
                  <p className="text-[12px] text-gray-500">{song.subtitle}</p>
                </div>
                <span className="material-symbols-outlined text-gray-600">more_vert</span>
              </div>
            ))}
          </div>
        </section>

        {/* Future */}
        <section className="mb-10">
          <h3 className="text-lg font-bold mb-4 text-white">The Future of CFCW</h3>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-chelsea-blue/10 to-transparent rounded-2xl border border-chelsea-blue/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-chelsea-blue">school</span>
                <h4 className="font-bold text-white">Academy Prospects</h4>
              </div>
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {[
                  { name: 'M. James', img: IMAGES.PLAYER_1, active: true },
                  { name: 'S. Smith', img: IMAGES.PLAYER_2, active: false },
                  { name: 'L. Brown', img: IMAGES.PLAYER_3, active: false },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center shrink-0">
                    <div className={`w-14 h-14 rounded-full border-2 p-0.5 mb-1 ${p.active ? 'border-chelsea-blue' : 'border-white/10'}`}>
                      <img src={p.img} alt="Player" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all" />
                    </div>
                    <span className={`text-[10px] font-medium ${p.active ? 'text-white' : 'text-gray-500'}`}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
              <img src={IMAGES.DEVELOPMENT} alt="Dev" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-chelsea-blue">architecture</span>
                  <h4 className="font-bold text-sm text-white">Project Blue Bridge</h4>
                </div>
                <p className="text-[11px] text-gray-400">Redevelopment Completion: 2027</p>
              </div>
            </div>
          </div>
        </section>

        {/* Membership CTA */}
        <section className="text-center mb-10">
          <h4 className="text-xl font-bold mb-3 italic uppercase tracking-tight text-white">The Blue Thread</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 px-4">
             Our history is written by those who believe. Our future is forged by those who dare.
          </p>
          <button className="w-full h-14 bg-chelsea-blue hover:bg-blue-700 text-white rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 transition-all border border-white/10 active:scale-95">
            BECOME A MEMBER
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </section>

        {/* Official chelseafc.com links */}
        <section className="pt-4 border-t border-white/10">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">On chelseafc.com</h3>
          <div className="space-y-2">
            <a href={CFCW_LINKS.MATCHDAY_GUIDE} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <span className="font-medium text-white text-sm">Women’s Matchday Guide</span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-chelsea-blue text-lg">open_in_new</span>
            </a>
            <a href={CFCW_LINKS.TEAM_PROFILES} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <span className="font-medium text-white text-sm">Player & Staff Profiles</span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-chelsea-blue text-lg">open_in_new</span>
            </a>
            <a href={CFCW_LINKS.ABOUT} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <span className="font-medium text-white text-sm">About Chelsea FC Women</span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-chelsea-blue text-lg">open_in_new</span>
            </a>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default AboutScreen;