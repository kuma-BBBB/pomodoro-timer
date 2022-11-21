import { userEvent, within } from '@storybook/testing-library'

import { IconButton } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
}
export default meta

type Story = ComponentStoryObj<typeof IconButton>

export const Default: Story = {
  name: 'Default',
  args: {
    children: (
      <span className="material-icons-outlined font-gradient !text-4xl">
        play_circle_filled
      </span>
    ),
    onClick: () => console.debug('click!'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByRole('button'))
  },
}
