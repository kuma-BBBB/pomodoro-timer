import type { ComponentProps, FC } from 'react'

import { BackDrop, Button, HStack, VStack } from '@/components/atoms'

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
      <div className="bg-white p-8 w-1/3 min-w-600 max-w-800 rounded-md shadow-md">
        <VStack className="gap-6 justify-center items-center">
          <span className="material-icons-outlined !text-4xl text-gray-400">
            volume_up
          </span>
          <p className="text-gray-400">
            当サイトでは、一部機能にてオーディオが出力されます。出力を希望されない方は、Noを選択してください。
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
  const confirmHandler = () => {
    onClose()
  }
  const rejectmHandler = () => {
    onClose()
  }
  return (
    <Presenter
      open={open}
      onConfirm={confirmHandler}
      onReject={rejectmHandler}
    />
  )
}
