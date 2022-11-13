import { expect, jest } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { IconButton } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
}
export default meta

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

const mockFnForDefault = jest.fn(() => console.debug('click'))
export const Default = Template.bind({})
Default.args = {
  children: (
    <span className="material-icons-outlined font-gradient !text-4xl">
      play_circle_filled
    </span>
  ),
  onClick: mockFnForDefault,
}
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  expect(await canvas.findByText('play_circle_filled')).toBeVisible()
  await waitFor(() => expect(mockFnForDefault).toBeCalled())
  mockFnForDefault.mockReset()
}
