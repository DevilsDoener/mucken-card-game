import React from 'react';
import styled from 'styled-components';
import { Card } from '../types/game';

const CardContainer = styled.div<{ disabled: boolean }>`
  width: 100px;
  height: 140px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-10px)'};
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardFooter = styled(CardHeader)`
  transform: rotate(180deg);
`;

const CardValue = styled.span<{ color: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => props.color};
`;

const CardSuit = styled.span<{ color: string }>`
  font-size: 1.2rem;
  color: ${props => props.color};
`;

const CardCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

interface PlayingCardProps {
  card: Card;
  onClick?: () => void;
  disabled?: boolean;
}

const SUIT_SYMBOLS: Record<string, string> = {
  'Eichel': '♣',
  'Gras': '♠',
  'Herz': '♥',
  'Schellen': '♦'
};

const SUIT_COLORS: Record<string, string> = {
  'Eichel': 'black',
  'Gras': 'black',
  'Herz': 'red',
  'Schellen': 'red'
};

export const PlayingCard: React.FC<PlayingCardProps> = ({
  card,
  onClick,
  disabled = false
}) => {
  const { suit, rank } = card;
  const color = SUIT_COLORS[suit];
  const symbol = SUIT_SYMBOLS[suit];

  return (
    <CardContainer
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <CardHeader>
        <CardValue color={color}>{rank}</CardValue>
        <CardSuit color={color}>{symbol}</CardSuit>
      </CardHeader>
      <CardCenter style={{ color }}>
        {symbol}
      </CardCenter>
      <CardFooter>
        <CardValue color={color}>{rank}</CardValue>
        <CardSuit color={color}>{symbol}</CardSuit>
      </CardFooter>
    </CardContainer>
  );
}; 