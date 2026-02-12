import React, { useState } from 'react';
import { IMAGES, SQUAD_DATA, COLORS } from '../../constants';
import { Icons } from './Icons';
import { Screen } from '../../types';

// Enhanced Player Card with Holographic Foil Effect
const InteractivePlayerCard = ({
    player,
    isActive,
    onClick,
    onProfileClick
}: {
    player: any;
    isActive: boolean;
    onClick: () => void;
    onProfileClick: () => void;
}) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={`flex-none w-[220px] relative transition-all duration-500 ${isActive ? 'scale-[1.05] z-20' : 'active:scale-[0.98] hover:scale-[1.02] z-10'}`}>
            <button
                onClick={onClick}
                className="w-full h-full relative"
            >
                <div className={`aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl relative group`}>
                    {!imgError ? (
                        <img
                            src={player.image}
                            alt={player.name}
                            className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'grayscale-[0.3] group-hover:grayscale-0'}`}
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="w-full h-full bg-[#0A1A3F] flex items-center justify-center">
                            <div className="text-center">
                                <Icons.Users className="w-12 h-12 text-[#DBA111] mx-auto mb-2 opacity-50" />
                                <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Image N/A</span>
                            </div>
                        </div>
                    )}

                    {/* HOLOGRAPHIC FOIL SHADER */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{
                            background: 'linear-gradient(115deg, transparent 20%, rgba(0, 240, 255, 0.6) 40%, rgba(219, 161, 17, 0.6) 60%, transparent 80%)',
                            backgroundSize: '200% 200%',
                            animation: 'holoSheen 3s infinite linear'
                        }}
                    />

                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#034694] via-transparent to-transparent transition-opacity duration-300 ${isActive ? 'opacity-95 from-[#034694] via-[#034694]/80' : 'opacity-80'}`} />

                    {/* Number Badge */}
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#DBA111] group-hover:text-[#0A1A3F] transition-colors">
                        <span className="text-[12px] font-black text-white group-hover:text-[#0A1A3F]">{player.number}</span>
                    </div>

                    {/* Active State: Stats Overlay */}
                    {isActive ? (
                        <div className="absolute inset-0 flex flex-col justify-end p-5 animate-fadeIn">
                            <div className="mb-auto mt-12 space-y-3">
                                <div className="flex justify-between items-end border-b border-white/20 pb-1">
                                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Position</span>
                                    <span className="text-white text-[14px] font-black uppercase">{player.position}</span>
                                </div>
                                <button
                                    onClick={(e) => { e.stopPropagation(); onProfileClick(); }}
                                    className="w-full py-2 bg-white text-[#034694] rounded-lg text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-blue-50 transition-colors"
                                >
                                    View Full Profile
                                </button>
                            </div>
                            <div>
                                <h4 className="text-[20px] font-black text-white leading-none uppercase tracking-tight mb-1">{player.name}</h4>
                                <div className="flex items-center space-x-2 text-[#DBA111]">
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Tap to close</span>
                                    <Icons.ChevronDown className="w-3 h-3 rotate-180" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Inactive State: Name & Pos */
                        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-1 transition-transform group-hover:translate-y-0">
                            <p className="text-[10px] text-[#DBA111] uppercase font-bold tracking-widest mb-1">{player.position}</p>
                            <h4 className="text-[18px] font-black text-white leading-none uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#DBA111] transition-all">
                                {player.name}
                            </h4>
                            <div className="mt-2 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all overflow-hidden">
                                <span className="text-[9px] text-white/60 uppercase tracking-widest font-bold">Tap for stats</span>
                            </div>
                        </div>
                    )}
                </div>
            </button>
            <style>{`
          @keyframes holoSheen {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
      `}</style>
        </div>
    );
};

const SquadEntry: React.FC<{ onNavigate?: (screen: Screen, id?: number) => void }> = ({ onNavigate }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);

    const filters = ['All', 'Defender', 'Midfielder', 'Forward'];

    const filteredPlayers = activeFilter === 'All'
        ? SQUAD_DATA
        : SQUAD_DATA.filter(p => p.position === activeFilter);

    return (
        <section className="py-12 bg-[#F8FAFC]">
            <div className="px-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-[#034694] text-[10px] font-black uppercase tracking-widest block mb-1">The Backbone</span>
                        <h2 className="text-[24px] font-black text-[#0A1A3F] uppercase tracking-tighter leading-none">
                            The Squad
                        </h2>
                    </div>
                    <div className="bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                        <span className="text-[11px] font-bold text-[#034694]">{filteredPlayers.length} <span className="text-slate-400">Stars</span></span>
                    </div>
                </div>

                {/* Filter Pills */}
                <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => { setActiveFilter(filter); setSelectedPlayerId(null); }}
                            className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all whitespace-nowrap border ${activeFilter === filter
                                ? 'bg-[#034694] text-white border-[#034694] shadow-lg shadow-blue-900/20'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-[#034694]/30'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex overflow-x-auto px-4 pb-12 space-x-4 scroll-smooth no-scrollbar snap-x items-start h-[400px]">
                {filteredPlayers.map((p) => (
                    <div key={p.id} className="snap-center animate-fadeIn">
                        <InteractivePlayerCard
                            player={p}
                            isActive={selectedPlayerId === p.id}
                            onClick={() => setSelectedPlayerId(selectedPlayerId === p.id ? null : p.id)}
                            onProfileClick={() => onNavigate && onNavigate(Screen.PROFILE, p.id)}
                        />
                    </div>
                ))}

                <div className="flex-none w-[140px] snap-center flex items-center h-[293px]">
                    <button
                        onClick={() => onNavigate && onNavigate(Screen.ROSTER)}
                        className="w-full h-full rounded-2xl border-2 border-dashed border-[#034694]/20 flex flex-col items-center justify-center group active:bg-blue-50 transition-colors bg-white/50"
                    >
                        <div className="w-12 h-12 rounded-full bg-white border border-[#034694]/10 flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                            <Icons.ChevronRight className="w-6 h-6 text-[#034694]" />
                        </div>
                        <span className="text-[12px] font-black text-[#034694] uppercase tracking-wide">Full Roster</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SquadEntry;
