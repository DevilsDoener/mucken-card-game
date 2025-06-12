# Mucken Card Game

A web-based implementation of the traditional German card game Mucken, played primarily in (North-East) Upper Franconia.

## Description

Mucken is a card game for four players (in the "Sechsermuck" variant also for six), similar to Schafkopf. The game is played with the short Bavarian/Franconian deck (24 cards) and involves two teams of two players each.

## Features

- Four-player game implementation
- Support for different game types (Muck, Wenz, Geier, Ramsch)
- Modern, responsive UI
- Card animations and visual feedback
- Score tracking

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mucken-card-game.git
cd mucken-card-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The game will open in your default browser at `http://localhost:3000`.

## How to Play

1. Enter the names of all four players
2. The game will start with the bidding phase
3. Players take turns choosing the game type
4. Once a game type is selected, players take turns playing cards
5. Follow the rules of the selected game type:
   - Muck: All Ober, Unter, and red cards are trump
   - Wenz: Only Unter are trump
   - Geier: Only Ober are trump
   - Ramsch: Play to avoid taking tricks

## Game Rules

### Card Values
- Ace (Sau/Daus): 11 points
- Ten: 10 points
- King: 4 points
- Ober: 3 points
- Unter: 2 points
- Nine: 0 points

### Basic Rules
- Players must follow suit if possible
- Trump cards can be played at any time
- The highest trump card wins the trick
- If no trump is played, the highest card of the led suit wins
- The team that takes the trick leads the next one

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 