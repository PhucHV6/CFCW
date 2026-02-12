
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

type TacticalStyle = 'POSSESSION' | 'COUNTER' | 'PRESSING';
type RiskLevel = 'SAFE' | 'BALANCED' | 'ALL_OUT';

// New Component: The Pitch Visualizer
const TacticalBoard = ({ style, progress }: { style: TacticalStyle; progress: number }) => {
    // Generate mock player positions based on style and simulation progress
    const generatePositions = (isHome: boolean) => {
        const dots = [];
        const baseColor = isHome ? '#00F0FF' : '#FF4444';

        // 10 Outfield players
        for (let i = 0; i < 10; i++) {
            let x, y;

            // Formations based on style
            if (style === 'PRESSING' && isHome) {
                // High line
                x = 50 + (i % 3) * 20 + (Math.sin(progress / 10 + i) * 5);
                y = 20 + Math.floor(i / 3) * 20 + (Math.cos(progress / 10 + i) * 5);
            } else if (style === 'COUNTER' && isHome) {
                // Deep block then explode
                const explode = progress > 60 ? 40 : 0;
                x = 20 + (i % 4) * 15 + explode;
                y = 30 + Math.floor(i / 4) * 20;
            } else {
                // Balanced
                x = 30 + (i % 3) * 25 + (Math.sin(progress / 20 + i) * 10);
                y = 10 + Math.floor(i / 3) * 25;
            }

            // Mirror for away team
            if (!isHome) {
                x = 100 - x;
                y = 100 - y;
            }

            dots.push(
                <circle
                    key={i}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill={baseColor}
                    className="transition-all duration-300 ease-linear"
                    fillOpacity={0.8}
                >
                    <animate attributeName="r" values="3;4;3" dur={`${1 + Math.random()}s`} repeatCount="indefinite" />
                </circle>
            );
        }
        return dots;
    };

    return (
        <div className="w-full h-48 bg-[#050f25] rounded-xl border border-[#00F0FF]/20 relative overflow-hidden mb-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
            {/* Pitch Lines */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white transform -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-[10%] bottom-[10%] left-0 w-[15%] border-r border-y border-white" />
                <div className="absolute top-[10%] bottom-[10%] right-0 w-[15%] border-l border-y border-white" />
            </div>

            {/* Scanner Effect */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-[#00F0FF]/50 shadow-[0_0_15px_#00F0FF] z-10"
                style={{ left: `${progress}%` }}
            />

            <svg className="absolute inset-0 w-full h-full">
                {generatePositions(true)}
                {generatePositions(false)}
            </svg>

            <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur px-2 py-1 rounded text-[9px] font-mono text-[#00F0FF]">
                SIM_SPEED: {(progress * 12).toFixed(0)} OPS
            </div>
        </div>
    );
};

const GafferAI: React.FC = () => {
    const [step, setStep] = useState<'SETUP' | 'SIMULATING' | 'RESULT'>('SETUP');
    const [style, setStyle] = useState<TacticalStyle>('POSSESSION');
    const [risk, setRisk] = useState<RiskLevel>('BALANCED');

    // Simulation State
    const [simProgress, setSimProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    // Result State
    const [score, setScore] = useState({ home: 0, away: 0 });
    const [tacticalRating, setTacticalRating] = useState(0);

    const runSimulation = () => {
        setStep('SIMULATING');
        setSimProgress(0);
        setLogs([]);

        const events = [
            "Initializing Neural Network...",
            "Loading Opponent Heatmaps...",
            `Deploying ${style} formation nodes...`,
            "Simulating Midfield Overloads...",
            "Analyzing Transition Phases...",
            "Calculating Final xG Models..."
        ];

        let currentLog = 0;

        const interval = setInterval(() => {
            setSimProgress(prev => {
                const next = prev + 1; // Slower, smoother for visualizer
                if (next % 18 === 0 && currentLog < events.length) {
                    setLogs(l => [events[currentLog], ...l].slice(0, 3)); // Newest first, keep 3
                    currentLog++;
                }
                if (next >= 100) {
                    clearInterval(interval);
                    finishSimulation();
                    return 100;
                }
                return next;
            });
        }, 40);
    };

    const finishSimulation = () => {
        let homeScore = 2;
        let awayScore = 1;
        let rating = 78;

        if (style === 'PRESSING' && risk === 'ALL_OUT') {
            homeScore = 4;
            awayScore = 2;
            rating = 94;
        } else if (style === 'COUNTER' && risk === 'SAFE') {
            homeScore = 1;
            awayScore = 0;
            rating = 82;
        }

        setScore({ home: homeScore, away: awayScore });
        setTacticalRating(rating);
        setStep('RESULT');
    };

    return (
        <section className="bg-[#0F172A] border-y border-[#00F0FF]/20 relative overflow-hidden pb-10">

            {/* Background Cyber Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="relative z-10 px-4 pt-10">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <span className="text-[#00F0FF] text-[10px] font-black uppercase tracking-[0.2em] block mb-1 animate-pulse">CFC Labs Beta</span>
                        <h2 className="text-[28px] font-black text-white uppercase tracking-tighter leading-none">
                            Gaffer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-blue-500">AI</span>
                        </h2>
                        <p className="text-white/60 text-[11px] font-medium mt-2 max-w-[280px]">
                            Can you outsmart the algorithm? Set your tactics and let the AI simulate the result.
                        </p>
                    </div>
                    <div className="w-12 h-12 bg-[#00F0FF]/10 rounded-xl border border-[#00F0FF]/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                        <Icons.Cpu className="w-6 h-6 text-[#00F0FF]" />
                    </div>
                </div>

                <div className="bg-[#0A1A3F]/80 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-6 shadow-2xl min-h-[460px] flex flex-col relative overflow-hidden">

                    {/* STEP 1: SETUP */}
                    {step === 'SETUP' && (
                        <div className="animate-fadeIn flex-grow flex flex-col">
                            <div className="mb-6">
                                <label className="text-white/50 text-[10px] font-black uppercase tracking-widest block mb-3">Tactical Identity</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['POSSESSION', 'COUNTER', 'PRESSING'].map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setStyle(s as TacticalStyle)}
                                            className={`py-3 rounded-xl border text-[10px] font-black uppercase transition-all ${style === s ? 'bg-[#00F0FF] text-[#0A1A3F] border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'bg-white/5 text-white border-white/10 hover:border-white/30'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="text-white/50 text-[10px] font-black uppercase tracking-widest block mb-3">Risk Appetite</label>
                                <div className="flex bg-white/5 p-1 rounded-xl">
                                    {['SAFE', 'BALANCED', 'ALL_OUT'].map((r) => (
                                        <button
                                            key={r}
                                            onClick={() => setRisk(r as RiskLevel)}
                                            className={`flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all ${risk === r ? 'bg-white text-[#0A1A3F] shadow-lg' : 'text-white/50'}`}
                                        >
                                            {r.replace('_', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto bg-[#00F0FF]/5 rounded-xl p-4 border border-[#00F0FF]/20 mb-4">
                                <div className="flex items-start space-x-3">
                                    <Icons.Brain className="w-4 h-4 text-[#00F0FF] mt-0.5" />
                                    <p className="text-[#00F0FF] text-[11px] font-bold leading-tight">
                                        AI Insight: Selecting <span className="text-white">PRESSING</span> against Arsenal carries high risk but maximizes xG.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={runSimulation}
                                className="w-full py-4 bg-gradient-to-r from-[#00F0FF] to-blue-500 text-white font-black uppercase tracking-widest text-[12px] rounded-xl shadow-[0_0_30px_rgba(0,120,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] active:scale-[0.98] transition-all relative overflow-hidden group"
                            >
                                <span className="relative z-10">Simulate Match</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    )}

                    {/* STEP 2: SIMULATING (VISUALIZER) */}
                    {step === 'SIMULATING' && (
                        <div className="flex-grow flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[#00F0FF] text-[10px] font-black uppercase tracking-widest animate-pulse">Running Simulation...</span>
                                <span className="text-white font-mono text-[10px]">{simProgress}%</span>
                            </div>

                            {/* The Visual Board */}
                            <TacticalBoard style={style} progress={simProgress} />

                            <div className="flex-grow bg-[#00F0FF]/5 rounded-xl border border-[#00F0FF]/10 p-4 font-mono text-[10px] text-[#00F0FF] overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#00F0FF]/10 to-transparent pointer-events-none" />
                                <div className="space-y-2">
                                    {logs.map((log, i) => (
                                        <div key={i} className="flex items-center space-x-2 animate-slideUp">
                                            <span className="text-white/50">{`>>`}</span>
                                            <span>{log}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: RESULT */}
                    {step === 'RESULT' && (
                        <div className="animate-fadeIn flex-grow flex flex-col text-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F0FF] to-blue-600 shadow-[0_0_15px_#00F0FF]" />

                            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-2 mb-4">Simulation Complete</p>

                            <div className="flex items-center justify-center space-x-8 mb-6 scale-110">
                                <div className="text-center">
                                    <span className="block text-[42px] font-black text-white leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{score.home}</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase">CFC</span>
                                </div>
                                <div className="text-white/20 text-xl font-light">-</div>
                                <div className="text-center">
                                    <span className="block text-[42px] font-black text-white leading-none">{score.away}</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase">OPP</span>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl border mb-6 relative overflow-hidden group ${tacticalRating > 90 ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-[#00F0FF]' : 'bg-white/5 border-white/10 text-white'}`}>
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <p className="text-[10px] font-black uppercase tracking-widest mb-1">Your Tactical Rating</p>
                                <div className="flex items-end justify-center space-x-1">
                                    <span className="text-6xl font-black leading-none tracking-tighter">{tacticalRating}</span>
                                    <span className="text-sm font-bold opacity-60 mb-1">/100</span>
                                </div>
                                <p className="text-[11px] font-bold mt-2">
                                    {tacticalRating > 90 ? "GENIUS LEVEL. You should be in the dugout." : "SOLID. A respectable performance."}
                                </p>
                            </div>

                            <div className="mt-auto space-y-3">
                                <button className="w-full py-4 bg-[#DBA111] text-[#0A1A3F] font-black uppercase tracking-widest text-[11px] rounded-xl shadow-[0_0_20px_rgba(219,161,17,0.4)] flex items-center justify-center space-x-2 hover:bg-[#FCD34D] transition-colors">
                                    <Icons.Share className="w-4 h-4" />
                                    <span>Share Score & Challenge Friends</span>
                                </button>
                                <button
                                    onClick={() => setStep('SETUP')}
                                    className="w-full py-3 bg-white/5 text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    Try New Tactics
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default GafferAI;
