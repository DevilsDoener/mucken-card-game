export type Suit = 'Eichel' | 'Gras' | 'Herz' | 'Schellen';
export type Rank = 'A' | '10' | 'K' | 'O' | 'U' | '9';

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number;
}

export type GameType = 'Muck' | 'Wenz' | 'Geier' | 'Ramsch';

export interface Player {
  name: string;
  hand: Card[];
  tricks: Card[][];
  score: number;
}

export interface GameState {
  players: Player[];
  currentPlayer: number;
  gameType: GameType;
  deck: Card[];
  currentTrick: Card[];
  gamePhase: 'bidding' | 'playing' | 'finished';
  scores: number[];
  currentBidder: number;
  lastBid: GameType | null;
} 