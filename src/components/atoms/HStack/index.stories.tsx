import { HStack } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof HStack> = {
  title: 'atoms/HStack',
  component: HStack,
}
export default meta

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <p>1</p>
      <p>2</p>
    </>
  ),
}
