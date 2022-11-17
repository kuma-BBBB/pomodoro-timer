import { VStack } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof VStack> = {
  title: 'atoms/VStack',
  component: VStack,
}
export default meta

type Story = ComponentStoryObj<typeof VStack>

const MockItem = () => (
  <div data-testid="mock-item" className="py-2 bg-gray-300">
    <p className="text-center">item</p>
  </div>
)
const mockClassName = 'h-96 p-2 border-2 border-orange-400 rounded-md w-1/4'

export const FlexStart: Story = {
  name: '上寄せ表示の場合',
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
  name: '下寄せ表示の場合',
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
  name: '中央よせ表示の場合',
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
  name: '上下端寄せの場合',
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
  name: 'around表示の場合',
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
