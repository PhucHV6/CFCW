
import React from 'react';
import { COLORS, IMAGES } from '../../constants';
import { Icons } from './Icons';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[520px] overflow-hidden group">
            {/* Dynamic Background Image with Slow Zoom */}
            <img
                src={IMAGES.HOME_HERO_CINEMATIC}
                alt="Chelsea Women Celebration"
                className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-linear group-hover:scale-110 will-change-transform"
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F] via-[#0A1A3F]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#034694]/90 via-[#034694]/20 to-transparent" />

            {/* Film Grain Texture for Texture */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            {/* Golden Dust Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#DBA111] rounded-full opacity-60 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Marketing Badge: Social Proof (3D Float Effect) */}
            <div className="absolute top-24 right-4 animate-fadeIn delay-300 perspective-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-2xl animate-[float_6s_ease-in-out_infinite] hover:rotate-0 transition-transform duration-500 transform rotate-3">
                    <div className="flex text-[#DBA111] space-x-0.5 mb-1 justify-center">
                        {[1, 2, 3, 4, 5].map(i => (
                            <React.Fragment key={i}>
                                <Icons.Trophy className="w-3 h-3 drop-shadow-md" />
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-white text-[10px] font-black uppercase tracking-wide leading-none text-center text-shadow-sm">
                        #1 Matchday<br />Experience
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                {/* FOMO Indicator */}
                <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-3 py-1 rounded-full mb-4 shadow-[0_0_20px_rgba(220,38,38,0.4)] animate-pulse">
                    <Icons.Ticket className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Next Home Game: Low Availability</span>
                </div>

                <h1 className="text-white text-[46px] font-black uppercase leading-[0.85] tracking-tighter mb-4 drop-shadow-2xl">
                    Witness <br />
                    <span className="relative inline-block">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#DBA111] via-[#FCD34D] to-[#DBA111] blur-xl opacity-30 animate-pulse" />
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#DBA111] via-[#FCD34D] to-[#DBA111] bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                            Greatness
                        </span>
                    </span>
                </h1>

                <p className="text-white/90 text-[15px] font-bold leading-tight max-w-[320px] mb-8 border-l-4 border-[#DBA111] pl-4">
                    Join 40,000+ fans at the Bridge. The dynasty continues, and you need to be there.
                </p>

                <div className="flex flex-col space-y-3">
                    <button className="w-full bg-[#DBA111] text-[#0A1A3F] h-14 rounded-xl flex items-center justify-between px-6 shadow-[0_10px_30px_rgba(219,161,17,0.3)] active:scale-[0.98] transition-all group/btn relative overflow-hidden ring-2 ring-[#DBA111] ring-offset-2 ring-offset-[#0A1A3F]">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        <span className="text-[14px] font-black uppercase tracking-widest">Secure Your Seats</span>
                        <Icons.ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button className="flex items-center justify-center space-x-2 text-white/80 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors group/link">
                        <span className="group-hover/link:underline underline-offset-4 decoration-[#DBA111]">Watch the Hype Reel</span>
                        <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover/link:border-white group-hover/link:bg-white/10 transition-all">
                            <svg className="w-2 h-2 ml-0.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(3deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-dust {
           0% { transform: translateY(0) translateX(0); }
           50% { transform: translateY(-20px) translateX(10px); }
           100% { transform: translateY(0) translateX(0); }
        }
        .animate-float {
           animation: float-dust linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Hero;
