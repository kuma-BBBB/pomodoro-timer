import type { ComponentProps, FC } from 'react'

import { useAtom } from 'jotai'

import { BackDrop, Button, HStack, VStack } from '@/components/atoms'
import { settingsAtom } from '@/store'

import type { AudioSetting } from '@/store'

export const Presenter = ({
  open,
  onConfirm,
  onReject,
}: {
  open: ComponentProps<typeof BackDrop>['open']
  onConfirm: () => void
  onReject: () => void
}) => {
  return (
    <BackDrop open={open}>
      <div className="bg-white p-8 md:w-1/2 md:max-w-md max-md:w-11/12 rounded-md shadow-md">
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
              onClick={onConfirm}
              className="px-4 py-2 bg-orange-500 text-white rounded-md w-1/3"
            >
              OK
            </Button>
            <Button
              onClick={onReject}
              className="px-4 py-2 bg-gray-400 text-white rounded-md w-1/3"
            >
              No
            </Button>
          </HStack>
        </VStack>
      </div>
    </BackDrop>
  )
}

type Props = {
  open: ComponentProps<typeof Presenter>['open']
  onClose: () => void
}
export const ConfirmToApproveAudioOutputModal: FC<Props> = ({
  open,
  onClose,
}) => {
  const [settings, setSettings] = useAtom(settingsAtom)

  const confirmHandler = () => {
    const audioSetting: AudioSetting = {
      type: 'audio',
      value: true,
    }
    const newSettings = [...settings, audioSetting]
    setSettings(newSettings)
    onClose()
  }
  const rejectHandler = () => {
    const audioSetting: AudioSetting = {
      type: 'audio',
      value: false,
    }
    const newSettings = [...settings, audioSetting]
    setSettings(newSettings)
    onClose()
  }
  return (
    <Presenter
      open={open}
      onConfirm={confirmHandler}
      onReject={rejectHandler}
    />
  )
}
