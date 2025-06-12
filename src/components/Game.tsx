import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, GameState, GameType, Player } from '../types/game';
import { createDeck, dealCards, initializeGame } from '../utils/gameUtils';
import { GameBoard } from './GameBoard';
import { BiddingPhase } from './BiddingPhase';

const GameContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

interface GameProps {
  players: string[];
}

export const Game: React.FC<GameProps> = ({ players }) => {
  const [gameState, setGameState] = useState<GameState>(() => 
    initializeGame(players)
  );

  const handleBid = (gameType: GameType) => {
    setGameState(prev => ({
      ...prev,
      gameType,
      gamePhase: 'playing',
      currentPlayer: prev.currentBidder
    }));
  };

  const handleCardPlay = (card: Card) => {
    setGameState(prev => {
      const newState = { ...prev };
      const currentPlayer = newState.players[prev.currentPlayer];
      
      // Remove card from player's hand
      currentPlayer.hand = currentPlayer.hand.filter(
        c => !(c.suit === card.suit && c.rank === card.rank)
      );

      // Add card to current trick
      newState.currentTrick.push(card);

      // If trick is complete, evaluate it
      if (newState.currentTrick.length === 4) {
        // TODO: Implement trick evaluation
        newState.currentTrick = [];
      }

      // Move to next player
      newState.currentPlayer = (prev.currentPlayer + 1) % 4;

      return newState;
    });
  };

  return (
    <GameContainer>
      {gameState.gamePhase === 'bidding' ? (
        <BiddingPhase
          currentPlayer={gameState.currentBidder}
          players={gameState.players}
          onBid={handleBid}
        />
      ) : (
        <GameBoard
          gameState={gameState}
          onCardPlay={handleCardPlay}
        />
      )}
    </GameContainer>
  );
}; 