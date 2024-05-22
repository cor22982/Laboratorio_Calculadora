// src/app/components/Calculadora/Calculadora.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculadora from './Calculadora';

test('renders correctly', () => {
  render(<Calculadora />);
});

//<div data-testid="resultado"></div>
test('add two numbers',  async () => {
  const number1 = screen.getByText('1')
  const number2 = screen.getByText('2')
  const simbol = screen.getByText('+')
  const result = screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })
  expect(result.textContent).toBe('3');
});

test('negative-number',  async () => {
  const number1 = screen.getByText('1')
  const number2 = screen.getByText('2')
  const simbol = screen.getByText('-')
  const result = screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })
  expect(result.textContent).toBe('ERROR');
});


test('size-number',  async () => {
  const number1 = screen.getByText('9')
  const result = screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  expect(result.textContent).toBe('999999999');
});

test('over-operation',  async () => {
  const number1 = screen.getByText('9')
  const number2 = screen.getByText('4')
  const simbol = screen.getByText('+')
  const result = screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })
  expect(result.textContent).toBe('ERROR');
});

test('negative-number',  async () => {
  const number1 = screen.getByText('22')
  const number2 = screen.getByText('7')
  const simbol = screen.getByText('/')
  const result = screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })
  expect(result.textContent.length).toBe(9);
});