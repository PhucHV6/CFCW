export enum Screen {
  HOME = 'home',
  MATCHDAY = 'matchday',
  ROSTER = 'roster',
  PROFILE = 'profile',
  ABOUT = 'about'
}

export interface MatchProps {
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  competition: string;
  isHome: boolean;
}