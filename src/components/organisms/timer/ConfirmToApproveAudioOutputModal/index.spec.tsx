import { composeStories } from '@storybook/testing-react'
import { render, fireEvent, renderHook, waitFor } from '@testing-library/react'
import { useAtomValue } from 'jotai'

import { audioSettingsAtom } from '@/store'

import * as stories from './index.stories'

describe('components/organisms/ConfirmToApproveAudioOutputModal', () => {
  const { Visible, Invisible } = composeStories(stories)
  it('表示されていること', async () => {
    const { queryByRole } = render(<Visible />)
    expect(await queryByRole('dialog')).toBeVisible()
  })

  it('OKボタン押下で音声設定がONになること', async () => {
    const { getByRole } = render(<Visible />)
    const { result } = renderHook(() => useAtomValue(audioSettingsAtom))
    fireEvent.click(getByRole('button', { name: 'OK' }))
    await waitFor(() => expect(result.current?.value).toBe(true))
  })

  it('Noボタン押下で音声設定がOFFになること', async () => {
    const { getByRole } = render(<Visible />)
    const { result } = renderHook(() => useAtomValue(audioSettingsAtom))
    fireEvent.click(getByRole('button', { name: 'No' }))
    await waitFor(() => expect(result.current?.value).toBe(false))
  })

  it('OK・Noボタン押下時にonCloseが発火すること', async () => {
    const mockFn = jest.fn()
    const { getByRole } = render(<Visible onClose={mockFn} />)
    fireEvent.click(getByRole('button', { name: 'OK' }))
    fireEvent.click(getByRole('button', { name: 'No' }))
    await waitFor(() => expect(mockFn).toBeCalledTimes(2))
  })

  it('表示されていないこと', async () => {
    const { queryByRole } = render(<Invisible />)
    expect(await queryByRole('dialog')).toBeNull()
  })
})
