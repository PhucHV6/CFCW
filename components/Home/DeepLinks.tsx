
import React from 'react';
import { Icons } from './Icons';
import { Screen } from '../../types';

const DeepLinks: React.FC<{ onNavigate?: (screen: Screen) => void }> = ({ onNavigate }) => {
    const links = [
        { label: 'Player and Profiles', icon: <Icons.Users className="w-5 h-5" />, screen: Screen.ROSTER },
        { label: 'Matchday Guide', icon: <Icons.Calendar className="w-5 h-5" />, screen: Screen.MATCHDAY },
        { label: 'Shop Women', icon: <Icons.ShoppingBag className="w-5 h-5" /> },
    ];

    return (
        <section className="px-4 pb-16 bg-white">
            <div className="grid grid-cols-1 gap-3">
                {links.map((link, idx) => (
                    <button
                        key={idx}
                        onClick={() => link.screen && onNavigate && onNavigate(link.screen)}
                        className="flex items-center bg-white h-16 px-4 rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:bg-slate-50 transition-colors"
                    >
                        <div className="w-10 h-10 bg-[#F2F6FF] rounded-lg flex items-center justify-center text-[#034694]">
                            {link.icon}
                        </div>
                        <span className="ml-4 text-[13px] font-black text-slate-900 tracking-tight uppercase">{link.label}</span>
                        <div className="ml-auto">
                            <Icons.ChevronRight className="w-4 h-4 text-slate-300" />
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default DeepLinks;
