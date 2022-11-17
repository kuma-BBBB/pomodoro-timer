import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'

import * as stories from './index.stories'

describe('components/atoms/VStack', () => {
  const { FlexStart } = composeStories(stories)
  it('子要素が表示されていること', async () => {
    const { queryAllByTestId } = render(<FlexStart />)
    expect(await queryAllByTestId('mock-item')).not.toBeNull()
  })
})
