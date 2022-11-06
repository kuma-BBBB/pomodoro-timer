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

export const Default = Template.bind({})
Default.args = {
  children: (
    <span className="material-icons-outlined !text-4xl font-gradient">
      play_circle_filled
    </span>
  ),
  onClick: () => {
    console.log('click')
  },
}
