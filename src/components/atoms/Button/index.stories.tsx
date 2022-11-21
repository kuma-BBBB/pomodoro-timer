import { userEvent, within } from '@storybook/testing-library'

import { Button } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
}
export default meta

type Story = ComponentStoryObj<typeof Button>

export const Default: Story = {
  name: 'スタイルなしのボタン',
  args: {
    children: 'default',
    onClick: () => console.debug('click'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByRole('button'))
  },
}

export const Primary: Story = {
  name: 'Primaryスタイルのボタン',
  args: {
    children: 'primary',
    btnType: 'btn-primary',
    onClick: () => console.debug('click'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByRole('button'))
  },
}

export const Secondary: Story = {
  name: 'Secondaryスタイルのボタン',
  args: {
    children: 'secondary',
    btnType: 'btn-secondary',
    onClick: () => console.debug('click'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByRole('button'))
  },
}
