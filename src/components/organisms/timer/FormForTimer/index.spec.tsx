import { composeStories } from '@storybook/testing-react'
import { render, waitFor } from '@testing-library/react'

import * as stories from './index.stories'

describe('components/organisms/FormForTimer', () => {
  const { EmptyForm, FillAll, SecondsError, MinutesError } =
    composeStories(stories)
  it('フォーム全項目未入力時、時間をセットできないこと', async () => {
    const mockFn = jest.fn((num: number) => console.debug(num))
    const { container } = render(<EmptyForm setTime={mockFn} />)
    await EmptyForm.play({ canvasElement: container })
    expect(mockFn).not.toBeCalled()
  })

  it('「秒」項目未入力時、時間をセットできないこと', async () => {
    const mockFn = jest.fn((num: number) => console.debug(num))
    const { container } = render(<SecondsError setTime={mockFn} />)
    await SecondsError.play({ canvasElement: container })
    expect(mockFn).not.toBeCalled()
  })

  it('「分」項目未入力時、時間をセットできないこと', async () => {
    const mockFn = jest.fn((num: number) => console.debug(num))
    const { container } = render(<MinutesError setTime={mockFn} />)
    await MinutesError.play({ canvasElement: container })
    expect(mockFn).not.toBeCalled()
  })

  it('全項目入力時、時間をセットできること', async () => {
    const mockFn = jest.fn((num: number) => console.debug(num))
    const { container } = render(<FillAll setTime={mockFn} />)
    await FillAll.play({ canvasElement: container })
    await waitFor(() => expect(mockFn).toBeCalled())
  })
})
