import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'

import * as stories from './index.stories'

describe('components/atoms/BackDrop', () => {
  const { Visible, Invisible } = composeStories(stories)
  it('表示されている', async () => {
    const { findByRole } = render(<Visible />)
    expect(await findByRole('none')).toBeVisible()
    expect(await findByRole('dialog')).toBeVisible()
  })

  it('表示されていない', async () => {
    const { queryByRole } = render(<Invisible />)
    expect(await queryByRole('none')).toBeNull()
    expect(await queryByRole('dialog')).toBeNull()
  })
})
