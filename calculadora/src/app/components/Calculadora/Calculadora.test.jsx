// src/app/components/Calculadora/Calculadora.test.jsx
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculadora from './Calculadora';

test('renders correctly', () => {
  render(<Calculadora />);
});

//<div data-testid="resultado"></div>
test('add two numbers',  async () => {
  render(<Calculadora />);
  const number1 = await screen.findByText('1')
  const number2 = await screen.findByText('2')
  const simbol =  await screen.findByText('+')
  const equals =  await screen.findByText('=')
  const result =  await screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })

  await act(async () => {
    equals.click()
  })
  expect(result.textContent).toBe('3');
});

test('negative-number',  async () => {
  render(<Calculadora />);
  const number1 = await screen.findByText('1')
  const number2 = await screen.findByText('2')
  const simbol =  await screen.findByText('-')
  const equals =  await screen.findByText('=')
  const result = await screen.getByTestId('resultado');
  await act(async () => {
    number1.click()
  })
  await act(async () => {
    simbol.click()
  })
  await act(async () => {
    number2.click()
  })
  await act(async () => {
    equals.click()
  })
  expect(result.textContent).toBe('ERROR');
});


test('size-number', async () => {
  render(<Calculadora />);
  const number1 = await screen.findByText('9');
  const result = await screen.findByTestId('resultado');
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
    number1.click()
  })
  expect(result.textContent.length).toBe(9);
});


test('over-operation',  async () => {
  render(<Calculadora />);
  const number1 = await screen.findByText('9')
  const number2 = await screen.findByText('4')
  const simbol =  await screen.findByText('+')
  const equals =  await screen.findByText('=')
  const result =  await screen.getByTestId('resultado');
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

  await act(async () => {
    equals.click()
  })
  expect(result.textContent).toBe('ERROR');
});
