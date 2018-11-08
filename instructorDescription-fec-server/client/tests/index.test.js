import React from 'react';
import Instructor from '../components/instructor.js';
import { cleanup, render, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from '../app.js';

afterEach(cleanup);

describe('Instructor Card', () => {
  test('renders to the document', () => {
    render(<Instructor />);
  })
})
