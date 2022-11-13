import { zodResolver } from '@hookform/resolvers/zod'
import { jest, expect } from '@storybook/jest'
import { within, userEvent, waitFor } from '@storybook/testing-library'

import { Presenter, schema } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/TimeForm',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

const mockFnForEmptyForm = jest.fn()
export const EmptyForm = Template.bind({})
EmptyForm.args = {
  onSubmit: mockFnForEmptyForm,
  resolver: zodResolver(schema),
}
EmptyForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
  userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
  userEvent.click(canvas.getByRole('button'))

  await waitFor(() => expect(mockFnForEmptyForm).not.toBeCalled())
  mockFnForEmptyForm.mockReset()
}

const mockFnForFilledForm = jest.fn()
export const FilledForm = Template.bind({})
FilledForm.args = {
  onSubmit: mockFnForFilledForm,
  resolver: zodResolver(schema),
}
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
  userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
  userEvent.type(canvas.getByRole('spinbutton', { name: 'seconds' }), '59')
  userEvent.type(canvas.getByRole('spinbutton', { name: 'minutes' }), '3')
  userEvent.click(canvas.getByRole('button'))

  const minutes = await canvas.findByDisplayValue('3')
  await expect(minutes).toBeVisible()
  const seconds = await canvas.findByDisplayValue('59')
  await expect(seconds).toBeVisible()

  await waitFor(() => expect(mockFnForFilledForm).toBeCalled())
  mockFnForFilledForm.mockReset()
}
