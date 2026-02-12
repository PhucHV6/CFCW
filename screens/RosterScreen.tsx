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
    <>
      <Header title="Team Profiles">
        <div className="flex border-b border-white/10">
           <button 
              onClick={() => setActiveTab('squad')}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'squad' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
               Squad
               {activeTab === 'squad' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-chelsea-blue shadow-[0_0_10px_#034694]"></div>}
           </button>
           <button 
              onClick={() => setActiveTab('staff')}
              className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider relative transition-colors ${activeTab === 'staff' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
               Staff
               {activeTab === 'staff' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-chelsea-blue shadow-[0_0_10px_#034694]"></div>}
           </button>
       </div>
      </Header>

      <PageLayout className="pt-32">
        {activeTab === 'squad' ? (
            <div className="space-y-6">
                {/* Filter Pills */}
                <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-2 px-2 pb-1">
                    {['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'].map(pos => (
                        <button 
                            key={pos}
                            onClick={() => setPositionFilter(pos)}
                            className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wide border transition-all whitespace-nowrap ${positionFilter === pos ? 'bg-chelsea-blue border-chelsea-blue text-white' : 'bg-transparent border-white/20 text-gray-400'}`}
                        >
                            {pos}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Featured Player (Only show if ALL or Forward is selected) */}
                    {(positionFilter === 'All' || positionFilter === 'Forward') && (
                        <div 
                        onClick={() => onNavigate(Screen.PROFILE)}
                        className="col-span-2 relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-white/10 shadow-2xl"
                        >
                            <img src={IMAGES.SAM_KERR} alt="Sam Kerr" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-chelsea-blue/90 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-[10px] font-bold text-white bg-white/20 px-2 py-0.5 rounded backdrop-blur-md uppercase tracking-wider">Captain</span>
                                <h3 className="text-3xl font-black text-white italic leading-none mt-1">KERR <span className="text-lg not-italic align-top opacity-50">20</span></h3>
                            </div>
                        </div>
                    )}

                    {filteredSquad.filter(p => !p.isStar).map((player) => (
                        <div key={player.id} className="bg-surface-dark rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:border-chelsea-blue/50 transition-colors group">
                            <div className="h-40 relative overflow-hidden">
                                <img src={player.image} alt={player.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 bg-chelsea-blue text-white text-xs font-bold px-2 py-1 rounded-tr-lg">
                                    {player.number}
                                </div>
                            </div>
                            <div className="p-3">
                                <h4 className="font-bold text-white leading-tight">{player.name}</h4>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{player.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="space-y-4">
                 {STAFF_DATA.map((staff) => (
                    <div key={staff.id} className="flex items-center gap-4 bg-surface-dark p-4 rounded-xl border border-white/5">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                            <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">{staff.name}</h4>
                            <p className="text-chelsea-blue text-xs font-bold uppercase tracking-widest">{staff.role}</p>
                        </div>
                    </div>
                 ))}
                 
                 <div className="mt-8 p-6 bg-gradient-to-br from-chelsea-blue/20 to-transparent rounded-2xl border border-chelsea-blue/20 text-center">
                    <span className="material-symbols-outlined text-chelsea-blue text-4xl mb-2">diversity_3</span>
                    <h4 className="text-white font-bold mb-1">Join the Team</h4>
                    <p className="text-xs text-gray-400 mb-4">View career opportunities at Chelsea FC Women.</p>
                    <button className="text-xs font-bold text-white bg-chelsea-blue px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">View Careers</button>
                 </div>
            </div>
        )}
      </PageLayout>
    </>
  );
};

export default RosterScreen;