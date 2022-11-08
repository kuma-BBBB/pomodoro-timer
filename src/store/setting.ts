import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { deepCopy } from '@/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Setting<TValue = any> = {
  type: string
  value: TValue
}
export const settingsAtom = atomWithStorage<Setting[]>('settings', [])

export type AudioSetting = Setting<boolean>
const isAudioSetting = (setting: Setting): setting is AudioSetting => {
  return setting.type === 'audio'
}
export const audioSettingsAtom = atom<AudioSetting | undefined, AudioSetting>(
  (get) => {
    return get(settingsAtom).find((setting) => {
      return isAudioSetting(setting)
    })
  },
  (get, set, update) => {
    const settingsClone = deepCopy(get(settingsAtom))
    const targetIndex = settingsClone.findIndex((setting) => {
      return isAudioSetting(setting)
    })
    if (targetIndex > -1) {
      settingsClone.splice(targetIndex, 1, update)
      void set(settingsAtom, settingsClone)
    }
  }
)
