import { jest, expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'

import { Presenter } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/ConfirmToApproveAudioOutputModal',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

const mockFn = jest.fn(() => console.debug('click'))
export const Visible = Template.bind({})
Visible.args = {
  open: true,
  onConfirm: mockFn,
  onReject: mockFn,
}
Visible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  expect(await canvas.findByRole('dialog')).toBeVisible()

  userEvent.click(canvas.getByRole('button', { name: 'OK' }))
  userEvent.click(canvas.getByRole('button', { name: 'No' }))

  await waitFor(() => expect(mockFn).toBeCalledTimes(2))
  mockFn.mockReset()
}

export const Invisible = Template.bind({})
Invisible.args = {
  open: false,
  onConfirm: mockFn,
  onReject: mockFn,
}
Invisible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  expect(await canvas.queryByRole('dialog')).toBeNull()
}
