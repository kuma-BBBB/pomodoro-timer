import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

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

const MockItem = () => (
  <div data-testid="mock-item" className="w-2/12 py-2 bg-gray-400">
    <p className="text-center">item</p>
  </div>
)
export const Default = Template.bind({})
Default.args = {
  children: <MockItem />,
}
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}
