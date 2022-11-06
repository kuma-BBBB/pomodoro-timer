import { Presenter } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/Timer',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  time: '00:00',
  onStart: () => {
    console.log('start')
  },
  onStop: () => {
    console.log('stop')
  },
}
