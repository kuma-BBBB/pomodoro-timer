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

export const Default = Template.bind({})
Default.args = {
  children: <h1>BackDrop</h1>,
  open: true,
}
