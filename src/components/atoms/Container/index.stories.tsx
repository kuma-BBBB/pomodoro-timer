import { Container } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Container> = {
  title: 'atoms/Container',
  component: Container,
}
export default meta

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: <h1>Container</h1>,
}
