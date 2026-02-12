import { Player } from './types';

/** Official Chelsea FC Women hub / chelseafc.com links (for "Learn more" etc.) */
export const CFCW_LINKS = {
  MATCHDAY_GUIDE: 'https://www.chelseafc.com/en/chelsea-womens-ticket-guide',
  TEAM_PROFILES: 'https://www.chelseafc.com/en/teams/chelsea-women',
  ABOUT: 'https://www.chelseafc.com/en/about-chelsea-fc-women',
} as const;

/** Chelsea FC crest / logo (official-style asset for Women's hub branding) */
export const CHELSEA_LOGO =
  'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg';

/** Football club logos for opponents */
export const CLUB_LOGOS = {
  ARSENAL: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
  MANCHESTER_CITY: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
  MANCHESTER_UNITED: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
  LIVERPOOL: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
  TOTTENHAM: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
  BARCELONA: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
  REAL_MADRID: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
  BAYERN_MUNICH: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
  PARIS_SG: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
  OPPONENT_LOGO: 'https://crests.football-data.org/57.svg',
} as const;

export const COLORS = {
  CHELSEA_BLUE: '#034694',
  CHELSEA_DARK: '#0A1A3F',
  GOLD: '#DBA111',
  SUCCESS: '#10B981',
  AI_CYAN: '#00F0FF',
} as const;

export const IMAGES = {
  HOME_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS25midCfTaigMUSABOBUpQCA58PCuARCWcs7nf3e8Vdy6p4y2cIOWqbv6S-cTOUoX1uV9QuAdpqJMCb4ZZKs-C8qE9nyNVyek6bXHDgw-0ZGD90BXuuSfk7jVpWu0b75kdK90IChg4GEOT6H-MbyyYdoapqyzubMM8EyHIH1tg9-z0hTK1Ve-rmmRslMzkfRSYkW1NmxgYw5bfCIQRYRTms1JEE2eE50O_BBy29qO_AePkFwb5gfTri5pe-VDJuAfw-0TP9UNjhw",
  STADIUM_MAP: "https://lh3.googleusercontent.com/aida-public/AB6AXuALXIuDbnsX0vbbjb_eZFbw1EsyA1knLKizHq3rPNgUWWZ96DTKGW2M0ahZm4QHcL67X7ZRrA6saxH0nXuo7CHSBet4qJOP-ktIjJyCc5cgMEQ7HJ7RqDKC8pCcjNiWcNU9WMF1o6qIClbxTmJS2t9ZhjRGAj1uVJMyNo7xl9Vxk1jIt27VvvhDyaNfxywAzQOd-tPLeTwMQQEWPrOoGiBx0xl-BV6OnYgdiJjiiuFJE6PuolEBmhTKP2Rk4YuiufWggShVHdQj8rc",
  SAM_KERR: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_1100,h_1100/v1756829170/editorial/people/ladies/2025-26/Sam_Kerr_profile_2025-26_avatar-removebg.png",
  ABOUT_HERO: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-72i1q3v7YF-m529XptY9zlYrrSAzlfH3m_sNu36k5uZkjZqQL8QeDfIMLJhetfCo820LyxNEQ3pRlV5J3piuSzxM0HeCy8Q4A5M4Zu5ARSqDtzH1NXno3Oc1lcni2yFkNDwcfrssrSWwOH-9IDNI6tGF3x9dmh34-N6UZSW3pMnSStDU7M7dY0VgwOD2Meo4Zrf7asThqcVv8CjzuY1maPvNmRtSs4jyGh5KZ4AoMbyidJ6Viah1w6TBpaqgUZflpQfNT65ggc",
  MATCHDAY_EXP: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMj0sXPzcxqVjxTRo9pB3sHt_WwJo_CfiBXA7YJC9VZTAarzANPNIxYXuQ1e4QQfU_FoW6pqkbwEYSW9Nt_GcHy4BIdiYNdCToKViLWqH8qw1HQTaGd7w6p9l1n86Ptr8BI6uCaLSoDYWQGafdkI3yK4q8KchUA0Hfb-Sj51cF99j1nvB9zhM7Vpust1feEwIROFqUkGOUtO8LJkYczUEybE-YsgC5R8Jn3L8GW7Dc_kxzPL1gf1bUxLZ_DS1pe-RscKh5xkNzh7Y",
  STORE: "https://lh3.googleusercontent.com/aida-public/AB6AXuAevxV50REKjgHDklfSm2xOwPUKRqYhNommWgxQhwJAoEf_E97AOY8M5UCGpHkbeoIVdWLGo9cBh1-lpgl0gCMASc_QiQcxhVE5ZL__HsJvmC_Rju7mmo0XKLu3lYpdfQUI7y5Rs4OPNAPxKOIO_9UVeEITpxA91as5DKYIsU9oYPYHy5R11P84-ajgAH7ALgxQKKT7_T4ZyMbASbueCP1Zq9H7UtKJJS0eNKxuZtfFF0Zf50-vE05DIy2JjeGPtIeDtbU-Fq6VdIA",
  HIGHLIGHT_1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDVz9mZovxkSemDr2sFHbGeIgB1HHo-THk6N96Y5JJ_wfJpFvw0vDXgvRGlyi_HeKCXjorjdla7JwcxrH1cruzhGMThcU93407vXJ5FBk0kvTxqk_SJBwBpjHo1-Wxt0WqO-ZqrRnEAkmd_cf8YrasbLAsuy8FgmHp04ACjUo17UZl2IHynW0r4D_bNplMmnB1J7MZ1VdBnnGxf0W4rhgact_6EQYgQd-bRDE-C_pvEMUXpw5RtxRJQI8KYoWyr8tpooGqWlrIBY",
  HIGHLIGHT_2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOAu8siMW1CmL3FEAsJPdB-EHrFVXWzAwxz6Ds9hJ_3RcWFzm77iuS0ED4jjNkaWbehLz5ELzntEGYbG7wqSSfDCsBM9L6ZWvv60S8_8z9GgtBv6vNAH4JqutfSHPvpUq8zZljbKODSZOtb2clIO4Guq5UaW2qABfjGntpO4nbyQ9Pz_VSbRXbfu2bm99Kd-bRqDR-luL6POKxm5jtW9Z2EIIZFbrsfw2IKDBk-BU5B5lNIIyd_uNX_iuoy9xB3U5f9CJHyOUnWq8",
  AI_AVATAR: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNmAOj_q0BIAUxRaH672ijGujYZ-1tYCnOO-3nbJ2YkMGqRekSsp5lkJjzqMKyzitI06xiAPz7qI0YE_AAX4awBP7rQsV0Qj4qStEffeJYWHMsEuSaAyUyPEotuCes1bw4VJywuYUCroB_mTe-FNLTvgleNBKau59jhL6NNNwgTm7_vhkXeV4jyhns-628NTuovT3ijKDOJlUSQf7m3CRmsLjpBLCbJxTZZN9bnyIm0I5UiyO9u5uR_ng8dPjo2fZZyZSaBVsWcpk",
  PLAYER_1: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1751292001/editorial/people/ladies/2025-26/Lauren_James_profile_2025-26_avatar-removebg.png",
  PLAYER_2: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1751291919/editorial/people/ladies/2025-26/Guru_Reiten_profile_2025-26_avatar-removebg.png",
  PLAYER_3: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1751292109/editorial/people/ladies/2025-26/Millie_Bright_profile_2025-26_avatar-removebg.png",
  DEVELOPMENT: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo6vjeFJ2Q8jnTqTObOxldgWpt2emWalEMH2yEmjwkUv44iULdbYDJlssAlrhv6SkDJQjCx_C1P4NbeRSsld5mXv2wcgVlG89etTOonEuwBKOtT3idCuAvyRpIFeTQUdaejo0tgKQgtQ2eQbTX_aIVOF6ruQ4tQzx5dsmjEwSqDC75W0fJntMs_Sxm-PVbWUtOf4UbhoWoaPvRpznPm_GiOMLU32F5iJEpjLwt0-yqxV040C1c4goeDSqtlrop9PgDMtw98PQQ2M4",
  TROPHY: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXS7XokPfxSfXVUIiDfUSfK1GMJ-YP1-5ddi9WLAACcZiIGr9u56MDjpSAX8ZWWh6HNgIxP8EMm_ouVG6ZyrNOsakQ1HrQCFRiWFhRZirBB6z602Q_3R-J5tW8LkpNT4QSHGqEn0UuHiEDW2y_xNXwD-DbUMbR99KVkqtDK0XcEXlQcCo8OZvXoPWatotTq7R1eqTvLiN8q-Gx2oCsAvDITaFcEMpoiWEnhuJ-F3qKqAONN-WQHhq50WqArlyQ62ulVMcdjQCBmbI",
  HISTORY_BW: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9JfjoxnCP_Fpp8JvmXdNqt2F-2QWs9jbJxMBWTtFpH7kjBgbPyyA2yUhKn4L8F_yEQBiuxWpA_5uD_HRbUVrBrWnD0ex0E6khbH92_Lu-yLfQqfI6bFV_5WCjWLhjnxcoElzcJ5XUEk7S2TGU-LDNYiXiFQBY_H3HqWU7_yHlBMD1hsLwlogAZwMzvLV-DBFXIaNb9IV-0_vVGm4p55SIPmPvLA19SsiZngupFrg3Ht5a1LSq0UY7LMPQr8DGtRSlcu7MipdQsMU",
  SONIA_BOMPASTOR: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1723470424/editorial/people/ladies/2024-25/Sonia_Bompaster_profile_2024-25_avatar-removebg.png",
  CAMILLE_ABILY: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1767017870/editorial/people/management/2025-26/womens%20team/Chelsea_Women_staff_profile_2025-26_avatar_-_Camille_Abily-removebg.png",
  ERIN_CUTHBERT: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1751291898/editorial/people/ladies/2025-26/Erin_Cuthbert_profile_2025-26_avatar-removebg.png",
  LUCY_BRONZE: "https://img.chelseafc.com/image/upload/q_auto,f_auto,c_fill,g_face,w_600,h_600/v1751292047/editorial/people/ladies/2025-26/Lucy_Bronze_profile_2025-26_avatar-removebg.png",
  ABOUT_HERO_SOURCE: "https://static.independent.co.uk/2023/05/27/17/SEI157956830.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp",
  STADIUM_KM: "https://groundhopperguides.com/wp-content/uploads/2021/11/chelsea-fc-women-4-e1732897919265.jpeg",
  STADIUM_SB: "https://www.eocengineers.com/cdn-cgi/image/format=avif/wp-content/uploads/2022/09/STAMFORD_BRIDGE_LARGE_A.jpg",
  // New Home Page Assets
  HOME_HERO_CINEMATIC: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  MANAGER_CINEMATIC: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  TROPHY_LIFT: 'https://images.unsplash.com/photo-1561595537-8f55979bc6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  CROWD_CINEMATIC: 'https://images.unsplash.com/photo-1504159506876-791895207d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  SOCIAL_1: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  SOCIAL_2: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  SOCIAL_3: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
};

export const SQUAD_DATA: Player[] = [
  {
    id: 'p20',
    name: 'Sam Kerr',
    number: 20,
    position: 'Forward',
    country: 'AUS',
    image: IMAGES.SAM_KERR,
    bio: "One of the world's best strikers. Kerr's movement, heading ability, and finishing are elite. The face of the franchise.",
    stats: { appearances: 110, goals: 90, assists: 25, pace: 87, shooting: 93, passing: 75, dribbling: 84, defending: 45, physical: 80 },
    squadType: 'Senior',
    isStar: true,
    statLine: "12 goals · WSL 24/25"
  },
  {
    id: 'p10',
    name: 'Lauren James',
    number: 10,
    position: 'Forward',
    country: 'ENG',
    image: IMAGES.PLAYER_1,
    bio: "A generational talent. James possesses world-class dribbling, strength, and finishing. She can create a goal out of absolutely nothing.",
    stats: { appearances: 50, goals: 25, assists: 15, pace: 88, shooting: 86, passing: 82, dribbling: 94, defending: 40, physical: 85 },
    squadType: 'Senior',
    statLine: "8 goals · 15 apps"
  },
  {
    id: 'p11',
    name: 'Guro Reiten',
    number: 11,
    position: 'Midfielder',
    country: 'NOR',
    image: IMAGES.PLAYER_2,
    bio: "The Assist Queen. Reiten's left foot is a wand, capable of unlocking any defence with precise crosses and through balls. Also deadly from set-pieces.",
    stats: { appearances: 120, goals: 35, assists: 55, pace: 82, shooting: 80, passing: 92, dribbling: 86, defending: 55, physical: 65 },
    squadType: 'Senior',
    statLine: "6 assists · Norway"
  },
  {
    id: 'p3',
    name: 'Millie Bright',
    number: 4,
    position: 'Defender',
    country: 'ENG',
    image: IMAGES.PLAYER_3,
    bio: "The rock at the heart of the defence. Millie Bright is renowned for her aerial dominance, crunching tackles, and leadership on the pitch.",
    stats: { appearances: 150, goals: 15, assists: 8, pace: 72, shooting: 65, passing: 75, dribbling: 60, defending: 91, physical: 94 },
    squadType: 'Senior',
    statLine: "Captain · England"
  },
  {
    id: 'p22',
    name: 'Lucy Bronze',
    number: 22,
    position: 'Defender',
    country: 'ENG',
    image: IMAGES.LUCY_BRONZE,
    bio: "A living legend of the game. Lucy Bronze joined Chelsea in the summer of 2024, bringing a wealth of experience, winner's mentality, and world-class ability to the backline.",
    stats: { appearances: 5, goals: 1, assists: 2, pace: 80, shooting: 70, passing: 82, dribbling: 78, defending: 88, physical: 85 },
    squadType: 'Senior',
    statLine: "England · 124 caps"
  },
  {
    id: 'p8',
    name: 'Erin Cuthbert',
    number: 8,
    position: 'Midfielder',
    country: 'SCO',
    image: IMAGES.ERIN_CUTHBERT,
    bio: "The engine room. Cuthbert's tenacity and long-range shooting ability have made her a fan favourite. She never stops running.",
    stats: { appearances: 160, goals: 30, assists: 25, pace: 78, shooting: 84, passing: 81, dribbling: 80, defending: 75, physical: 85 },
    squadType: 'Senior',
    statLine: "Scotland · Vice Captain"
  },
  {
    id: 'p24',
    name: 'Hannah Hampton',
    number: 24,
    position: 'Goalkeeper',
    country: 'ENG',
    image: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Hannah_Hampton_profile_2025-26_avatar-removebg.png',
    bio: "One of England's brightest goalkeeping talents, Hampton arrived with a reputation for incredible distribution and shot-stopping ability.",
    stats: { appearances: 10, goals: 0, assists: 1, pace: 50, shooting: 25, passing: 84, dribbling: 45, defending: 80, physical: 72 },
    squadType: 'Senior',
    statLine: "England · GK"
  },
  {
    id: 'u21_2',
    name: 'Lexi Potter',
    number: 42,
    position: 'Midfielder',
    country: 'ENG',
    image: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Lexi_Potter_profile_2025-26_avatar-removebg.png',
    bio: "Technically gifted midfielder, the youngest female player to sign a professional contract with Chelsea.",
    stats: { appearances: 0, goals: 0, assists: 0, pace: 70, shooting: 60, passing: 75, dribbling: 72, defending: 50, physical: 55 },
    squadType: 'U21',
    statLine: "Academy Star"
  },
  {
    id: 'l1',
    name: 'Jorja Fox',
    number: 38,
    position: 'Defender',
    country: 'ENG',
    image: 'https://img.chelseafc.com/image/upload/f_auto,h_860,dpr_2.0,q_50/editorial/people/ladies/2025-26/Jorja_Fox_profile_2025-26_avatar-removebg.png',
    bio: "Talented full-back currently gaining experience on loan at Crystal Palace.",
    stats: { appearances: 5, goals: 0, assists: 1, pace: 75, shooting: 40, passing: 65, dribbling: 68, defending: 70, physical: 65 },
    squadType: 'Loan',
    statLine: "On Loan"
  }
];

export const STAFF_DATA: Player[] = [
  {
    id: 's1',
    name: 'Sonia Bompastor',
    position: 'Head Coach',
    country: 'FRA',
    image: IMAGES.SONIA_BOMPASTOR,
    bio: "Appointed in 2024, Bompastor is a Champions League winner as both player and manager.",
    squadType: 'Staff'
  },
  {
    id: 's2',
    name: 'Camille Abily',
    position: 'Assistant Coach',
    country: 'FRA',
    image: IMAGES.CAMILLE_ABILY,
    bio: "French football legend serving as assistant coach.",
    squadType: 'Staff'
  }
];

export const STORIES_DATA = [
  { id: 1, name: "Training", image: IMAGES.HIGHLIGHT_2, seen: false },
  { id: 2, name: "Matchday", image: IMAGES.MATCHDAY_EXP, seen: false },
  { id: 3, name: "Sam Kerr", image: IMAGES.SAM_KERR, seen: true },
  { id: 4, name: "Academy", image: IMAGES.DEVELOPMENT, seen: true },
];

// --- Treasure Hunt (mobile-first mini-game) ---

/** Synchronized "half-time" / break-time start (ISO string UTC). Demo: 15 Mar 2025 12:00 GMT. */
export const TREASURE_HUNT_BREAK_TIME_UTC = '2025-03-15T12:00:00.000Z';

export const TREASURE_HUNT = {
  BREAK_TIME_LABEL: 'Half-time (synchronized start): 15 Mar 2025, 12:00 GMT',
  CLUE: 'Where do the Blues play at home? Browse chelseafc.com to find the treasure. We’ll detect when you’re on the right page.',
  REWARD_LABEL: 'Membership voucher, gift voucher, or special offer',
} as const;

export interface TreasureQuestion {
  id: string;
  question: string;
  options: { id: string; label: string; correct: boolean }[];
  difficulty: 'easy' | 'medium' | 'hard';
}

/** Three question sets (easy → medium → hard); one wrong = eliminated */
export const TREASURE_QUESTION_SETS: TreasureQuestion[][] = [
  [
    { id: 'a1', question: "In which decade did Chelsea FC win their first league title?", options: [{ id: 'a', label: '1950s', correct: true }, { id: 'b', label: '1960s', correct: false }, { id: 'c', label: '1990s', correct: false }, { id: 'd', label: '2000s', correct: false }], difficulty: 'easy' },
    { id: 'a2', question: "Chelsea Women won the WSL and FA Cup double in the same season. Which year?", options: [{ id: 'a', label: '2015', correct: true }, { id: 'b', label: '2017', correct: false }, { id: 'c', label: '2020', correct: false }, { id: 'd', label: '2022', correct: false }], difficulty: 'medium' },
    { id: 'a3', question: "What is the name of Chelsea's home stadium?", options: [{ id: 'a', label: 'Emirates', correct: false }, { id: 'b', label: 'Stamford Bridge', correct: true }, { id: 'c', label: 'Wembley', correct: false }, { id: 'd', label: 'King Power', correct: false }], difficulty: 'hard' },
  ],
  [
    { id: 'b1', question: "What colour is prominently featured on Chelsea's home kit?", options: [{ id: 'a', label: 'Red', correct: false }, { id: 'b', label: 'Blue', correct: true }, { id: 'c', label: 'White', correct: false }, { id: 'd', label: 'Yellow', correct: false }], difficulty: 'easy' },
    { id: 'b2', question: "Chelsea Men's first Champions League triumph was in which city?", options: [{ id: 'a', label: 'London', correct: false }, { id: 'b', label: 'Munich', correct: true }, { id: 'c', label: 'Manchester', correct: false }, { id: 'd', label: 'Milan', correct: false }], difficulty: 'medium' },
    { id: 'b3', question: "In which year did Chelsea Women complete a domestic quadruple?", options: [{ id: 'a', label: '2020', correct: false }, { id: 'b', label: '2021', correct: true }, { id: 'c', label: '2022', correct: false }, { id: 'd', label: '2023', correct: false }], difficulty: 'hard' },
  ],
  [
    { id: 'c1', question: "Who managed Chelsea Women to their first UEFA Women's Champions League final?", options: [{ id: 'a', label: 'Emma Hayes', correct: true }, { id: 'b', label: 'Casey Stoney', correct: false }, { id: 'c', label: 'Joe Montemurro', correct: false }, { id: 'd', label: 'Marc Skinner', correct: false }], difficulty: 'easy' },
    { id: 'c2', question: "Which Chelsea player scored the winning penalty in the 2012 Champions League final?", options: [{ id: 'a', label: 'Didier Drogba', correct: true }, { id: 'b', label: 'Frank Lampard', correct: false }, { id: 'c', label: 'Petr Čech', correct: false }, { id: 'd', label: 'Juan Mata', correct: false }], difficulty: 'medium' },
    { id: 'c3', question: "Which Chelsea Women player has won the most WSL Golden Boots (as of recent seasons)?", options: [{ id: 'a', label: 'Sam Kerr', correct: true }, { id: 'b', label: 'Fran Kirby', correct: false }, { id: 'c', label: 'Beth England', correct: false }, { id: 'd', label: 'Eni Aluko', correct: false }], difficulty: 'hard' },
  ],
];

export interface LeaderboardEntry {
  rank: number;
  displayName: string;
  score: number;
  totalTimeSec: number;
  completed: boolean;
}

/** Mock leaderboard for prototype */
export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, displayName: 'BlueLion99', score: 100, totalTimeSec: 142, completed: true },
  { rank: 2, displayName: 'CFCW_Fan', score: 100, totalTimeSec: 168, completed: true },
  { rank: 3, displayName: 'Stamford_Sarah', score: 100, totalTimeSec: 195, completed: true },
  { rank: 4, displayName: 'Kerr_No1', score: 100, totalTimeSec: 210, completed: true },
  { rank: 5, displayName: 'Chelsea_Blue', score: 100, totalTimeSec: 233, completed: true },
  { rank: 6, displayName: 'WSL_Supporter', score: 0, totalTimeSec: 0, completed: false },
  { rank: 7, displayName: 'Bridge_Believer', score: 0, totalTimeSec: 0, completed: false },
];

export const SPOTLIGHT_PLAYER = {
  id: 'p10',
  name: 'Lauren James',
  tagline: 'SPOTLIGHT',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};