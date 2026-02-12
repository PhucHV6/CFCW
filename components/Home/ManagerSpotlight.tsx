
import React from 'react';
import { IMAGES } from '../../constants';
import { Icons } from './Icons';

const ManagerSpotlight: React.FC = () => {
    return (
        <section className="py-16 bg-[#034694] relative overflow-hidden">
            {/* Abstract Tactical Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeWidth="0.1" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.1" />
                    <circle cx="50" cy="50" r="15" stroke="white" fill="none" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="px-4 relative z-10">
                <div className="flex items-center space-x-2 mb-8">
                    <Icons.Whistle className="w-5 h-5 text-[#DBA111]" />
                    <span className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.3em]">The Gaffer</span>
                </div>

                <div className="flex flex-col space-y-8">
                    <div className="relative">
                        {/* Image container with custom crop */}
                        <div className="aspect-[4/5] w-[80%] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative">
                            <img
                                src={IMAGES.SONIA_BOMPASTOR}
                                alt="Head Coach"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#034694] via-transparent to-transparent" />
                        </div>

                        {/* Float Card: Coach's Notes */}
                        <div className="absolute bottom-4 right-0 w-[60%] bg-white rounded-2xl p-4 shadow-2xl border-t-4 border-[#DBA111] transform translate-y-8">
                            <span className="text-[#034694] text-[9px] font-black uppercase tracking-widest block mb-1">Coach's Quote</span>
                            <p className="text-[13px] font-bold text-slate-800 italic leading-snug">
                                "Winning is in the walls here. We don't just maintain the legacy, we evolve it."
                            </p>
                            <div className="mt-3 flex items-center space-x-2">
                                <div className="w-6 h-[1px] bg-slate-200" />
                                <span className="text-[10px] font-black text-[#034694] uppercase">Sonia Bompastor</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="text-[34px] font-black text-white uppercase leading-[0.85] tracking-tighter mb-4">
                            Tactical <br /><span className="text-[#DBA111]">Precision</span>
                        </h2>
                        <p className="text-white/70 text-[14px] font-medium leading-relaxed mb-6">
                            Leading the Blues into a new era of European dominance with a focus on fluid, attacking football and defensive solidity.
                        </p>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                <span className="block text-white font-black text-xl mb-0.5">78%</span>
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Win Rate</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                                <span className="block text-white font-black text-xl mb-0.5">3.2</span>
                                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Goals/Game</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManagerSpotlight;
