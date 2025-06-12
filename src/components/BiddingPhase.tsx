import React from 'react';
import styled from 'styled-components';
import { GameType, Player } from '../types/game';

const BiddingContainer = styled.div`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ffd700;
  text-align: center;
  margin-bottom: 30px;
`;

const GameTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const GameTypeButton = styled.button`
  background-color: #333;
  color: white;
  padding: 15px;
  border: 2px solid #444;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #444;
    border-color: #ffd700;
  }

  &:disabled {
    background-color: #222;
    border-color: #333;
    color: #666;
    cursor: not-allowed;
  }
`;

const CurrentPlayer = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #ffd700;
  margin-bottom: 20px;
`;

interface BiddingPhaseProps {
  currentPlayer: number;
  players: Player[];
  onBid: (gameType: GameType) => void;
}

const GAME_TYPES: GameType[] = ['Muck', 'Wenz', 'Geier', 'Ramsch'];

export const BiddingPhase: React.FC<BiddingPhaseProps> = ({
  currentPlayer,
  players,
  onBid
}) => {
  return (
    <BiddingContainer>
      <Title>Choose Game Type</Title>
      <CurrentPlayer>
        {players[currentPlayer].name}'s turn to bid
      </CurrentPlayer>
      <GameTypeGrid>
        {GAME_TYPES.map((gameType) => (
          <GameTypeButton
            key={gameType}
            onClick={() => onBid(gameType)}
          >
            {gameType}
          </GameTypeButton>
        ))}
      </GameTypeGrid>
    </BiddingContainer>
  );
}; 