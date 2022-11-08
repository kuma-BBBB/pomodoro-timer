import { Presenter } from './'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Presenter> = {
  title: 'organisms/ConfirmToApproveAudioOutputModal',
  component: Presenter,
}
export default meta

const Template: ComponentStory<typeof Presenter> = (args) => (
  <Presenter {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  onConfirm: () => console.log('confirm'),
  onReject: () => console.log('reject'),
}
