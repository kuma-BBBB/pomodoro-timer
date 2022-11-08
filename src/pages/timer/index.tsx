import { useAtom } from 'jotai'
import { useState, useEffect } from 'react'

import { ConfirmToApproveAudioOutputModal } from '@/components/organisms'
import { TimerTemplate } from '@/components/templates'
import { audioSettingsAtom } from '@/store'

const Timer = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [audioSetting] = useAtom(audioSettingsAtom)

  useEffect(() => {
    if (audioSetting === undefined) {
      setOpen(true)
    }
  }, [audioSetting])

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
