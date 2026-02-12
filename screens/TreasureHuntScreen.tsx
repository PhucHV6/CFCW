import React, { useState, useMemo } from 'react';
import type { TreasureHuntPhase } from '../types';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { useCountdown } from '../hooks/useCountdown';
import {
  TREASURE_HUNT,
  TREASURE_HUNT_BREAK_TIME_UTC,
  TREASURE_QUESTION_SETS,
  MOCK_LEADERBOARD,
  type TreasureQuestion,
  type LeaderboardEntry,
} from '../constants';
import { CFCW_LINKS } from '../constants';

interface TreasureHuntScreenProps {
  onBack: () => void;
}

/** Shuffle array (Fisher–Yates) for option order per question */
function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** On-screen countdown to half-time / game start. Mobile-first: large digits, clear label. */
function CountdownLabel() {
  const { days, hours, minutes, seconds, isLive } = useCountdown(TREASURE_HUNT_BREAK_TIME_UTC);
  if (isLive) {
    return (
      <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-4 py-3 text-center" role="status" aria-live="polite">
        <p className="text-emerald-300 font-bold text-sm uppercase tracking-wider">Game on!</p>
        <p className="text-white text-xs mt-0.5">Tap Start to find the treasure.</p>
      </div>
    );
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div className="rounded-xl bg-chelsea-blue/20 border border-chelsea-blue/40 px-4 py-3 text-center" role="timer" aria-live="polite" aria-label={`Game starts in ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`}>
      <p className="text-[10px] font-bold text-chelsea-blue uppercase tracking-wider mb-1">Starts in</p>
      <p className="font-mono text-xl font-bold text-white tabular-nums">
        {days > 0 ? `${days}d ` : ''}{pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </p>
    </div>
  );
}

/**
 * Small radar to guide user toward treasure (direction only in this prototype).
 * Mobile-first: 140px circle, large enough to read; center = you, blip = treasure direction.
 * Reasoning: encourages exploration without revealing exact page; works on all viewports.
 */
function TreasureRadar({ angleDeg }: { angleDeg: number }) {
  const r = 38; // blip distance from center (% of radius)
  const rad = (angleDeg * Math.PI) / 180;
  const cx = 50;
  const cy = 50;
  const blipX = cx + r * Math.sin(rad);
  const blipY = cy - r * Math.cos(rad);
  return (
    <div className="flex flex-col items-center gap-2" role="img" aria-label="Treasure radar: explore in the direction of the glowing dot">
      <p className="text-[10px] font-bold text-chelsea-blue uppercase tracking-wider">Treasure radar</p>
      <div className="relative w-[140px] h-[140px] rounded-full border-2 border-white/20 bg-surface-dark/80 flex items-center justify-center overflow-hidden">
        {/* Sweep line: rotating line from center */}
        <div
          className="absolute w-0.5 h-1/2 top-1/2 left-1/2 origin-top -translate-x-1/2 -translate-y-full bg-chelsea-blue/40 animate-spin"
          style={{ animationDuration: '3s' }}
        />
        {/* Center = you */}
        <div className="absolute w-3 h-3 rounded-full bg-chelsea-blue border-2 border-white shadow-lg z-10" title="You" />
        {/* Treasure blip at angle */}
        <div
          className="absolute w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.6)] z-10 animate-pulse"
          style={{
            left: `${blipX}%`,
            top: `${blipY}%`,
            transform: 'translate(-50%, -50%)',
          }}
          title="Treasure direction"
        />
      </div>
      <p className="text-xs text-gray-400 text-center max-w-[200px]">Explore chelseafc.com in this direction</p>
    </div>
  );
}

const TreasureHuntScreen: React.FC<TreasureHuntScreenProps> = ({ onBack }) => {
  const [phase, setPhase] = useState<TreasureHuntPhase>('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showLeaderboardStandalone, setShowLeaderboardStandalone] = useState(false);
  const [radarAngle] = useState(() => Math.random() * 360);

  const questionSet = useMemo(
    () => TREASURE_QUESTION_SETS[Math.floor(Math.random() * TREASURE_QUESTION_SETS.length)],
    []
  );

  const currentQuestion: TreasureQuestion | null =
    questionSet[questionIndex] ?? null;

  const handleStart = () => setPhase('play');
  const handleFound = () => setPhase('found');
  const handleUnlockQuiz = () => setPhase('questions');
  const handleAnswer = (correct: boolean) => {
    if (!correct) {
      setPhase('eliminated');
      return;
    }
    if (questionIndex + 1 >= questionSet.length) {
      setPhase('reward_unlocked');
    } else {
      setQuestionIndex((i) => i + 1);
    }
  };
  const handleClaim = () => setPhase('claim');
  const handleShowLeaderboard = () => setShowLeaderboardStandalone(true);
  const handleHideLeaderboard = () => setShowLeaderboardStandalone(false);

  const minTap = 'min-h-[48px] min-w-[44px]';

  if (showLeaderboardStandalone) {
    return (
      <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
        <Header title="Leaderboard" showBack onBack={handleHideLeaderboard} />
        <PageLayout className="space-y-4">
          <LeaderboardList entries={MOCK_LEADERBOARD} />
          <button
            onClick={handleHideLeaderboard}
            className={`w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold ${minTap}`}
          >
            Back
          </button>
        </PageLayout>
      </div>
    );
  }

  switch (phase) {
    case 'intro':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Matchday Treasure Hunt" showBack onBack={onBack} />
          <PageLayout className="space-y-6">
            <CountdownLabel />
            <div className="bg-gradient-to-br from-amber-500/20 to-chelsea-blue/20 rounded-2xl p-5 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-amber-400">military_tech</span>
                <div>
                  <h2 className="text-xl font-bold text-white">Find the treasure</h2>
                  <p className="text-[10px] font-bold text-amber-400/90 uppercase tracking-wider mt-0.5">Matchday game</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">{TREASURE_HUNT.BREAK_TIME_LABEL}</p>
              <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                <li>Treasure is hidden on a page across chelseafc.com</li>
                <li>When you find it, answer 3 questions to unlock the reward</li>
                <li>One wrong answer = eliminated (try next round)</li>
                <li>Rewards: vouchers or special offers</li>
                <li>Connect your Chelsea account to claim</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={handleStart}
              className={`w-full py-4 rounded-xl bg-chelsea-blue text-white font-bold text-lg ${minTap} active:scale-[0.98] shadow-lg focus:outline-none focus:ring-2 focus:ring-white/30`}
              aria-label="Start the game"
            >
              Start game
            </button>
            <button
              type="button"
              onClick={handleShowLeaderboard}
              className={`w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold ${minTap}`}
            >
              View Leaderboard
            </button>
          </PageLayout>
        </div>
      );

    case 'play':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Matchday Treasure Hunt" showBack onBack={onBack} />
          <PageLayout className="space-y-6">
            <div className="flex flex-col items-center py-2">
              <TreasureRadar angleDeg={radarAngle} />
            </div>
            <div className="bg-surface-dark rounded-2xl p-5 border border-white/10">
              <span className="text-[10px] font-bold text-chelsea-blue uppercase tracking-wider">Clue</span>
              <p className="text-white font-medium mt-2">{TREASURE_HUNT.CLUE}</p>
            </div>
            <p className="text-sm text-gray-400 text-center">
              On matchday we detect when you’re on the right page on chelseafc.com. For this demo, tap below to continue the journey.
            </p>
            <a
              href={CFCW_LINKS.ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold flex items-center justify-center gap-2 ${minTap} hover:bg-white/15 transition-colors`}
            >
              <span className="material-symbols-outlined">open_in_new</span>
              Open chelseafc.com
            </a>
            <button
              type="button"
              onClick={handleFound}
              className={`w-full py-4 rounded-xl bg-amber-500/25 border-2 border-amber-400/50 text-amber-100 font-bold ${minTap} hover:bg-amber-500/30 transition-colors active:scale-[0.98]`}
              aria-label="I found the treasure"
            >
              I found the treasure — continue
            </button>
          </PageLayout>
        </div>
      );

    case 'found':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Matchday Treasure Hunt" showBack onBack={onBack} />
          <PageLayout className="space-y-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-amber-400 fill-1">celebration</span>
            </div>
            <h2 className="text-2xl font-bold text-white">You found the treasure!</h2>
            <p className="text-gray-400">Answer 3 questions correctly to unlock your reward. One wrong answer ends your attempt.</p>
            <button
              onClick={handleUnlockQuiz}
              className={`w-full py-4 rounded-xl bg-chelsea-blue text-white font-bold text-lg ${minTap} mt-4`}
            >
              Unlock with 3 questions
            </button>
          </PageLayout>
        </div>
      );

    case 'questions':
      if (!currentQuestion) return null;
      return (
        <QuestionScreen
          question={currentQuestion}
          index={questionIndex}
          total={questionSet.length}
          onAnswer={handleAnswer}
          onBack={onBack}
        />
      );

    case 'eliminated':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Matchday Treasure Hunt" showBack onBack={onBack} />
          <PageLayout className="space-y-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-red-400">close</span>
            </div>
            <h2 className="text-xl font-bold text-white">Eliminated</h2>
            <p className="text-gray-400">One wrong answer ends this attempt. Try again in the next round!</p>
            <button type="button" onClick={handleShowLeaderboard} className={`w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold ${minTap}`}>
              View Leaderboard
            </button>
            <button type="button" onClick={() => setPhase('intro')} className={`w-full py-4 rounded-xl bg-chelsea-blue text-white font-bold ${minTap}`}>
              Back to start
            </button>
          </PageLayout>
        </div>
      );

    case 'reward_unlocked':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Matchday Treasure Hunt" showBack onBack={onBack} />
          <PageLayout className="space-y-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-emerald-400 fill-1">workspace_premium</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Reward unlocked!</h2>
            <p className="text-gray-400">{TREASURE_HUNT.REWARD_LABEL}</p>
            <button type="button" onClick={handleClaim} className={`w-full py-4 rounded-xl bg-chelsea-blue text-white font-bold text-lg ${minTap} mt-4`}>
              Claim reward
            </button>
            <button type="button" onClick={handleShowLeaderboard} className={`w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold ${minTap}`}>
              View Leaderboard
            </button>
          </PageLayout>
        </div>
      );

    case 'claim':
      return (
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <Header title="Claim reward" showBack onBack={onBack} />
          <PageLayout className="space-y-6">
            <div className="bg-surface-dark rounded-2xl p-6 border border-white/10 text-center">
              <p className="text-white font-medium mb-6">
                Connect with your Chelsea account to claim this award.
              </p>
              <div className="flex flex-col gap-3">
                <button className={`w-full py-4 rounded-xl bg-chelsea-blue text-white font-bold ${minTap}`}>
                  Login
                </button>
                <button className={`w-full py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold ${minTap}`}>
                  Register
                </button>
              </div>
            </div>
          </PageLayout>
        </div>
      );

    default:
      return null;
  }
};

function QuestionScreen({
  question,
  index,
  total,
  onAnswer,
  onBack,
}: {
  question: TreasureQuestion;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
  onBack: () => void;
}) {
  const options = useMemo(() => shuffle(question.options), [question.id]);
  const minTap = 'min-h-[48px]';

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      <Header title="Unlock treasure" showBack onBack={onBack} />
      <PageLayout className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-chelsea-blue uppercase tracking-wider">
            Question {index + 1} of {total}
          </span>
          <span className="text-xs text-gray-500 capitalize">{question.difficulty}</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-chelsea-blue rounded-full transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <h2 className="text-lg font-bold text-white leading-snug">{question.question}</h2>
        <div className="space-y-3">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onAnswer(opt.correct)}
              className={`w-full py-4 px-4 rounded-xl bg-surface-dark border border-white/10 text-left text-white font-medium hover:border-chelsea-blue/50 active:scale-[0.98] transition-all ${minTap}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </PageLayout>
    </div>
  );
}

function LeaderboardList({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider sticky top-0 bg-chelsea-dark py-2 z-10">
        Live leaderboard
      </h3>
      {entries.map((e) => (
        <div
          key={e.rank}
          className="flex items-center gap-4 p-3 rounded-xl bg-surface-dark border border-white/5"
        >
          <span className="w-8 text-center font-black text-white/80">#{e.rank}</span>
          <span className="flex-1 font-medium text-white truncate">{e.displayName}</span>
          <span className="text-sm text-gray-400">
            {e.completed ? `${e.score} pts · ${e.totalTimeSec}s` : 'Eliminated'}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TreasureHuntScreen;
