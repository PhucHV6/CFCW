import React, { useState } from 'react';
import { IMAGES, SQUAD_DATA, STAFF_DATA } from '../constants';
import { Screen } from '../types';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

interface RosterScreenProps {
    onNavigate: (screen: Screen) => void;
}

const RosterScreen: React.FC<RosterScreenProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<'squad' | 'staff'>('squad');
    const [positionFilter, setPositionFilter] = useState('All');

    const filteredSquad = positionFilter === 'All'
        ? SQUAD_DATA
        : SQUAD_DATA.filter(p => p.position.includes(positionFilter));

    return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-chelsea-blue">
            <Header title="Team Profiles">
                <div className="flex border-b border-white/10">
                    <button
                        onClick={() => setActiveTab('squad')}
                        className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'squad' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
                    >
                        Squad
                        {activeTab === 'squad' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>}
                    </button>
                    <button
                        onClick={() => setActiveTab('staff')}
                        className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'staff' ? 'text-white' : 'text-white/60 hover:text-white/80'}`}
                    >
                        Staff
                        {activeTab === 'staff' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>}
                    </button>
                </div>
            </Header>

            <PageLayout className="pt-[124px]">
                {activeTab === 'squad' ? (
                    <div className="space-y-[30px]">
                        {/* Quick jump by position */}
                        <section aria-label="Quick jump by position">
                            <p className="text-[10px] font-bold text-white uppercase tracking-wider mb-2 px-1">Quick jump</p>
                            <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-1 px-1 pb-1">
                                {['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'].map(pos => (
                                    <button
                                        key={pos}
                                        onClick={() => setPositionFilter(pos)}
                                        className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wide border transition-all whitespace-nowrap ${positionFilter === pos ? 'bg-chelsea-blue border-chelsea-blue text-white shadow-md' : 'bg-white border-chelsea-border text-chelsea-text-gray hover:border-chelsea-blue/30'}`}
                                    >
                                        {pos}
                                    </button>
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-2 gap-[26px]">
                            {/* Featured Player (All or Forward) */}
                            {(positionFilter === 'All' || positionFilter === 'Forward') && (
                                <div
                                    onClick={() => onNavigate(Screen.PROFILE, 1)}
                                    className="col-span-2 relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-chelsea-border shadow-lg"
                                >
                                    <img src={IMAGES.SAM_KERR} alt="Sam Kerr" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[10px] font-bold text-chelsea-blue bg-white px-2 py-0.5 rounded uppercase tracking-wider">Captain</span>
                                        <h3 className="text-3xl font-black text-white italic leading-none mt-1 uppercase">KERR <span className="text-lg not-italic align-top opacity-70">20</span></h3>
                                        <p className="text-sm text-white/90 mt-1 uppercase">12 goals · WSL 24/25</p>
                                    </div>
                                </div>
                            )}

                            {filteredSquad.filter(p => !p.isStar).map((player) => (
                                <div key={player.id} onClick={() => onNavigate(Screen.PROFILE, player.id)} className="chelsea-card overflow-hidden cursor-pointer hover:border-chelsea-blue/50 transition-colors group min-h-[44px]">
                                    <div className="h-48 relative overflow-hidden">
                                        <img src={player.image} alt={player.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 bg-chelsea-blue text-white text-sm font-bold px-2 py-1 rounded-tr-lg shadow-sm">
                                            {player.number}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h4 className="text-base font-bold text-chelsea-text-dark leading-tight">{player.name}</h4>
                                        <p className="text-xs text-chelsea-text-gray uppercase tracking-wider mt-0.5">{player.position}</p>
                                        {(player as { statLine?: string }).statLine && (
                                            <p className="text-[10px] text-chelsea-blue mt-1.5 font-bold uppercase">{(player as { statLine: string }).statLine}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-[10px] font-bold text-white uppercase tracking-wider px-1">Staff</p>
                        {STAFF_DATA.map((staff) => (
                            <div key={staff.id} className="flex items-center gap-4 chelsea-card p-4 min-h-[72px]">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-chelsea-border shrink-0 shadow-sm bg-white">
                                    <img src={staff.image} alt={staff.name} className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-lg font-bold text-chelsea-text-dark">{staff.name}</h4>
                                    <p className="text-chelsea-blue text-sm font-bold uppercase tracking-wider mt-0.5">{staff.role}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                            <span className="material-symbols-outlined text-chelsea-blue text-4xl mb-2">diversity_3</span>
                            <h4 className="text-chelsea-text-dark font-bold mb-1">Join the Team</h4>
                            <p className="text-xs text-chelsea-text-gray mb-4">View career opportunities at Chelsea FC Women.</p>
                            <button className="text-xs font-bold text-white bg-chelsea-blue px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md">View Careers</button>
                        </div>
                    </div>
                )}
            </PageLayout>
        </div>
    );
};

export default RosterScreen;