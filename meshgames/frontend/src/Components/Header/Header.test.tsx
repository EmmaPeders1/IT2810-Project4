import { render } from "@testing-library/react";
import React from 'react';
import Header from './Header';

test('Check if header is not empty', () => {
  const {container} = render(<Header />);
  expect(container).toBeInTheDocument();
  expect(container).toMatchSnapshot();
  expect(container.textContent).toBe("MeshGames");
})
