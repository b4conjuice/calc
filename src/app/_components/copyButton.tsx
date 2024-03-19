'use client'

import Button from '@/app/_components/button'
import copyToClipboard from '@/lib/copyToClipboard'

export default function copyButton({
  daysAsText,
  children,
}: {
  daysAsText: string
  children?: React.ReactNode
}) {
  return (
    <Button
      onClick={() => {
        copyToClipboard(daysAsText)
      }}
    >
      {children}
    </Button>
  )
}
