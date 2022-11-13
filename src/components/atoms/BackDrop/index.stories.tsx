import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { BackDrop } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof BackDrop> = {
  title: 'atoms/BackDrop',
  component: BackDrop,
}
export default meta

const Template: ComponentStory<typeof BackDrop> = (args) => (
  <BackDrop {...args} />
)

const Children = () => (
  <div
    role="dialog"
    className="bg-white p-8 md:w-1/2 md:max-w-md max-md:w-11/12 rounded-md shadow-md"
  >
    <p className="text-center">Children</p>
  </div>
)

export const Visible = Template.bind({})
Visible.args = {
  open: true,
  children: <Children />,
}
Visible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  expect(await canvas.findByRole('none')).toBeVisible()
  expect(await canvas.findByRole('dialog')).toBeVisible()
}

export const Invisible = Template.bind({})
Invisible.args = {
  open: false,
  children: <Children />,
}
Invisible.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  expect(await canvas.queryByRole('none')).toBeNull()
  expect(await canvas.queryByRole('dialog')).toBeNull()
}
