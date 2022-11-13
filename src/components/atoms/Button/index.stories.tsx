import { expect, jest } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { Button } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
}
export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

const mockFnForDefault = jest.fn(() => console.log('default'))
export const Default = Template.bind({})
Default.args = {
  children: 'default',
  onClick: mockFnForDefault,
}
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  expect(await canvas.findByText('default')).toBeVisible()
  await waitFor(() => expect(mockFnForDefault).toBeCalled())
  mockFnForDefault.mockReset()
}
const mockFnForPrimary = jest.fn(() => console.log('primary'))
export const Primary = Template.bind({})
Primary.args = {
  children: 'primary',
  onClick: mockFnForPrimary,
  btnType: 'btn-primary',
}
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  expect(await canvas.findByText('primary')).toBeVisible()
  await waitFor(() => expect(mockFnForPrimary).toBeCalled())
  mockFnForPrimary.mockReset()
}
const mockFnForSecondary = jest.fn(() => console.log('secondary'))
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'secondary',
  onClick: mockFnForSecondary,
  btnType: 'btn-secondary',
}
Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole('button'))
  expect(await canvas.findByText('secondary')).toBeVisible()
  await waitFor(() => expect(mockFnForSecondary).toBeCalled())
  mockFnForSecondary.mockReset()
}
