
import React from 'react';
import { IMAGES, CHELSEA_LOGO, CLUB_LOGOS } from '../../constants';
import { Icons } from './Icons';

type MatchStatus = 'LIVE' | 'NEXT' | 'FUTURE';

interface Team {
    name: string;
    short: string;
    logo: string | null;
}

interface Match {
    id: string;
    status: MatchStatus;
    marketingTag?: string; // e.g., "DERBY DAY", "SELLING FAST"
    ticketStatus?: 'sold_out' | 'low' | 'available';
    ticketPercentage?: number;
    competition: string;
    home: Team;
    away: Team;
    dateStr?: string;
    timeStr?: string;
    score?: string;
    minute?: string;
    broadcast?: string; // e.g., "Live on DAZN"
}

// Marketing-Driven Data
const MATCHES: Match[] = [
    {
        id: 'next-1',
        status: 'NEXT',
        marketingTag: 'LONDON DERBY',
        ticketStatus: 'low',
        ticketPercentage: 92,
        competition: 'WSL',
        home: { name: 'Chelsea', short: 'CFC', logo: CHELSEA_LOGO },
        away: { name: 'Arsenal', short: 'ARS', logo: CLUB_LOGOS.OPPONENT_LOGO },
        timeStr: '12:30',
        dateStr: 'Sat 24 Feb',
        broadcast: 'Sky Sports'
    },
    {
        id: 'live-1',
        status: 'LIVE',
        marketingTag: 'FLASH SALE: 20% OFF KITS',
        competition: 'FA Cup',
        home: { name: 'Chelsea', short: 'CFC', logo: CHELSEA_LOGO },
        away: { name: 'Brighton', short: 'BHA', logo: null },
        score: '2 - 1',
        minute: "74'",
    },
    {
        id: 'future-1',
        status: 'FUTURE',
        marketingTag: 'FAMILY DAY',
        ticketStatus: 'available',
        ticketPercentage: 45,
        competition: 'WSL',
        home: { name: 'Leicester', short: 'LEI', logo: null },
        away: { name: 'Chelsea', short: 'CFC', logo: CHELSEA_LOGO },
        timeStr: '14:00',
        dateStr: 'Sun 03 Mar'
    }
];

const TeamLogo = ({ team }: { team: Team }) => (
    <div className="w-10 h-10 bg-white rounded-full p-1 shadow-md flex items-center justify-center relative z-10">
        {team.logo ? (
            <img src={team.logo} alt={team.name} className="w-full h-full object-contain" />
        ) : (
            <span className="text-[#0A1A3F] font-black text-[9px]">{team.short}</span>
        )}
    </div>
);

const MarketingCard: React.FC<{ match: Match }> = ({ match }) => {
    const isLive = match.status === 'LIVE';
    const isNext = match.status === 'NEXT';

    return (
        <div className="flex-none w-[340px] snap-center">
            <div className={`rounded-2xl overflow-hidden relative min-h-[220px] flex flex-col justify-between p-1 transition-all hover:scale-[1.01] ${isNext ? 'bg-gradient-to-br from-[#DBA111] to-[#B48206]' : 'bg-[#0A1A3F]'}`}>

                {/* Inner Content Container */}
                <div className="bg-[#0A1A3F] rounded-xl h-full p-4 relative overflow-hidden flex flex-col">

                    {/* Background Texture */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-full blur-[60px] opacity-10 pointer-events-none" />

                    {/* Marketing Header */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className={`px-2 py-1 rounded-[4px] flex items-center space-x-1.5 ${isNext ? 'bg-[#DBA111] text-[#0A1A3F]' : 'bg-red-600 text-white'}`}>
                            {isLive && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                            {isNext && <Icons.Ticket className="w-3 h-3" />}
                            <span className="text-[9px] font-black uppercase tracking-wider">{match.marketingTag}</span>
                        </div>
                        {match.broadcast && (
                            <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{match.broadcast}</span>
                        )}
                    </div>

                    {/* Match Content */}
                    <div className="flex items-center justify-between px-2 mb-6 relative z-10">
                        <div className="text-center">
                            <TeamLogo team={match.home} />
                            <span className="text-white font-bold text-[11px] block mt-2 tracking-wide">{match.home.short}</span>
                        </div>

                        <div className="flex flex-col items-center">
                            {isLive ? (
                                <div className="flex flex-col items-center">
                                    <span className="text-[28px] font-black text-white leading-none tracking-tighter">{match.score}</span>
                                    <span className="text-red-500 font-bold text-[10px] animate-pulse">{match.minute}</span>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <span className="text-[24px] font-black text-white leading-none tracking-tighter">{match.timeStr}</span>
                                    <span className="text-white/40 font-bold text-[10px] uppercase">{match.dateStr}</span>
                                </div>
                            )}
                        </div>

                        <div className="text-center">
                            <TeamLogo team={match.away} />
                            <span className="text-white font-bold text-[11px] block mt-2 tracking-wide">{match.away.short}</span>
                        </div>
                    </div>

                    {/* Conversion Footer */}
                    <div className="mt-auto relative z-10">
                        {isNext ? (
                            <div className="space-y-2">
                                {/* Scarcity Bar */}
                                <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest mb-1">
                                    <span className="text-red-400">Selling Fast</span>
                                    <span className="text-white/40">{match.ticketPercentage}% Sold</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-3">
                                    <div className="h-full bg-gradient-to-r from-[#DBA111] to-red-500" style={{ width: `${match.ticketPercentage}%` }} />
                                </div>

                                <button className="w-full py-3 bg-[#DBA111] hover:bg-[#FCD34D] text-[#0A1A3F] rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center justify-center space-x-2 transition-colors active:scale-[0.98]">
                                    <Icons.Ticket className="w-3.5 h-3.5" />
                                    <span>Get Last Tickets</span>
                                </button>
                            </div>
                        ) : isLive ? (
                            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center justify-center space-x-2 transition-all">
                                <Icons.ShoppingBag className="w-3.5 h-3.5 text-[#DBA111]" />
                                <span>Shop Match Kit</span>
                            </button>
                        ) : (
                            <button className="w-full py-3 bg-transparent border border-white/20 text-white/60 hover:text-white hover:border-white/40 rounded-lg font-bold text-[11px] uppercase tracking-widest transition-colors">
                                Notify Me
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

const MatchCountdown: React.FC = () => {
    return (
        <section className="px-4 -mt-10 relative z-30 pb-6">
            <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-white text-[10px] font-black uppercase tracking-widest drop-shadow-md">Upcoming Fixtures</span>
                <button className="text-[#DBA111] text-[10px] font-black uppercase tracking-widest flex items-center">
                    Full Calendar <Icons.ArrowRight className="w-3 h-3 ml-1" />
                </button>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar space-x-3 pb-2">
                {MATCHES.map((match) => (
                    <MarketingCard key={match.id} match={match} />
                ))}

                {/* Upsell Card: Membership */}
                <div className="flex-none w-[140px] snap-center">
                    <div className="h-full min-h-[220px] bg-gradient-to-b from-[#034694] to-[#0A1A3F] rounded-2xl border border-white/10 p-4 flex flex-col items-center justify-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#DBA111]/20 flex items-center justify-center mb-3">
                            <Icons.Membership className="w-5 h-5 text-[#DBA111]" />
                        </div>
                        <h3 className="text-white font-black text-[14px] uppercase leading-tight mb-1">Official<br />Member</h3>
                        <p className="text-white/50 text-[9px] font-bold leading-tight mb-4">Priority access to tickets & exclusive events.</p>
                        <button className="text-white text-[10px] font-black uppercase tracking-wide underline decoration-[#DBA111] decoration-2 underline-offset-4">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MatchCountdown;
