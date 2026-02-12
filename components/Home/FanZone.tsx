
import React, { useState } from 'react';
import { Icons } from './Icons';

const FanZone: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'poll' | 'trivia'>('poll');
    const [voted, setVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    // Trivia States
    const [triviaAnswered, setTriviaAnswered] = useState<number | null>(null);
    const correctTriviaIndex = 1; // 2015

    const handleVote = (index: number) => {
        setSelectedOption(index);
        setTimeout(() => {
            setVoted(true);
        }, 500);
    };

    return (
        <section className="px-4 py-10 bg-white">
            <div className="bg-gradient-to-br from-[#034694] to-[#0A1A3F] rounded-[32px] p-1 shadow-xl overflow-hidden relative">
                <div className="bg-[#034694] rounded-[28px] p-6 relative z-10 overflow-hidden min-h-[400px]">
                    {/* Background decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DBA111] opacity-10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#DBA111] rounded-full animate-pulse" />
                                <span className="text-[#DBA111] text-[10px] font-black uppercase tracking-[0.2em]">Fan Zone</span>
                            </div>

                            {/* Tab Switcher */}
                            <div className="bg-black/20 p-1 rounded-lg flex">
                                <button
                                    onClick={() => setActiveTab('poll')}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'poll' ? 'bg-white text-[#034694]' : 'text-white/50'}`}
                                >
                                    Vote
                                </button>
                                <button
                                    onClick={() => setActiveTab('trivia')}
                                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === 'trivia' ? 'bg-white text-[#034694]' : 'text-white/50'}`}
                                >
                                    Trivia
                                </button>
                            </div>
                        </div>

                        {activeTab === 'poll' ? (
                            <div className="animate-fadeIn">
                                <h2 className="text-[22px] font-black text-white uppercase tracking-tighter leading-none mb-6">
                                    Who is your<br />Player of the Match?
                                </h2>
                                {!voted ? (
                                    <div className="space-y-3 mb-8">
                                        {["Lauren James", "Sam Kerr", "Millie Bright"].map((player, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleVote(idx)}
                                                className={`w-full h-14 rounded-xl flex items-center justify-between px-4 transition-all ${selectedOption === idx ? 'bg-white text-[#034694]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                                            >
                                                <span className="text-[13px] font-bold uppercase tracking-wide">{player}</span>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOption === idx ? 'border-[#034694]' : 'border-white/30'}`}>
                                                    {selectedOption === idx && <div className="w-2.5 h-2.5 bg-[#034694] rounded-full" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="mb-8 py-8 bg-white/10 rounded-xl text-center animate-fadeIn border border-white/10">
                                        <Icons.Trophy className="w-10 h-10 text-[#DBA111] mx-auto mb-3" />
                                        <p className="text-white font-black uppercase text-xl mb-1">Vote Recorded</p>
                                        <p className="text-white/60 text-xs font-medium">You're making your voice heard.</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="animate-fadeIn">
                                <h2 className="text-[22px] font-black text-white uppercase tracking-tighter leading-none mb-2">
                                    Chelsea Expert
                                </h2>
                                <p className="text-white/70 text-[13px] mb-6">Test your knowledge of the Blues history.</p>

                                <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/10">
                                    <p className="text-white font-bold text-[15px] mb-4 leading-tight">In which year did Chelsea Women win their first ever WSL title?</p>

                                    <div className="space-y-2">
                                        {["2014", "2015", "2017", "2019"].map((year, idx) => {
                                            const isSelected = triviaAnswered === idx;
                                            const isCorrect = idx === correctTriviaIndex;

                                            let btnClass = "bg-white/10 text-white border-transparent hover:bg-white/20";
                                            if (triviaAnswered !== null) {
                                                if (isCorrect) btnClass = "bg-[#10B981] text-white border-[#10B981]";
                                                else if (isSelected) btnClass = "bg-red-500 text-white border-red-500";
                                                else btnClass = "bg-white/5 text-white/30";
                                            }

                                            return (
                                                <button
                                                    key={year}
                                                    disabled={triviaAnswered !== null}
                                                    onClick={() => setTriviaAnswered(idx)}
                                                    className={`w-full h-12 rounded-lg border flex items-center justify-center text-[13px] font-bold transition-all ${btnClass}`}
                                                >
                                                    {year}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                {triviaAnswered !== null && (
                                    <p className="text-center text-[#DBA111] text-[11px] font-bold uppercase tracking-widest animate-fadeIn">
                                        {triviaAnswered === correctTriviaIndex ? "Correct! What a season." : "Not quite! It was the 2015 Double."}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="border-t border-white/10 pt-6 mt-4">
                            <p className="text-white/90 text-[13px] font-medium mb-4 leading-tight">
                                Get match results and exclusive content directly to your inbox.
                            </p>

                            <div className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 h-11 bg-white/10 border border-white/10 rounded-lg px-4 text-white placeholder:text-white/40 text-[13px] focus:outline-none focus:bg-white/20 transition-all"
                                />
                                <button className="h-11 px-5 bg-[#DBA111] text-[#0A1A3F] font-black uppercase tracking-wider text-[11px] rounded-lg active:scale-95 transition-transform">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FanZone;
