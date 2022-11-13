import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

import { HStack } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof HStack> = {
  title: 'atoms/HStack',
  component: HStack,
}
export default meta

const Template: ComponentStory<typeof HStack> = (args) => <HStack {...args} />

const MockItem = () => (
  <div data-testid="mock-item" className="w-2/12 py-2 bg-gray-400">
    <p className="text-center">item</p>
  </div>
)
const mockClassName = 'p-2 border-2 border-orange-400 rounded-md'

export const FlexStart = Template.bind({})
FlexStart.args = {
  className: mockClassName,
  justifyContent: 'start',
  children: (
    <>
      <MockItem />
      <MockItem />
    </>
  ),
}
FlexStart.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}

export const FlexEnd = Template.bind({})
FlexEnd.args = {
  className: mockClassName,
  justifyContent: 'end',
  children: (
    <>
      <MockItem />
      <MockItem />
    </>
  ),
}
FlexEnd.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}

export const Center = Template.bind({})
Center.args = {
  className: mockClassName,
  justifyContent: 'center',
  children: (
    <>
      <MockItem />
      <MockItem />
    </>
  ),
}
Center.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}

export const Between = Template.bind({})
Between.args = {
  className: mockClassName,
  justifyContent: 'between',
  children: (
    <>
      <MockItem />
      <MockItem />
    </>
  ),
}
Between.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}

export const Around = Template.bind({})
Around.args = {
  className: mockClassName,
  justifyContent: 'around',
  children: (
    <>
      <MockItem />
      <MockItem />
    </>
  ),
}
Around.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const elements = await canvas.queryAllByTestId('mock-item')
  expect(elements).not.toBeNull()
}
