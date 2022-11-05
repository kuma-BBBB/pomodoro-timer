import { Button } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
}
export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'ボタン',
  onClick: () => {
    console.log('click')
  },
}
