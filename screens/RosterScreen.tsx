import React, { useState } from 'react';
import { IMAGES, SQUAD_DATA, STAFF_DATA } from '../constants';
import { Screen } from '../types';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

interface RosterScreenProps {
    onNavigate: (screen: Screen) => void;
}

const RosterScreen: React.FC<RosterScreenProps> = ({ onNavigate }) => {
    const [activeSquadType, setActiveSquadType] = useState<'Senior' | 'U21' | 'Loan' | 'Staff'>('Senior');
    const [positionFilter, setPositionFilter] = useState('All');
    const [showVideo, setShowVideo] = useState(false);

    const squadTypes: { label: string, value: 'Senior' | 'U21' | 'Loan' | 'Staff' }[] = [
        { label: 'Senior', value: 'Senior' },
        { label: 'U21s', value: 'U21' },
        { label: 'Loan', value: 'Loan' },
        { label: 'Staff', value: 'Staff' }
    ];

    const allPlayers = [...SQUAD_DATA, ...STAFF_DATA];

    // First filter by Squad Type
    const squadPlayers = allPlayers.filter(p => p.squadType === activeSquadType);

    // Then filter by Position
    const filteredPlayers = positionFilter === 'All'
        ? squadPlayers
        : squadPlayers.filter(p => p.position.includes(positionFilter));

    const getFlagCode = (country: string) => {
        const map: Record<string, string> = {
            'ENG': 'gb-eng', 'SUI': 'ch', 'CAN': 'ca', 'FRA': 'fr',
            'SCO': 'gb-sct', 'GER': 'de', 'NOR': 'no', 'WAL': 'gb-wls',
            'SWE': 'se', 'AUS': 'au', 'USA': 'us', 'COL': 'co', 'POL': 'pl'
        };
        return map[country] || 'gb-eng';
    };

    return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
            <Header title="Team Profiles" onNavigate={onNavigate}>
                <div className="grid grid-cols-4 w-full border-b border-white/10">
                    {squadTypes.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => {
                                setActiveSquadType(type.value);
                                setPositionFilter('All');
                            }}
                            className={`py-3 text-[10px] font-bold uppercase tracking-widest relative transition-colors ${activeSquadType === type.value ? 'text-white bg-white/5' : 'text-white/60 hover:text-white/80'}`}
                        >
                            {type.label}
                            {activeSquadType === type.value && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>}
                        </button>
                    ))}
                </div>
            </Header>

            <PageLayout className="pt-[124px]">
                <div className="space-y-[30px]">
                    {/* Spotlight Hero Section */}
                    {activeSquadType === 'Senior' && positionFilter === 'All' && (
                        <section className="relative -mx-4 px-8 py-10 bg-gradient-to-br from-[#034694] to-[#0A1A3F] overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-10 -mb-10 blur-2xl"></div>

                            <div className="relative z-10 flex flex-col items-start max-w-[200px]">
                                <span className="inline-block px-2 py-1 bg-[#DBA111] text-[#034694] text-[10px] font-black uppercase tracking-widest rounded-sm mb-4">
                                    Spotlight
                                </span>
                                <h2 className="text-white text-5xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6">
                                    Lauren<br />James
                                </h2>
                                <button
                                    onClick={() => setShowVideo(true)}
                                    className="flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-3 rounded-full hover:bg-white/20 transition-all active:scale-95"
                                >
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-[#034694] border-b-[4px] border-b-transparent ml-0.5"></div>
                                    </div>
                                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Watch Highlights</span>
                                </button>
                            </div>

                            {/* Ghost Icon / Player Decal */}
                            <div className="absolute top-8 right-8 text-white/10">
                                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                        </section>
                    )}
                    {/* Position Filter (Except for Staff) */}
                    {activeSquadType !== 'Staff' && (
                        <section aria-label="Position filter">
                            <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-3 px-1">Filter by Position</p>
                            <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-1 px-1 pb-1">
                                {['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'].map(pos => (
                                    <button
                                        key={pos}
                                        onClick={() => setPositionFilter(pos)}
                                        className={`min-h-[38px] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${positionFilter === pos ? 'bg-white text-chelsea-blue border-white shadow-lg' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                                    >
                                        {pos}
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}

                    <div className="grid grid-cols-2 gap-[20px] pb-10">
                        {filteredPlayers.length > 0 ? (
                            filteredPlayers.map((player) => (
                                <div
                                    key={player.id}
                                    onClick={() => onNavigate(Screen.PROFILE, player.id)}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm active:scale-95 transition-all group relative overflow-hidden"
                                >
                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <span className="font-black text-2xl text-white/20 group-hover:text-white transition-colors">
                                            {player.number || ""}
                                        </span>
                                        {player.country && (
                                            <div className="w-6 h-4 rounded-sm overflow-hidden border border-white/10">
                                                <img
                                                    src={`https://flagcdn.com/w80/${getFlagCode(player.country)}.png`}
                                                    alt={player.country}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative h-36 w-full mb-3">
                                        <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
                                        <img
                                            src={player.image}
                                            alt={player.name}
                                            className="w-full h-full object-cover object-top drop-shadow-2xl z-10 relative group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="text-center relative z-10">
                                        <h4 className="font-bold text-xs text-white uppercase tracking-tight">{player.name}</h4>
                                        <p className="text-[9px] text-white/40 font-bold uppercase mt-0.5 tracking-widest">{player.position}</p>
                                    </div>

                                    {/* Mini Stats for Players */}
                                    {player.stats && (
                                        <div className="mt-3 pt-3 border-t border-white/5 flex justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                            {[
                                                { label: 'PAC', val: player.stats.pace },
                                                { label: 'SHO', val: player.stats.shooting },
                                                { label: 'PAS', val: player.stats.passing }
                                            ].map(s => (
                                                <div key={s.label} className="flex flex-col items-center">
                                                    <span className="text-[7px] font-black text-white/30">{s.label}</span>
                                                    <span className="text-[9px] font-bold text-white">{s.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 py-20 text-center">
                                <p className="text-white/20 font-black uppercase tracking-widest text-sm">No players found</p>
                            </div>
                        )}
                    </div>
                </div>
            </PageLayout>

            {/* Video Player Overlay */}
            {showVideo && (
                <div className="absolute inset-0 z-[200] bg-black/95 flex flex-col animate-fadeIn">
                    <div className="p-6 flex justify-between items-center">
                        <div>
                            <p className="text-[#DBA111] text-[10px] font-black uppercase tracking-widest">Season 24/25</p>
                            <h3 className="text-white text-lg font-black uppercase tracking-tight">Lauren James Highlights</h3>
                        </div>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-grow flex items-center justify-center p-4">
                        <div className="w-full aspect-video bg-white/5 rounded-[32px] border border-white/10 overflow-hidden flex items-center justify-center relative group">
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-20 h-20 bg-[#DBA111] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(219,161,17,0.4)] group-hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#034694] border-b-[12px] border-b-transparent ml-2"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 text-white/40 text-[10px] font-bold uppercase tracking-widest text-center w-full">
                                Streaming High Definition • 1080p
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-white/20"></div>)}
                            </div>
                            <span className="text-white/40 text-[11px] font-bold">12.4k fans watching now</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Experience the magic of Lauren James. This reel features all her goals and world-class dribbles from the first half of the season.
                        </p>
                    </div>
                </div>
            )}

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default RosterScreen;
