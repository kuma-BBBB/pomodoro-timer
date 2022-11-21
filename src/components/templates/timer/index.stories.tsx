import { TimerTemplate } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof TimerTemplate> = {
  title: 'template/timer',
  component: TimerTemplate,
}
export default meta

type Story = ComponentStoryObj<typeof TimerTemplate>

export const Default: Story = {
  name: '通常時',
}
