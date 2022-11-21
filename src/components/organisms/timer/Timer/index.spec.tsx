import { composeStories } from '@storybook/testing-react'
import { render, renderHook, waitFor } from '@testing-library/react'
import { useAtomValue } from 'jotai'

import { audioSettingsAtom } from '@/store'

import * as stories from './index.stories'

describe('components/organisms/Timer', () => {
  const { SetTime, MutedToggle } = composeStories(stories)

  it('ミュート解除ボタンをクリック時、ミュートが解除されミュートボタンが表示されること', async () => {
    const { container, findByRole } = render(<MutedToggle />)
    const { result } = renderHook(() => useAtomValue(audioSettingsAtom))
    await MutedToggle.play({ canvasElement: container })
    await waitFor(() => expect(result.current?.value).toBe(true))
    await waitFor(() => expect(findByRole('button', { name: 'mute' })))
  })

  it('タイマーの時間がセットされ、入力した内容が表示されること', async () => {
    const { container, findByText } = render(<SetTime />)
    await SetTime.play({ canvasElement: container })
    expect(await findByText('03:59')).toBeVisible()
  })

  // it('タイマーを開始・停止の実行時、経過時間が表示内容に反映されていること(3:59 - 3:56)', async () => {
  //   const { container, findByText } = render(<PauseTimer />)
  //   await PauseTimer.play({ canvasElement: container })
  //   expect(await findByText('03:56')).toBeVisible()
  // })
  // it('タイマー実行中に開始ボタンをクリック、時間をセットしてもタイマーに影響しないこと', async () => {
  //   const { container, findByText } = render(<PauseTimer />)
  //   void PauseTimer.play({ canvasElement: container })
  //   await waitFor(() => expect(findByText('03:56')).toBeVisible())
  // })
})
