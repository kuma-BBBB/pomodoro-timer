import { VStack } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof VStack> = {
  title: 'atoms/VStack',
  component: VStack,
}
export default meta

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <p>1</p>
      <p>2</p>
    </>
  ),
}
