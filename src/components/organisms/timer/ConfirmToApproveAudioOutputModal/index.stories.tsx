import { within, userEvent } from '@storybook/testing-library'

import { ConfirmToApproveAudioOutputModal } from './'

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const meta: ComponentMeta<typeof ConfirmToApproveAudioOutputModal> = {
  title: 'organisms/ConfirmToApproveAudioOutputModal',
  component: ConfirmToApproveAudioOutputModal,
}
export default meta

type Story = ComponentStoryObj<typeof ConfirmToApproveAudioOutputModal>

export const Visible: Story = {
  name: '表示されている場合',
  args: {
    open: true,
    onClose: () => console.debug('click'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.click(canvas.getByRole('button', { name: 'OK' }))
    userEvent.click(canvas.getByRole('button', { name: 'No' }))
  },
}

export const Invisible: Story = {
  name: '表示されていない場合',
  args: {
    open: false,
    onClose: () => console.debug('click'),
  },
}
