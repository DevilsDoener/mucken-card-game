import { Card, GameState, Player, Suit, Rank } from '../types/game';

const CARD_VALUES: Record<Rank, number> = {
  'A': 11,
  '10': 10,
  'K': 4,
  'O': 3,
  'U': 2,
  '9': 0
};

const SUITS: Suit[] = ['Eichel', 'Gras', 'Herz', 'Schellen'];
const RANKS: Rank[] = ['A', '10', 'K', 'O', 'U', '9'];

export function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        suit,
        rank,
        value: CARD_VALUES[rank]
      });
    }
  }
  return shuffleDeck(deck);
}

function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function dealCards(deck: Card[]): Card[][] {
  const hands: Card[][] = [[], [], [], []];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      hands[j].push(deck[i * 4 + j]);
    }
  }
  return hands;
}

export function initializeGame(playerNames: string[]): GameState {
  const deck = createDeck();
  const hands = dealCards(deck);
  
  const players: Player[] = playerNames.map((name, index) => ({
    name,
    hand: hands[index],
    tricks: [],
    score: 0
  }));

  return {
    players,
    currentPlayer: 0,
    gameType: 'Muck',
    deck: deck.slice(24), // Remaining cards
    currentTrick: [],
    gamePhase: 'bidding',
    scores: [0, 0],
    currentBidder: 0,
    lastBid: null
  };
}

export function isCardPlayable(card: Card, hand: Card[], currentTrick: Card[], gameType: string): boolean {
  if (currentTrick.length === 0) {
    return true;
  }

  const leadSuit = currentTrick[0].suit;
  const hasLeadSuit = hand.some(c => c.suit === leadSuit);

  if (hasLeadSuit) {
    return card.suit === leadSuit;
  }

  return true;
}

export function evaluateTrick(trick: Card[], gameType: string): number {
  // TODO: Implement trick evaluation based on game type
  return 0;
} 