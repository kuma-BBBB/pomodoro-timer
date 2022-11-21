import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'

import * as stories from './index.stories'

describe('componets/atoms/Container', () => {
  const { Default } = composeStories(stories)

  it('', async () => {
    const { queryAllByTestId } = render(<Default />)
    expect(await queryAllByTestId('mock-item')).not.toBeNull()
  })
})
