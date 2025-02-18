// src/components/ApodTitle.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ApodTitle from './ApodTitle';

test('renders title', () => {
  const { getByText } = render(<ApodTitle title="Test Title" />);
  const titleElement = getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});
