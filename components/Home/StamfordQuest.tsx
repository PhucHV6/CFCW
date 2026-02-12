
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { Screen } from '../../types';

type GameState = 'lobby' | 'searching' | 'found' | 'quiz' | 'auth_gate' | 'success' | 'failed' | 'leaderboard';

interface Question {
    id: number;
    q: string;
    options: string[];
    correct: number;
    difficulty: string;
}

const QUESTIONS: Question[] = [
    {
        id: 1,
        difficulty: "Scout Level",
        q: "Which iconic stadium is known as 'The Bridge'?",
        options: ["Kingsmeadow", "Stamford Bridge", "Wembley"],
        correct: 1
    },
    {
        id: 2,
        difficulty: "First Team Level",
        q: "Who scored the winning penalty in the 2012 Champions League Final?",
        options: ["Frank Lampard", "Didier Drogba", "Juan Mata"],
        correct: 1
    },
    {
        id: 3,
        difficulty: "Legend Level",
        q: "How many consecutive WSL titles did the Women's team win between 2020 and 2024?",
        options: ["3", "4", "5"],
        correct: 2
    }
];

const StamfordQuest: React.FC<{ currentScreen?: Screen }> = ({ currentScreen }) => {
    const [state, setState] = useState<GameState>('lobby');
    const [currentStep, setCurrentStep] = useState(0);
    const [timer, setTimer] = useState(20);
    const [isHalfTime, setIsHalfTime] = useState(false);
    const [startTime, setStartTime] = useState<number>(0);
    const [finalTime, setFinalTime] = useState<string>("");
    const [cupPos, setCupPos] = useState({ top: '80%', left: '80%' });
    const [targetScreen, setTargetScreen] = useState<Screen>(Screen.HOME);
    const [radarHint, setRadarHint] = useState("SEARCHING...");
    const [isHidden, setIsHidden] = useState(false);

    // Global Sync Simulation
    useEffect(() => {
        const timerId = setTimeout(() => setIsHalfTime(true), 3000);
        return () => clearTimeout(timerId);
    }, []);

    // Radar Hint Logic
    useEffect(() => {
        if (state === 'searching') {
            const interval = setInterval(() => {
                if (currentScreen !== targetScreen) {
                    const screenNames: Record<string, string> = {
                        [Screen.HOME]: "HOME",
                        [Screen.MATCHDAY]: "MATCHDAY",
                        [Screen.ROSTER]: "SQUAD",
                        [Screen.ABOUT]: "ABOUT"
                    };
                    const targetName = screenNames[targetScreen] || "another";
                    const hints = [
                        `Check the ${targetName} screen!`,
                        `Signals in ${targetName}...`,
                        `Try switching to ${targetName}.`
                    ];
                    setRadarHint(hints[Math.floor(Math.random() * hints.length)]);
                } else {
                    const proximityHints = ["COLD", "COOL", "WARMER...", "HOT!", "BURNING!!"];
                    setRadarHint(prev => {
                        const idx = proximityHints.indexOf(prev);
                        if (idx === -1) return proximityHints[0];
                        return proximityHints[Math.min(idx + 1, proximityHints.length - 1)];
                    });
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [state, currentScreen, targetScreen]);

    // Quiz Timer Logic
    useEffect(() => {
        let interval: any;
        if (state === 'quiz' && timer > 0) {
            interval = setInterval(() => setTimer(t => t - 1), 1000);
        } else if (timer === 0) {
            setState('failed');
        }
        return () => clearInterval(interval);
    }, [state, timer]);

    const handleAnswer = (idx: number) => {
        if (idx === QUESTIONS[currentStep].correct) {
            if (currentStep === QUESTIONS.length - 1) {
                const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
                setFinalTime(timeTaken);
                setState('auth_gate');
            } else {
                setCurrentStep(prev => prev + 1);
                setTimer(20);
            }
        } else {
            // "One wrong = eliminated" rule
            setState('failed');
        }
    };

    const startHunt = () => {
        const screens = [Screen.HOME, Screen.MATCHDAY, Screen.ROSTER, Screen.ABOUT];
        const randomScreen = screens[Math.floor(Math.random() * screens.length)];
        const randomTop = Math.floor(Math.random() * 60) + 20; // 20% to 80%
        const randomLeft = Math.floor(Math.random() * 70) + 15; // 15% to 85%

        setTargetScreen(randomScreen);
        setCupPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
        setRadarHint(currentScreen === randomScreen ? "WARMING UP..." : "WRONG SCREEN...");
        setState('searching');
    };

    const foundTreasure = () => {
        setState('found');
        setStartTime(Date.now());
    };

    const resetGame = () => {
        setState('lobby');
        setCurrentStep(0);
        setTimer(20);
        setStartTime(0);
        setFinalTime("");
        setIsHalfTime(false);
        setIsHidden(false);
        // Re-trigger for infinite demo loop
        setTimeout(() => setIsHalfTime(true), 1500);
    };

    // Mobile-First UI Components
    const ProgressBar = () => (
        <div className="flex space-x-2 mb-6">
            {QUESTIONS.map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-[#DBA111]' : 'bg-white/10'}`}
                />
            ))}
        </div>
    );

    return (
        <div className="contents">
            {/* 1. LOBBY BANNER (Thumb Zone focus) */}
            {isHalfTime && state === 'lobby' && !isHidden && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[92%] z-[60] animate-fadeIn">
                    <div className="bg-[#0A1A3F] border border-[#DBA111]/30 p-4 rounded-2xl shadow-2xl flex items-center justify-between relative overflow-hidden">
                        {/* Dismiss Button */}
                        <button
                            onClick={() => setIsHidden(true)}
                            className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-full transition-colors group z-10"
                            aria-label="Hide banner"
                        >
                            <Icons.X className="w-4 h-4 text-white/40 group-hover:text-white" />
                        </button>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-[#DBA111]/10 rounded-full flex items-center justify-center shrink-0">
                                <Icons.Trophy className="w-5 h-5 text-[#DBA111]" />
                            </div>
                            <div className="mr-4">
                                <p className="text-white font-black text-[11px] uppercase tracking-tighter">Half-Time Hunt</p>
                                <p className="text-[#DBA111] text-[9px] font-bold uppercase">The Vault is Open</p>
                            </div>
                        </div>
                        <button
                            onClick={startHunt}
                            className="bg-[#DBA111] text-[#0A1A3F] px-4 py-2.5 rounded-lg font-black text-[11px] uppercase active:scale-95 transition-transform shrink-0"
                        >
                            Start Hunt
                        </button>
                    </div>
                </div>
            )}

            {/* 2. SEARCHING OVERLAY (Radar) */}
            {state === 'searching' && (
                <>
                    {currentScreen === targetScreen && (
                        <div
                            className="absolute z-[60] animate-bounce"
                            style={{ top: cupPos.top, left: cupPos.left }}
                        >
                            <button
                                onClick={foundTreasure}
                                className="w-14 h-14 bg-[#DBA111] rounded-full shadow-[0_0_30px_rgba(219,161,17,0.5)] flex items-center justify-center border-4 border-white opacity-40 hover:opacity-100 transition-opacity"
                            >
                                <Icons.Trophy className="w-7 h-7 text-[#0A1A3F]" />
                            </button>
                        </div>
                    )}
                    <div className="absolute bottom-24 left-4 z-[55] bg-[#0A1A3F]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full animate-ping ${currentScreen === targetScreen ? 'bg-orange-500' : 'bg-red-500'}`} />
                            <span className="text-white text-[10px] font-bold uppercase tracking-widest min-w-[120px]">
                                Radar: {radarHint}
                            </span>
                        </div>
                    </div>
                </>
            )}

            {/* 3. DISCOVERY MODAL */}
            {state === 'found' && (
                <div className="absolute inset-0 z-[100] bg-[#034694]/98 backdrop-blur-xl flex flex-col items-center justify-center p-8 animate-fadeIn text-center">
                    <div className="w-24 h-24 bg-[#DBA111] rounded-full flex items-center justify-center mb-6 shadow-2xl">
                        <Icons.Trophy className="w-12 h-12 text-[#034694]" />
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Vault Found!</h2>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-[280px]">
                        You have located the Blue Vault. Pass the tactical check to unlock your reward.
                    </p>
                    <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-10 w-full max-w-[300px]">
                        <p className="text-[#DBA111] text-[11px] font-black uppercase tracking-widest mb-1">Warning</p>
                        <p className="text-white text-xs font-bold">One wrong answer = Instant Elimination</p>
                    </div>
                    <button
                        onClick={() => setState('quiz')}
                        className="w-full max-w-[300px] py-5 bg-white text-[#034694] rounded-2xl font-black uppercase tracking-widest text-sm active:scale-95 transition-transform"
                    >
                        Start Challenge
                    </button>
                </div>
            )}

            {/* 4. QUIZ ENGINE (Focused, Thumb-optimized) */}
            {state === 'quiz' && (
                <div className="absolute inset-0 z-[110] bg-[#0A1A3F] flex flex-col p-6 animate-fadeIn">
                    <div className="flex justify-between items-center mb-10">
                        <span className="text-white/40 text-[11px] font-black uppercase tracking-widest">Tactical Check</span>
                        <div className="bg-red-500/20 px-3 py-1 rounded-full border border-red-500/40">
                            <span className="text-red-500 font-mono text-sm font-black">{timer}s</span>
                        </div>
                    </div>

                    <ProgressBar />

                    <div className="flex-grow flex flex-col justify-center">
                        <span className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                            {QUESTIONS[currentStep].difficulty}
                        </span>
                        <h3 className="text-white text-[28px] font-black uppercase leading-none tracking-tight mb-10">
                            {QUESTIONS[currentStep].q}
                        </h3>

                        <div className="space-y-3">
                            {QUESTIONS[currentStep].options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(i)}
                                    className="w-full py-5 px-6 bg-white/5 border border-white/10 rounded-2xl text-left text-white font-bold text-sm hover:bg-white/10 active:bg-[#034694] transition-all"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* 5. ACCOUNT GATE (Verification) */}
            {state === 'auth_gate' && (
                <div className="absolute inset-0 z-[120] bg-[#034694] flex flex-col items-center justify-center p-8 animate-fadeIn text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20">
                        <Icons.Users className="w-10 h-10 text-[#DBA111]" />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Connect to Claim</h2>
                    <p className="text-white/60 text-sm mb-10 max-w-[260px]">You successfully navigated the Vault! Sign in to your Chelsea account to secure your reward.</p>

                    <div className="w-full max-w-[300px] space-y-4">
                        <button
                            onClick={() => setState('success')}
                            className="w-full py-5 bg-[#DBA111] text-[#0A1A3F] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-transform"
                        >
                            Login to Claim
                        </button>
                        <button className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-sm active:scale-95 transition-transform">
                            Register Account
                        </button>
                    </div>
                </div>
            )}

            {/* 6. SUCCESS STATE */}
            {state === 'success' && (
                <div className="absolute inset-0 z-[130] bg-[#034694] overflow-y-auto animate-fadeIn">
                    <div className="p-8 py-16 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-[#DBA111] rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(219,161,17,0.4)]">
                            <Icons.Trophy className="w-12 h-12 text-[#034694]" />
                        </div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Victory!</h2>
                        <p className="text-[#DBA111] font-bold uppercase tracking-widest text-xs mb-10">Time: {finalTime}s • Rank: #124</p>

                        <div className="bg-white rounded-[32px] p-8 w-full max-w-[320px] shadow-2xl space-y-6">
                            <div>
                                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Your Reward</p>
                                <p className="text-[#034694] text-2xl font-black uppercase">£10 MEGASTORE CODE</p>
                            </div>
                            <div className="py-5 px-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl">
                                <span className="font-mono text-xl text-slate-800 font-bold tracking-widest">HT-BLUE-2025</span>
                            </div>
                            <button className="w-full py-4 bg-[#034694] text-white rounded-xl font-bold uppercase text-[11px] tracking-widest active:scale-95">
                                Copy Code
                            </button>
                        </div>

                        <div className="flex flex-col w-full max-w-[320px] space-y-4">
                            <button
                                onClick={resetGame}
                                className="w-full py-5 bg-[#DBA111] text-[#0A1A3F] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-transform"
                            >
                                Play Again
                            </button>
                            <button
                                onClick={() => setState('leaderboard')}
                                className="text-white/40 font-bold uppercase text-[11px] tracking-widest border-b border-white/10 pb-1 self-center"
                            >
                                View Full Leaderboard
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 7. FAILURE STATE (Elimination) */}
            {state === 'failed' && (
                <div className="absolute inset-0 z-[140] bg-red-950 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-8">
                        <div className="text-white text-4xl font-black">!</div>
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Eliminated</h2>
                    <p className="text-white/50 text-sm mb-10 max-w-[260px]">The tactical check failed. You have been locked out of the Vault for this Half-time window.</p>
                    <button
                        onClick={resetGame}
                        className="w-full max-w-[300px] py-5 bg-white text-red-950 rounded-2xl font-black uppercase tracking-widest text-sm active:scale-95 transition-transform"
                    >
                        Try Again
                    </button>
                </div>
            )}

            {/* 8. LEADERBOARD */}
            {state === 'leaderboard' && (
                <div className="absolute inset-0 z-[150] bg-[#0A1A3F] flex flex-col animate-slideUp">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <button onClick={() => setState('success')} className="text-white/50"><Icons.ChevronDown className="w-6 h-6 rotate-90" /></button>
                        <h2 className="text-white font-black uppercase tracking-tight">Top Scouters</h2>
                        <div className="w-6" />
                    </div>
                    <div className="flex-grow overflow-y-auto p-4 space-y-2 no-scrollbar">
                        {[
                            { name: "Lauren_J", time: "8.42s" },
                            { name: "Millie_B", time: "9.15s" },
                            { name: "Emma_K", time: "10.03s" },
                            { name: "Guro_R", time: "10.88s" },
                            { name: "Erin_C", time: "11.25s" },
                            { name: "Kadeisha_B", time: "11.97s" },
                            { name: "Sjoeke_N", time: "12.10s" },
                            { name: "Ashley_L", time: "12.35s" },
                        ].map((player, idx) => {
                            const rank = idx + 1;
                            const isTop3 = rank <= 3;
                            return (
                                <div
                                    key={rank}
                                    className={`flex items-center justify-between p-4 rounded-xl border border-white/5 transition-all
                                        ${rank === 1 ? 'bg-gradient-to-r from-[#DBA111]/20 to-transparent border-[#DBA111]/30' : 'bg-white/5'}`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs
                                            ${rank === 1 ? 'bg-[#DBA111] text-[#0A1A3F]' :
                                                rank === 2 ? 'bg-slate-300 text-slate-800' :
                                                    rank === 3 ? 'bg-orange-400 text-orange-950' : 'text-white/40'}`}>
                                            #{rank}
                                        </div>
                                        <span className={`font-bold ${isTop3 ? 'text-white' : 'text-white/70'}`}>{player.name}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {rank === 1 && <div className="w-1.5 h-1.5 bg-[#DBA111] rounded-full animate-pulse" />}
                                        <span className="font-mono text-xs text-[#DBA111] font-bold">{player.time}</span>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Current User Rank Simulation */}
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-[#034694] border border-[#034694] shadow-lg">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs bg-white/20 text-white">
                                        #124
                                    </div>
                                    <span className="font-bold text-white">You</span>
                                </div>
                                <span className="font-mono text-xs text-white/60">{finalTime}s</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <button
                            onClick={resetGame}
                            className="w-full py-5 bg-[#DBA111] text-[#0A1A3F] rounded-2xl font-black uppercase tracking-widest active:scale-95 transition-transform"
                        >
                            Back to Quest
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default StamfordQuest;
