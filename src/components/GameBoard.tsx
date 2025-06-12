import React from 'react';
import styled from 'styled-components';
import { Card, GameState } from '../types/game';
import { PlayingCard } from './PlayingCard';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const PlayerArea = styled.div<{ position: 'top' | 'right' | 'bottom' | 'left' }>`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-height: 150px;
`;

const CenterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  position: relative;
`;

const CurrentTrick = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GameInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  color: #ffd700;
`;

interface GameBoardProps {
  gameState: GameState;
  onCardPlay: (card: Card) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState, onCardPlay }) => {
  const { players, currentPlayer, currentTrick, gameType } = gameState;

  const renderPlayerHand = (playerIndex: number) => {
    const player = players[playerIndex];
    const isCurrentPlayer = playerIndex === currentPlayer;

    return (
      <PlayerArea
        position={getPlayerPosition(playerIndex)}
        style={{
          opacity: isCurrentPlayer ? 1 : 0.7,
          cursor: isCurrentPlayer ? 'pointer' : 'default'
        }}
      >
        {player.hand.map((card, index) => (
          <PlayingCard
            key={`${card.suit}-${card.rank}`}
            card={card}
            onClick={() => isCurrentPlayer && onCardPlay(card)}
            disabled={!isCurrentPlayer}
          />
        ))}
      </PlayerArea>
    );
  };

  return (
    <BoardContainer>
      <GameInfo>
        Current Game: {gameType} - {players[currentPlayer].name}'s turn
      </GameInfo>
      {renderPlayerHand(1)} {/* Top player */}
      <CenterArea>
        <CurrentTrick>
          {currentTrick.map((card, index) => (
            <PlayingCard
              key={`trick-${index}`}
              card={card}
              disabled
            />
          ))}
        </CurrentTrick>
      </CenterArea>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {renderPlayerHand(0)} {/* Left player */}
        {renderPlayerHand(2)} {/* Right player */}
      </div>
      {renderPlayerHand(3)} {/* Bottom player */}
    </BoardContainer>
  );
};

function getPlayerPosition(index: number): 'top' | 'right' | 'bottom' | 'left' {
  switch (index) {
    case 0: return 'left';
    case 1: return 'top';
    case 2: return 'right';
    case 3: return 'bottom';
    default: return 'bottom';
  }
} 