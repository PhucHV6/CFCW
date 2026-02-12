import { useState, useEffect } from 'react';

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  totalSeconds: number;
}

/**
 * Returns countdown to target date, updating every second.
 * isLive is true when now >= target (game has started).
 * Reasoning: single source of truth for "half-time" sync; 1s interval is enough for UX and cheap.
 */
export function useCountdown(targetUtc: string): CountdownParts {
  const target = new Date(targetUtc).getTime();

  const compute = (): CountdownParts => {
    const now = Date.now();
    if (now >= target) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, totalSeconds: 0 };
    }
    const totalMs = target - now;
    const totalSeconds = Math.floor(totalMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds, isLive: false, totalSeconds };
  };

  const [parts, setParts] = useState(compute);

  useEffect(() => {
    setParts(compute);
    const id = setInterval(() => setParts(compute), 1000);
    return () => clearInterval(id);
  }, [targetUtc]);

  return parts;
}
