
import React from 'react';
import { IMAGES } from '../../constants';
import { Icons } from './Icons';

const SocialCard = ({ img, caption, likes, handle, time }: any) => {
    const [error, setError] = React.useState(false);

    return (
        <div className="break-inside-avoid mb-3 bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] overflow-hidden border border-slate-100 group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                {!error ? (
                    <img
                        src={img}
                        alt="Social"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Icons.Instagram className="w-8 h-8" />
                    </div>
                )}
                <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-md rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icons.Instagram className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px] font-bold">{handle}</span>
                </div>
            </div>
            <div className="p-3">
                <div className="flex items-center space-x-1.5 mb-2">
                    <div className="w-5 h-5 rounded-full bg-slate-100 overflow-hidden">
                        {!error && <img src={img} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />}
                    </div>
                    <span className="text-[10px] font-bold text-[#0A1A3F]">{handle}</span>
                </div>
                <p className="text-[11px] font-medium text-slate-600 leading-tight mb-3 line-clamp-2">{caption}</p>
                <div className="flex items-center justify-between border-t border-slate-50 pt-2">
                    <div className="flex items-center space-x-1 text-red-500">
                        <Icons.Heart className="w-3 h-3 fill-current" />
                        <span className="text-[10px] font-bold text-slate-500">{likes}</span>
                    </div>
                    <span className="text-[9px] text-slate-300 font-bold uppercase">{time}</span>
                </div>
            </div>
        </div>
    );
};

const SocialWall: React.FC = () => {
    const posts = [
        {
            img: IMAGES.SOCIAL_1,
            caption: "3 points. Clean sheet. The perfect Sunday! 💙🦁 #CFCW",
            likes: "12.4k",
            time: "2h ago",
            handle: "@milliebright"
        },
        {
            img: IMAGES.SOCIAL_2,
            caption: "Focus on the next one. Champions League nights soon... ✨",
            likes: "24k",
            time: "4h ago",
            handle: "@samkerr20"
        },
        {
            img: IMAGES.SOCIAL_3,
            caption: "Always together. This team is special. 💪",
            likes: "15.1k",
            time: "6h ago",
            handle: "@erincuthbert"
        },
        {
            img: IMAGES.SOCIAL_2, // Reusing social assets
            caption: "Recovery & prep. We don't stop.",
            likes: "9.8k",
            time: "1d ago",
            handle: "@chelseafcw"
        },
        {
            img: IMAGES.SOCIAL_1,
            caption: "Tunnel vision. 🏟️",
            likes: "18.2k",
            time: "1d ago",
            handle: "@laurenjames"
        },
        {
            img: IMAGES.SOCIAL_3,
            caption: "Thank you for the support away from home! 👏",
            likes: "11k",
            time: "2d ago",
            handle: "@niamhcharles"
        },
    ];

    return (
        <section className="px-4 py-10 bg-white border-t border-slate-50">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <span className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.2em] block mb-1">Inside Access</span>
                    <h2 className="text-[22px] font-black text-[#0A1A3F] uppercase tracking-tighter leading-none">
                        Social Wall
                    </h2>
                </div>
                <button className="text-[11px] font-bold text-[#034694] uppercase tracking-wide border border-[#034694]/20 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-1">
                    <Icons.Instagram className="w-3 h-3" />
                    @chelseafcw
                </button>
            </div>

            <div className="columns-2 gap-3 space-y-3">
                {posts.map((post, i) => (
                    <SocialCard key={i} {...post} />
                ))}
            </div>

            <button className="w-full mt-6 py-3 bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-widest rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center space-x-2">
                <span>Load More Updates</span>
                <Icons.ChevronDown className="w-3 h-3" />
            </button>
        </section>
    );
};

export default SocialWall;
