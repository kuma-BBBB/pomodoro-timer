import { Container } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof Container> = {
  title: 'atoms/Container',
  component: Container,
}
export default meta

type Story = ComponentStoryObj<typeof Container>

const MockItem = () => (
  <div data-testid="mock-item" className="w-2/12 py-2 bg-gray-400">
    <p className="text-center">item</p>
  </div>
)

export const Default: Story = {
  name: 'components/atoms/Container',
  args: {
    children: <MockItem />,
  },
}
