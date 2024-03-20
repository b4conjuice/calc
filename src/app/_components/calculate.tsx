'use client'

import { useState } from 'react'
import {
  eachDayOfInterval,
  endOfMonth,
  isTuesday,
  isThursday,
  isFriday,
  isSaturday,
  isSunday,
} from 'date-fns'

import Button from '@/app/_components/button'
import copyToClipboard from '@/lib/copyToClipboard'

const isValidDate = (date: Date) =>
  isTuesday(date) ||
  isThursday(date) ||
  isFriday(date) ||
  isSaturday(date) ||
  isSunday(date)

const monthsInQuarter = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function Calculate() {
  const today = new Date()
  const initialMonth = today.getMonth()
  const initialYear = today.getFullYear()

  const [year, setYear] = useState(initialYear)
  const [month, setMonth] = useState(initialMonth)

  const startDate = new Date(year, month, 1)
  const endDate = endOfMonth(startDate)

  const dates = eachDayOfInterval({
    start: startDate,
    end: endDate,
  }).filter(isValidDate)

  const days = dates.map(date => date.getDate())

  const daysAsText = days.join('\n')
  return (
    <>
      <div className='grid w-full gap-4 md:grid-cols-2'>
        <label className='flex items-center space-x-2'>
          <select
            className='w-full bg-cobalt'
            value={month}
            onChange={e => setMonth(Number(e.target.value))}
          >
            {monthsInQuarter.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </label>
        <label className='flex items-center space-x-2'>
          <input
            className='w-full bg-cobalt'
            type='number'
            value={year}
            onChange={e => setYear(Number(e.target.value))}
          />
        </label>
      </div>
      <textarea
        className='h-full w-full flex-grow bg-cobalt'
        value={daysAsText}
        readOnly
      />
      <Button
        onClick={() => {
          copyToClipboard(daysAsText)
        }}
      >
        copy ({days.length})
      </Button>
    </>
  )
}
