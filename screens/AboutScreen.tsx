import React, { useState } from 'react';
import { IMAGES, CFCW_LINKS, CHELSEA_LOGO } from '../constants';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const AboutScreen: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const timelineData = [
    { year: '2015', title: 'First WSL Title', icon: 'emoji_events' },
    { year: '2021', title: 'Domestic Treble', icon: 'military_tech' },
    { year: '2023', title: 'Fourth Consecutive League Win', icon: 'star' },
    { year: '2024', title: 'New Era, European Ambition', icon: 'auto_awesome' },
  ];

  const trophies = [
    { label: 'WSL Titles', count: '8×' },
    { label: 'FA Cups', count: '6×' },
    { label: 'League Cups', count: '3×' },
    { label: 'Comm. Shield', count: '1×' },
  ];

  const songs = [
    { title: "Blue is the Colour", lyric: "Blue is the colour, football is the game..." },
    { title: "The Liquidator", lyric: "The Pride of London, we are the Blues..." },
    { title: "Chelsea, Chelsea, Chelsea", lyric: "Winning matches, scoring goals..." }
  ];

  const faqs = [
    { q: "Where can I buy tickets?", a: "Tickets can be purchased via our official website. We recommend booking in advance as matches often sell out." },
    { q: "Which stadiums do the team play at?", a: "The majority of matches are at Kingsmeadow, with high-profile games hosted at Stamford Bridge." },
    { q: "Are digital tickets available?", a: "Yes, all match tickets are issued digitally through the official Chelsea FC app." }
  ];

  const deepLinks = [
    { label: 'Player & Staff Profiles', icon: 'person', url: CFCW_LINKS.TEAM_PROFILES },
    { label: 'Matchday Guide', icon: 'stadium', url: CFCW_LINKS.MATCHDAY_GUIDE },
    { label: 'Shop Women\'s Kits', icon: 'shopping_bag', url: 'https://www.chelseafc.com/en/shop' },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
      <Header title="About CFCW" />
      <PageLayout className="space-y-[40px] pt-[74px] pb-10">
        {/* Section 1: Hero */}
        <section className="relative w-full h-[320px] overflow-hidden rounded-ios shadow-2xl border border-chelsea-border group">
          <img
            src={IMAGES.ABOUT_HERO_SOURCE}
            alt="Chelsea Women Celebration"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue via-chelsea-blue/20 to-transparent opacity-90" />

          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-white text-chelsea-blue text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm tracking-widest">Official</span>
            </div>
            <h1 className="text-white text-3xl font-black uppercase leading-[1.1] tracking-tighter mb-2 italic">
              The Pride of <br />London
            </h1>
            <p className="text-blue-100 text-[14px] font-medium leading-tight max-w-[280px] opacity-90">
              Discover the journey of the world’s most successful women’s football team.
            </p>
          </div>
        </section>

        {/* Section 2: Honours Grid */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2">Our Honours</h2>
            <div className="w-8 h-1 bg-white mx-auto rounded-full opacity-50" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {trophies.map((trophy, i) => (
              <div key={i} className="chelsea-card p-5 flex flex-col items-center text-center group hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-3xl text-chelsea-blue mb-2 fill-1">military_tech</span>
                <span className="text-2xl font-black text-chelsea-text-dark leading-none mb-1">{trophy.count}</span>
                <span className="text-[10px] font-black text-chelsea-text-gray uppercase tracking-tight">{trophy.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: History Timeline */}
        <section className="chelsea-card p-6">
          <h2 className="text-lg font-black text-chelsea-text-dark uppercase italic mb-6">Key Milestones</h2>
          <div className="space-y-6 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-chelsea-border" />
            {timelineData.map((item, i) => (
              <div key={i} className="flex gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white border border-chelsea-border flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-chelsea-blue text-xl">{item.icon}</span>
                </div>
                <div className="pt-1">
                  <span className="text-chelsea-blue font-black text-sm italic">{item.year}</span>
                  <h3 className="text-[15px] font-bold text-chelsea-text-dark leading-tight mt-0.5">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Stadiums */}
        <section>
          <h2 className="text-lg font-black text-white uppercase italic px-1 mb-4">Our Stadiums</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-48 rounded-ios overflow-hidden border border-chelsea-border shadow-lg group">
              <img src={IMAGES.STADIUM_KM} alt="Kingsmeadow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-black italic uppercase text-lg">Kingsmeadow</h3>
                  <p className="text-blue-100 text-xs font-medium">Primary Home Ground</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">near_me</span>
                </div>
              </div>
            </div>
            <div className="relative h-48 rounded-ios overflow-hidden border border-chelsea-border shadow-lg group">
              <img src={IMAGES.STADIUM_SB} alt="Stamford Bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-white font-black italic uppercase text-lg">Stamford Bridge</h3>
                  <p className="text-blue-100 text-xs font-medium">Major Match Venue</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">near_me</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Songbook */}
        <section className="chelsea-card p-6">
          <h2 className="text-lg font-black text-chelsea-text-dark uppercase italic mb-4">Club Songbook</h2>
          <div className="space-y-4">
            {songs.map((song, i) => (
              <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-chelsea-border hover:bg-gray-100 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-chelsea-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-1">music_note</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-bold text-chelsea-text-dark">{song.title}</h3>
                  <p className="text-[11px] text-chelsea-text-gray italic line-clamp-1">"{song.lyric}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section>
          <h2 className="text-lg font-black text-white uppercase italic px-1 mb-4">Fan Support</h2>
          <div className="chelsea-card divide-y divide-chelsea-border overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left active:bg-gray-50"
                >
                  <span className="text-sm font-bold text-chelsea-text-dark leading-tight pr-4">{faq.q}</span>
                  <span className={`material-symbols-outlined text-gray-400 transition-transform ${openFaqIdx === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaqIdx === i && (
                  <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1">
                    <p className="text-xs text-chelsea-text-gray leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Deep Links */}
        <section className="space-y-3 pb-6">
          <h2 className="text-xs font-bold text-blue-100 uppercase tracking-widest px-1">On chelseafc.com</h2>
          {deepLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white h-16 px-4 rounded-xl border border-chelsea-border shadow-sm active:scale-[0.98] transition-all hover:border-chelsea-blue"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-chelsea-blue">
                <span className="material-symbols-outlined">{link.icon}</span>
              </div>
              <span className="ml-4 text-sm font-black text-chelsea-text-dark tracking-tight uppercase italic">{link.label}</span>
              <span className="ml-auto material-symbols-outlined text-gray-300">open_in_new</span>
            </a>
          ))}
        </section>

        {/* Footer Note */}
        <section className="text-center pt-10 border-t border-white/10">
          <img src={CHELSEA_LOGO} alt="Logo" className="w-16 h-16 opacity-20 mx-auto mb-4" />
          <p className="text-[10px] text-blue-100/50 font-bold uppercase tracking-widest leading-loose">
            Official Chelsea FC Women's Hub<br />
            Established 1992 • The Pride of London
          </p>
        </section>
      </PageLayout>
    </div>
  );
};

export default AboutScreen;