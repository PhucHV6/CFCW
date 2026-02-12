import React, { useState } from 'react';
import { IMAGES } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const MatchdayScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stamford' | 'kingsmeadow'>('stamford');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: 'Where do Chelsea Women play?', a: 'Home games are at Stamford Bridge and Kingsmeadow. Select a venue above for details.' },
    { q: 'How do I buy tickets?', a: 'Season Tickets, Bridge Pass, or Individual Match tickets — use the buttons above.' },
    { q: 'When are fixtures?', a: 'WSL and UEFA Women\'s Champions League dates are on the Next Match section below.' },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
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

      <PageLayout className="space-y-5 pt-32">
        {/* 1. Ticket CTAs – prominently above fold (fix: heatmap "not prominently positioned") */}
        <section className="space-y-2" aria-label="Get tickets">
          <h2 className="text-xs font-bold text-chelsea-blue uppercase tracking-wider px-1">Get tickets</h2>
          <div className="grid grid-cols-1 gap-2">
            <button className="min-h-[48px] w-full py-3.5 px-4 rounded-xl bg-chelsea-blue text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]">
              <span className="material-symbols-outlined text-lg">confirmation_number</span>
              Season Tickets
            </button>
            <button className="min-h-[48px] w-full py-3.5 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/15">
              <span className="material-symbols-outlined text-lg">badge</span>
              Bridge Pass
            </button>
            <button className="min-h-[48px] w-full py-3.5 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/15">
              <span className="material-symbols-outlined text-lg">event</span>
              Match Tickets
            </button>
          </div>
        </section>

        {/* 2. Where are the matches? – critical venue info, not buried in text (fix: heatmap "buried in body text") */}
        <section className="space-y-2" aria-label="Where are the matches">
          <h2 className="text-xs font-bold text-chelsea-blue uppercase tracking-wider px-1">Where are the matches?</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActiveTab('stamford')}
              className={`min-h-[56px] p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-0.5 transition-all ${activeTab === 'stamford' ? 'bg-chelsea-blue/20 border-chelsea-blue text-white' : 'bg-surface-dark border-white/10 text-gray-400 hover:border-white/20'}`}
            >
              <span className="material-symbols-outlined text-2xl">stadium</span>
              <span className="font-bold text-sm">Stamford Bridge</span>
              <span className="text-[10px] opacity-80">Main home venue</span>
            </button>
            <button
              onClick={() => setActiveTab('kingsmeadow')}
              className={`min-h-[56px] p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-0.5 transition-all ${activeTab === 'kingsmeadow' ? 'bg-chelsea-blue/20 border-chelsea-blue text-white' : 'bg-surface-dark border-white/10 text-gray-400 hover:border-white/20'}`}
            >
              <span className="material-symbols-outlined text-2xl">sports_soccer</span>
              <span className="font-bold text-sm">Kingsmeadow</span>
              <span className="text-[10px] opacity-80">Women's home</span>
            </button>
          </div>
        </section>

        {/* 3. Quick answers – FAQs above fold (fix: heatmap "FAQ below fold, likely missed") */}
        <section className="space-y-2" aria-label="Quick answers">
          <h2 className="text-xs font-bold text-chelsea-blue uppercase tracking-wider px-1">Quick answers</h2>
          <div className="bg-surface-dark rounded-xl border border-white/5 divide-y divide-white/5 overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-2 min-h-[48px]"
                >
                  <span className="font-medium text-white text-sm">{faq.q}</span>
                  <span className={`material-symbols-outlined text-gray-400 shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {faqOpen === i && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Next match + attending – logical flow after ticket/venue/FAQs */}
        <section className="bg-gradient-to-br from-chelsea-blue to-blue-900 rounded-ios p-5 shadow-lg border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-white mb-2">Next Match: Arsenal (H)</h2>
            {attending === null ? (
              <div>
                <p className="text-sm text-blue-100 mb-4">Are you heading to the stadium?</p>
                <div className="flex gap-3">
                  <button onClick={() => setAttending(true)} className="flex-1 bg-white text-chelsea-blue font-bold py-2.5 rounded-lg text-sm shadow-md active:scale-95 min-h-[44px]">Yes, I'm going</button>
                  <button onClick={() => setAttending(false)} className="flex-1 bg-black/20 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-black/30 min-h-[44px]">No, watching live</button>
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
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-colors border border-white/10 min-h-[48px]">
                    <span className="material-symbols-outlined text-2xl">wallet</span>
                    <span className="text-xs font-bold">Tickets</span>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-lg flex flex-col items-center gap-2 transition-colors border border-white/10 min-h-[48px]">
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
                  <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-xs font-bold min-h-[44px] border border-white/10">TV Guide</button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 py-2.5 rounded-lg text-xs font-bold min-h-[44px] border border-white/10">Live Blog</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Visitor Info */}
        <section className="bg-surface-dark rounded-ios p-6 border border-white/5">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider mb-2 text-chelsea-blue border border-chelsea-blue/20">Visitor Info</span>
          <h2 className="text-xl font-bold mb-1 text-white tracking-tight">New to the Bridge?</h2>
          <p className="text-gray-400 text-sm mb-5 leading-snug">Everything you need for your first visit.</p>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-bold min-h-[44px] active:scale-95">
            View Guide
          </button>
        </section>

        {/* Stadium Map */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-white">Stadium Map</h3>
            <span className="text-xs font-bold text-chelsea-blue flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live
            </span>
          </div>
          <div className="rounded-ios aspect-[16/10] relative overflow-hidden border border-white/10 shadow-lg">
            <img src={IMAGES.STADIUM_MAP} alt="Stadium Map" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-chelsea-blue text-white p-2 rounded-full shadow-lg animate-bounce">
                <span className="material-symbols-outlined text-lg block">location_on</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button className="bg-surface-dark/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 text-white border border-white/10 min-h-[44px]">Enlarge</button>
              <button className="bg-surface-dark/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5 text-white border border-white/10 min-h-[44px]">Locate</button>
            </div>
          </div>
        </section>

        {/* Getting There */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold px-1 text-white">Getting There</h3>
          <div className="bg-surface-dark rounded-ios border border-white/5 divide-y divide-white/5 overflow-hidden">
            <div className="p-4 flex items-center justify-between min-h-[56px] active:bg-white/5 cursor-pointer">
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
            <div className="p-4 flex items-center justify-between min-h-[56px] active:bg-white/5 cursor-pointer">
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
            <button className="text-xs font-bold text-chelsea-blue uppercase min-h-[44px]">See All</button>
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
                <div className="h-full bg-chelsea-blue w-1/3" />
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
                <div className="h-full bg-chelsea-blue w-0" />
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default MatchdayScreen;
