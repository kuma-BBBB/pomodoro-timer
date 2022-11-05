import { Timer } from '@/components/organisms'

const Presenter = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Timer />
    </div>
  )
}

export const TimerTemplate = () => {
  return <Presenter />
}
