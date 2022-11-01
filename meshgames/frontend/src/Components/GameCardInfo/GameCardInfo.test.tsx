import { render, screen } from "@testing-library/react";
import React from 'react';
import GameCardInfo from "./GameCardInfo";
import { MockedProvider } from '@apollo/react-testing';
import userEvent from "@testing-library/user-event";


let mockobject = {
    gameNameInfo: 'GameName',
    publisherInfo: 'GamePublisher',
    platformInfo: 'GamePlatform',
    genreInfo: 'GameGenre',
};

describe('Test GameCardInfo', () => {
  test('Render a GameCardInfo correctly', () => {
    render(<MockedProvider mocks={[]} addTypename={false}>
      <GameCardInfo {...mockobject}/>
    </MockedProvider>);

    const infoButton = screen.getByTestId('InfoButton');
    expect(infoButton).toBeInTheDocument();

    expect(screen.queryByText('Game information:')).not.toBeInTheDocument();

    userEvent.click(infoButton);

    expect(screen.getByText('Game information:')).toBeInTheDocument();
  });
});