import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from 'react';
import GameCard from "./GameCard";

let mockobject = {
  key: '1', gameId: '1',
  gameName: 'GameName',
  publisher: 'GamePublisher',
  platform: 'GamePlatform',
  genre: 'GameGenre',
  isFavorited: false
};


describe('Test GameCard', () => {
  test('Render a GameCard correctly', () => {
    render(<GameCard {...mockobject} />);
    expect(screen.getByText('GameName')).toBeInTheDocument();
    expect(screen.getByText('GamePublisher')).toBeInTheDocument();
  });

  test('Expand body button', () => {
    render(<GameCard {...mockobject} />);
    const expandButton = screen.getByTestId('ExpandMoreButton');
    expect(expandButton).toBeInTheDocument();
    expect(expandButton.getAttribute("aria-expanded")).toBe("false");

    userEvent.click(expandButton);
    expect(expandButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByText('Genre: GameGenre')).toBeInTheDocument();
    expect(screen.getByText('Platform: GamePlatform')).toBeInTheDocument();
  });

});

