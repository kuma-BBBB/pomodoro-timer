import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './'

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'ボタン',
  onClick: () => {
    console.log('click')
  },
}
