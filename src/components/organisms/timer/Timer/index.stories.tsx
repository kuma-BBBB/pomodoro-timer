import { userEvent, within } from '@storybook/testing-library'

import { Timer } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof Timer> = {
  title: 'organisms/Timer',
  component: Timer,
}
export default meta

type Story = ComponentStoryObj<typeof Timer>

export const MutedToggle: Story = {
  name: 'ミュートの切り替えをする',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const isMuted = canvas.queryByRole('button', { name: 'unmute' }) !== null
    if (isMuted) {
      userEvent.click(canvas.getByRole('button', { name: 'unmute' }))
    } else {
      userEvent.click(canvas.getByRole('button', { name: 'mute' }))
    }
  },
}

export const SetTime: Story = {
  name: 'タイマーの時間をセットする',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'seconds' }))
    userEvent.clear(canvas.getByRole('spinbutton', { name: 'minutes' }))
    userEvent.type(canvas.getByRole('spinbutton', { name: 'seconds' }), '59')
    userEvent.type(canvas.getByRole('spinbutton', { name: 'minutes' }), '3')
    userEvent.click(canvas.getByRole('button', { name: 'setTimer' }))
  },
}

// TODO: 発火後、非同期的に再レンダリングされるコンポーネントの検知
// export const PauseTimer: Story = {
//   name: 'タイマーをスタートし途中で止める(3:59 - 3:56)',
//   play: async (ctx) => {
//     await SetTime.play?.(ctx)
//     const canvas = within(ctx.canvasElement)
//     userEvent.click(canvas.getByRole('button', { name: 'play' }))
//     await sleep(3000)
// userEvent.click(canvas.getByRole('button', { name: 'pause' }))
//   },
// }
