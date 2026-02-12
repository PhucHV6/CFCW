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

export enum AppStage {
  ONBOARDING = 'ONBOARDING',
  MATCH_SELECTION = 'MATCH_SELECTION',
  OFFERS = 'OFFERS',
  SEAT_MAP = 'SEAT_MAP',
  ESSENTIALS = 'ESSENTIALS',
  CHECKOUT = 'CHECKOUT',
  ACCOUNT_CREATION = 'ACCOUNT_CREATION',
  TICKETS = 'TICKETS',
  IN_GAME = 'IN_GAME',
  POST_MATCH = 'POST_MATCH'
}

export enum Persona {
  DIE_HARD = 'DIE_HARD',
  FRIENDS_OUTING = 'FRIENDS_OUTING',
  BIG_GAMES = 'BIG_GAMES'
}

export interface Match {
  id: string;
  opponent: string;
  stadium: string;
  stadiumCode: 'SB' | 'KM';
  league: string;
  round: string;
  date: string;
  isBigGame: boolean;
  status: 'AVAILABLE' | 'SELLING_FAST' | 'SOLD_OUT';
}

export interface TicketOffer {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  benefits: string[];
  tag?: string;
  isSoldOut?: boolean;
}

export interface HospitalityPackage extends TicketOffer {
  category: 'WESTVIEW' | 'DUGOUT' | 'PLATINUM' | 'CUSTOM';
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  icon: string;
}
