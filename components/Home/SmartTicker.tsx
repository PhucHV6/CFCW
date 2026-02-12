
import React from 'react';
import { Icons } from './Icons';

const SmartTicker: React.FC = () => {
    const items = [
        { type: 'ai', text: "AI PREDICTION: Win Probability rising (72%) after training analysis", color: "text-[#00F0FF]" },
        { type: 'sale', text: "TICKET ALERT: Only 42 seats remain in West Stand Lower", color: "text-red-400" },
        { type: 'stat', text: "TRENDING: Sam Kerr xG reaches 0.94 in warm-ups", color: "text-[#DBA111]" },
        { type: 'social', text: "COMMUNITY: 12,000 fans predict a 3-0 victory", color: "text-white" },
    ];

    return (
        <div className="bg-[#0A1A3F] border-b border-white/10 h-10 overflow-hidden relative flex items-center z-40">
            <div className="absolute left-0 top-0 bottom-0 bg-[#034694] px-3 z-10 flex items-center shadow-xl">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">The Pulse</span>
            </div>

            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center space-x-12 pl-32">
                {[...items, ...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                        {item.type === 'ai' && <Icons.Brain className="w-3 h-3 text-[#00F0FF]" />}
                        {item.type === 'sale' && <Icons.Ticket className="w-3 h-3 text-red-400" />}
                        {item.type === 'stat' && <Icons.Activity className="w-3 h-3 text-[#DBA111]" />}
                        <span className={`text-[10px] font-bold uppercase tracking-wide ${item.color}`}>
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0A1A3F] to-transparent z-10" />

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default SmartTicker;
