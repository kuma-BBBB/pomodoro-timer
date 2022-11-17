import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'

import * as stories from './index.stories'

describe('components/atoms/Button', () => {
  const { Default } = composeStories(stories)
  it('ボタンがクリックできること', async () => {
    const mockFn = jest.fn()
    const { container } = render(<Default onClick={mockFn} />)
    await Default.play({ canvasElement: container })
    expect(mockFn).toBeCalled()
    mockFn.mockReset()
  })
})
