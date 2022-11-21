import { within, userEvent } from '@storybook/testing-library'

import { FormForTimer } from '.'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof FormForTimer> = {
  title: 'organisms/FormForTimer',
  component: FormForTimer,
}
export default meta

type Story = ComponentStoryObj<typeof FormForTimer>

export const EmptyForm: Story = {
  name: 'フォーム未入力の場合',
  args: {
    setTime: (num: number) => console.debug(num),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
    userEvent.click(canvas.getByRole('button'))
  },
}

export const FillAll: Story = {
  name: '全項目入力の場合',
  args: {
    setTime: (num: number) => console.debug(num),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
    userEvent.type(canvas.getByRole('spinbutton', { name: 'seconds' }), '59')
    userEvent.type(canvas.getByRole('spinbutton', { name: 'minutes' }), '3')
    userEvent.click(canvas.getByRole('button'))
  },
}

export const SecondsError: Story = {
  name: '「秒」項目の不正値の場合',
  args: {
    setTime: (num: number) => console.debug(num),
  },
  play: async (ctx) => {
    await FillAll.play?.(ctx)
    const canvas = within(ctx.canvasElement)
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
    userEvent.click(canvas.getByRole('button'))
  },
}

export const MinutesError: Story = {
  name: '「分」項目の不正値の場合',
  args: {
    setTime: (num: number) => console.debug(num),
  },
  play: async (ctx) => {
    await FillAll.play?.(ctx)
    const canvas = within(ctx.canvasElement)
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
    userEvent.click(canvas.getByRole('button'))
  },
}
