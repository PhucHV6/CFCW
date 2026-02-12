export enum Screen {
  HOME = 'home',
  MATCHDAY = 'matchday',
  ROSTER = 'roster',
  PROFILE = 'profile',
  ABOUT = 'about',
  TREASURE_HUNT = 'treasure_hunt',
}

/** Treasure Hunt game phase (mobile-first flow) */
export type TreasureHuntPhase =
  | 'intro'
  | 'play'
  | 'found'
  | 'questions'
  | 'eliminated'
  | 'reward_unlocked'
  | 'leaderboard'
  | 'claim';

export interface PlayerStats {
  appearances: number;
  goals: number;
  assists: number;
  // EA FC style stats (0-99)
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: string | number;
  name: string;
  number?: number;
  position: string;
  image: string;
  country: string;
  stats?: PlayerStats;
  bio: string;
  videoThumbnail?: string;
  squadType: 'Senior' | 'U21' | 'Loan' | 'Staff';
  isStar?: boolean;
  statLine?: string;
}

export interface MatchProps {
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  competition: string;
  isHome: boolean;
}
