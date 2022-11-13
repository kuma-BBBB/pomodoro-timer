import { expect, jest } from '@storybook/jest'
import { userEvent, within, waitFor } from '@storybook/testing-library'

import { Presenter } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/Timer',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

const mockFnForMutedTimer = jest.fn(() => console.debug('click'))
export const MutedTimer = Template.bind({})
MutedTimer.args = {
  time: '00:00',
  muted: true,
  onStart: mockFnForMutedTimer,
  onStop: mockFnForMutedTimer,
  onToggleMuted: mockFnForMutedTimer,
}
MutedTimer.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const timerDisplay = await canvas.findByText('00:00')
  expect(timerDisplay).toBeVisible()

  userEvent.click(canvas.getByRole('button', { name: 'play' }))
  userEvent.click(canvas.getByRole('button', { name: 'pause' }))
  userEvent.click(canvas.getByRole('button', { name: 'mute' }))

  await waitFor(() => expect(mockFnForMutedTimer).toBeCalledTimes(3))
  mockFnForMutedTimer.mockReset()
}

const mockFnForUnmutedTimer = jest.fn(() => console.debug('click'))
export const UnmutedTimer = Template.bind({})
UnmutedTimer.args = {
  time: '00:00',
  muted: false,
  onStart: mockFnForUnmutedTimer,
  onStop: mockFnForUnmutedTimer,
  onToggleMuted: mockFnForUnmutedTimer,
}
UnmutedTimer.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const timerDisplay = await canvas.findByText('00:00')
  expect(timerDisplay).toBeVisible()

  userEvent.click(canvas.getByRole('button', { name: 'play' }))
  userEvent.click(canvas.getByRole('button', { name: 'pause' }))
  userEvent.click(canvas.getByRole('button', { name: 'unmute' }))

  await waitFor(() => expect(mockFnForUnmutedTimer).toBeCalledTimes(3))
  mockFnForUnmutedTimer.mockReset()
}
