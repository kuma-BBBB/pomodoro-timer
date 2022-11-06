import { Button } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
}
export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'primary',
  onClick: () => {
    console.log('primary')
  },
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'primary',
  onClick: () => {
    console.log('primary')
  },
  btnType: 'btn-primary',
}
export const Outline = Template.bind({})
Outline.args = {
  children: 'outline',
  onClick: () => {
    console.log('outline')
  },
  btnType: 'btn-outline',
}
