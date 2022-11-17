import { BackDrop } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

type Story = ComponentStoryObj<typeof BackDrop>

const meta: ComponentMeta<typeof BackDrop> = {
  title: 'atoms/BackDrop',
  component: BackDrop,
}
export default meta

const Children = () => (
  <div
    role="dialog"
    className="bg-white p-8 md:w-1/2 md:max-w-md max-md:w-11/12 rounded-md shadow-md"
  >
    <p className="text-center">Children</p>
  </div>
)

export const Visible: Story = {
  name: '表示されている時',
  args: {
    open: true,
    children: <Children />,
  },
}

export const Invisible: Story = {
  name: '表示されていない時',
  args: {
    open: false,
    children: <Children />,
  },
}
