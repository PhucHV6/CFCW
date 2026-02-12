
import React, { useState } from 'react';
import { Icons } from './Icons';

const DNAItem = ({ title, desc, icon, isOpen, onClick }: any) => (
    <button
        onClick={onClick}
        className={`w-full text-left transition-all duration-300 rounded-2xl border ${isOpen ? 'bg-[#034694] border-[#034694] shadow-lg shadow-blue-900/20' : 'bg-white border-slate-100 hover:border-blue-200'}`}
    >
        <div className="p-5">
            <div className="flex items-center justify-between mb-2">
                <div className={`flex items-center space-x-3 ${isOpen ? 'text-white' : 'text-[#034694]'}`}>
                    {icon}
                    <h3 className="text-[15px] font-black uppercase tracking-tight">{title}</h3>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isOpen ? 'border-white/30 bg-white/10' : 'border-slate-200 bg-slate-50'}`}>
                    <Icons.ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </div>
            </div>

            {isOpen && (
                <div className="mt-2 pl-8 border-l border-white/20 animate-fadeIn">
                    <p className="text-[13px] text-white/90 font-medium leading-relaxed">{desc}</p>
                </div>
            )}
        </div>
    </button>
);

const ClubDNA: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const values = [
        {
            title: "Winning Mentality",
            desc: "Success isn't an aspiration, it's our standard. Every match is a must-win, and every trophy is a stepping stone to the next.",
            icon: <Icons.Trophy className="w-5 h-5" />
        },
        {
            title: "Community First",
            desc: "We are more than a team; we are a family. We inspire the next generation of girls to dream big and play without fear.",
            icon: <Icons.Users className="w-5 h-5" />
        },
        {
            title: "Fearless Style",
            desc: "Aggressive, dynamic, and relentless. We play football that entertains the Bridge and dominates the opposition.",
            icon: <Icons.MapPin className="w-5 h-5" />
        }
    ];

    return (
        <section className="px-4 py-10 bg-white">
            <div className="mb-6">
                <span className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.2em] block mb-1">About Us</span>
                <h2 className="text-[24px] font-black text-[#0A1A3F] uppercase tracking-tighter leading-none">
                    The Chelsea DNA
                </h2>
            </div>

            <div className="space-y-3">
                {values.map((val, idx) => (
                    <DNAItem
                        key={idx}
                        {...val}
                        isOpen={openIndex === idx}
                        onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClubDNA;
