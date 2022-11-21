import { atomWithStorage } from 'jotai/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Setting<TValue = any> = {
  type: string
  value: TValue
}

export type AudioSetting = Setting<boolean>
export const AUDIO_SETTING_STORE_KEY = 'audioSetting'
export const audioSettingsAtom = atomWithStorage<AudioSetting>(
  AUDIO_SETTING_STORE_KEY,
  {
    type: 'audioSetting',
    value: false,
  }
)
