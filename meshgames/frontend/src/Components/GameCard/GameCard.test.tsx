import { render, screen } from "@testing-library/react";
import React from 'react';
import GameCard from "./GameCard";
import { MockedProvider } from '@apollo/react-testing';


let mockobject = {
  key: '1', 
  gameId: '1',
  gameName: 'GameName',
  publisher: 'GamePublisher',
  platform: 'GamePlatform',
  genre: 'GameGenre',
  isFavorited: false
};

describe('Test GameCard', () => {
  test('Render a GameCard correctly', () => {
    render(<MockedProvider mocks={[]} addTypename={false}>
      <GameCard {...mockobject}/>
    </MockedProvider>);

    expect(screen.getByText('GameName')).toBeInTheDocument();
    expect(screen.getByText('GamePublisher')).toBeInTheDocument();
    expect(screen.getByTestId('InfoButton')).toBeInTheDocument();
    expect(screen.getByTestId('favoriteIcon')).toBeInTheDocument();
  });
});

