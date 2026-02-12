import React from 'react';
import { Icons } from './Icons';

const TicketFloatingAction: React.FC = () => {
    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-40 animate-in slide-in-from-bottom-4 duration-500">

            {/* Badge - Absolute positioned above the main container */}
            <div className="absolute -top-3 left-4 z-10">
                <div className="bg-[#0A1A3F] border border-[#DBA111] px-3 py-1 rounded-full shadow-lg flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#DBA111] rounded-full animate-pulse" />
                    <span className="text-white text-[9px] font-black uppercase tracking-widest">Selling Fast</span>
                </div>
            </div>

            {/* Main Container */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl ring-1 ring-black/5 flex items-center gap-2">

                {/* Buy Button */}
                <button className="flex-1 bg-[#034694] hover:bg-[#023675] text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-[0.98] group">
                    <Icons.Ticket className="w-5 h-5 text-[#DBA111] group-hover:rotate-12 transition-transform" />
                    <span className="font-black text-sm uppercase tracking-wide">Buy Tickets</span>
                </button>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                    <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 text-[#034694] transition-colors active:scale-95">
                        <span className="material-symbols-outlined font-bold">credit_card</span>
                    </button>
                    <button className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 text-[#034694] transition-colors active:scale-95">
                        <span className="material-symbols-outlined font-bold">shopping_bag</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketFloatingAction;
