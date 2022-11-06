import { zodResolver } from '@hookform/resolvers/zod'

import { Presenter, schema } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/TimeForm',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onSubmit: () => {
    console.log('submit')
  },
  resolver: zodResolver(schema),
}
