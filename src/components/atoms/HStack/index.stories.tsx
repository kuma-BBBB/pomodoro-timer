import { HStack } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof HStack> = {
  title: 'atoms/HStack',
  component: HStack,
}
export default meta

type Story = ComponentStoryObj<typeof HStack>

const MockItem = () => (
  <div data-testid="mock-item" className="w-2/12 py-2 bg-gray-400">
    <p className="text-center">item</p>
  </div>
)
const mockClassName = 'p-2 border-2 border-orange-400 rounded-md'

export const FlexStart: Story = {
  name: '左寄せ表示の場合',
  args: {
    className: mockClassName,
    justifyContent: 'start',
    children: (
      <>
        <MockItem />
        <MockItem />
      </>
    ),
  },
}

export const FlexEnd: Story = {
  name: '右寄せ表示の場合',
  args: {
    className: mockClassName,
    justifyContent: 'end',
    children: (
      <>
        <MockItem />
        <MockItem />
      </>
    ),
  },
}

export const Center: Story = {
  name: '中央表示の場合',
  args: {
    className: mockClassName,
    justifyContent: 'center',
    children: (
      <>
        <MockItem />
        <MockItem />
      </>
    ),
  },
}

export const Between: Story = {
  name: '両端寄せの場合',
  args: {
    className: mockClassName,
    justifyContent: 'between',
    children: (
      <>
        <MockItem />
        <MockItem />
      </>
    ),
  },
}

export const Around: Story = {
  name: 'around表示',
  args: {
    className: mockClassName,
    justifyContent: 'around',
    children: (
      <>
        <MockItem />
        <MockItem />
      </>
    ),
  },
}
