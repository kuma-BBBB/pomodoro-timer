import type { FC } from 'react'
import type { SubmitHandler, Resolver } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, HStack } from '@/components/atoms'

type FormSchema = {
  minutes: string
  seconds: string
}

export const Presenter: FC<{
  onSubmit: SubmitHandler<FormSchema>
  resolver: Resolver<FormSchema>
}> = ({ onSubmit, resolver }) => {
  const { handleSubmit, register } = useForm<FormSchema>({
    resolver,
  })
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack
        justifyContent="center"
        alignItems="center"
        className="gap-2 mb-4 py-4 border rounded-md"
      >
        <input
          type="number"
          className="w-12 text-center text-base text-gray-500"
          max={99}
          min={0}
          defaultValue={0}
          {...register('minutes')}
        />
        <p className="font-bold text-gray-500">分</p>
        <input
          type="number"
          className="w-12 text-center text-base text-gray-500"
          max={59}
          min={0}
          defaultValue={0}
          {...register('seconds')}
        />
        <p className="font-bold text-gray-500">秒</p>
        <Button
          type="submit"
          className="px-4 py-1 bg-orange-500 text-white rounded-md"
        >
          SET
        </Button>
      </HStack>
    </form>
  )
}

type Props = {
  setTime: (time: number) => void
}
export const TimeForm: FC<Props> = ({ setTime }) => {
  const schema = z
    .object({
      minutes: z.string().min(1, 'required'),
      seconds: z.string().min(1, 'required'),
    })
    .refine(({ minutes, seconds }) => {
      if (isNaN(Number(minutes)) || isNaN(Number(seconds))) {
        return false
      }
      return true
    })

  const submitHandler: SubmitHandler<FormSchema> = ({ minutes, seconds }) => {
    let time = Number(seconds) * 1000
    time += Number(minutes) * 60 * 1000
    setTime(time)
  }

  return <Presenter onSubmit={submitHandler} resolver={zodResolver(schema)} />
}
