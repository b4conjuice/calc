import {
  eachDayOfInterval,
  endOfMonth,
  isTuesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} from 'date-fns'

import Main from '@/app/_components/main'
import Title from '@/app/_components/title'
import CopyButton from '@/app/_components/copyButton'

const isValidDate = (date: Date) =>
  isTuesday(date) ||
  isThursday(date) ||
  isFriday(date) ||
  isSaturday(date) ||
  isSunday(date)

export default async function Home() {
  const today = new Date()
  const initialMonth = today.getMonth()
  const initialYear = today.getFullYear()

  const startDate = new Date(initialYear, initialMonth, 1)
  const endDate = endOfMonth(startDate)
  const dates = eachDayOfInterval({
    start: startDate,
    end: endDate,
  }).filter(isValidDate)

  const days = dates.map(date => date.getDate())

  const daysAsText = days.join('\n')
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center space-y-4'>
        <Title>calc</Title>
        <textarea
          className='h-full w-full flex-grow bg-cobalt'
          value={daysAsText}
          readOnly
        />
        <CopyButton daysAsText={daysAsText}>copy ({days.length})</CopyButton>
      </div>
    </Main>
  )
}
