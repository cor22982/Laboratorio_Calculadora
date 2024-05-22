import Button from './Button'
import { fn } from '@storybook/test'


const meta = {
  component: Button
}

export default meta

export const Default = {
  args: {
    text: '0',
    onClick: fn(),
    tipo: 'operador'
  }
}