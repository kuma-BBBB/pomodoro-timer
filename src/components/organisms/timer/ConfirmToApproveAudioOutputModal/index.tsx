import type { ComponentProps, FC } from 'react'

import { useSetAtom } from 'jotai'

import { BackDrop, Button, HStack, VStack } from '@/components/atoms'
import { audioSettingsAtom } from '@/store'

import type { AudioSetting } from '@/store'

type Props = {
  open: ComponentProps<typeof BackDrop>['open']
  onClose: () => void
}
export const ConfirmToApproveAudioOutputModal: FC<Props> = ({
  open,
  onClose,
}) => {
  const setAudioSetting = useSetAtom(audioSettingsAtom)

  const confirmHandler = () => {
    const audioSetting: AudioSetting = {
      type: 'audioSetting',
      value: true,
    }
    setAudioSetting(audioSetting)
    onClose()
  }
  const rejectHandler = () => {
    const audioSetting: AudioSetting = {
      type: 'audioSetting',
      value: false,
    }
    setAudioSetting(audioSetting)
    onClose()
  }
  return (
    <BackDrop open={open}>
      <div
        role="dialog"
        className="bg-white p-8 md:w-1/2 md:max-w-md max-md:w-11/12 rounded-md shadow-md"
      >
        <VStack className="gap-6 justify-center items-center">
          <span className="material-icons-outlined !text-4xl text-gray-400">
            volume_up
          </span>
          <p className="text-gray-400">
            当サイトでは、一部機能にてオーディオが出力されます。出力を希望されない方は、
            <strong>No</strong>を選択してください。
            <br />
            ※&nbsp;<strong>No</strong>
            を選択した場合でも、
            <span className="material-icons-outlined !text-lg text-gray-400">
              volume_up
            </span>
            &nbsp;/&nbsp;
            <span className="material-icons-outlined  !text-lg text-gray-400">
              volume_off
            </span>
            &nbsp;ボタンでオーディオが出力切り替えが可能です。
          </p>
          <HStack className="gap-4 justify-center">
            <Button
              onClick={confirmHandler}
              btnType="btn-primary"
              className="w-1/3"
              aria-label="OK"
            >
              OK
            </Button>
            <Button
              onClick={rejectHandler}
              btnType="btn-secondary"
              className="w-1/3"
              aria-label="No"
            >
              No
            </Button>
          </HStack>
        </VStack>
      </div>
    </BackDrop>
  )
}
