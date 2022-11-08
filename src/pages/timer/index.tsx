import { useState } from 'react'

import { ConfirmToApproveAudioOutputModal } from '@/components/organisms'
import { TimerTemplate } from '@/components/templates'

const Timer = () => {
  const [open, setOpen] = useState<boolean>(true)

  const closeHandlerForConfirmToApproveAudioOutputModal = () => {
    setOpen(false)
  }

  return (
    <>
      <TimerTemplate />
      <ConfirmToApproveAudioOutputModal
        open={open}
        onClose={closeHandlerForConfirmToApproveAudioOutputModal}
      />
    </>
  )
}

export default Timer
