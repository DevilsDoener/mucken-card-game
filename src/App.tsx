import React, { useState } from 'react';
import styled from 'styled-components';
import { Game } from './components/Game';
import { GameSetup } from './components/GameSetup';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #ffd700;
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
`;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);

  const handleGameStart = (playerNames: string[]) => {
    setPlayers(playerNames);
    setGameStarted(true);
  };

  return (
    <AppContainer>
      <Title>Mucken Card Game</Title>
      {!gameStarted ? (
        <GameSetup onGameStart={handleGameStart} />
      ) : (
        <Game players={players} />
      )}
    </AppContainer>
  );
}

export default App; 