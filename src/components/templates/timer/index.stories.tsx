import { Presenter } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'template/timer',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  duration: 5000,
  setTime: (_) => {
    console.log('set time')
  },
}
