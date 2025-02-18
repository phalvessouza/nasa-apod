// src/components/ApodImage.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ApodImage from './ApodImage';

test('renders image with correct src and alt', () => {
  const { getByAltText } = render(<ApodImage url="test-url" title="Test Title" />);
  const imgElement = getByAltText(/Test Title/i);
  expect(imgElement).toHaveAttribute('src', 'test-url');
});