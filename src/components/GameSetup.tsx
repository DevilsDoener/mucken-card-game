import React, { useState } from 'react';
import styled from 'styled-components';

const SetupContainer = styled.div`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #ffd700;
  font-size: 1.1rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffd700;
  }
`;

const StartButton = styled.button`
  background-color: #ffd700;
  color: #1a1a1a;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffed4a;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

interface GameSetupProps {
  onGameStart: (players: string[]) => void;
}

export const GameSetup: React.FC<GameSetupProps> = ({ onGameStart }) => {
  const [playerNames, setPlayerNames] = useState(['', '', '', '']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerNames.every(name => name.trim() !== '')) {
      onGameStart(playerNames);
    }
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
  };

  const isValid = playerNames.every(name => name.trim() !== '');

  return (
    <SetupContainer>
      <Form onSubmit={handleSubmit}>
        {playerNames.map((name, index) => (
          <InputGroup key={index}>
            <Label>Player {index + 1}</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder={`Enter Player ${index + 1}'s name`}
              required
            />
          </InputGroup>
        ))}
        <StartButton type="submit" disabled={!isValid}>
          Start Game
        </StartButton>
      </Form>
    </SetupContainer>
  );
}; 