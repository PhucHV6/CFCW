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

export interface MatchProps {
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  competition: string;
  isHome: boolean;
}