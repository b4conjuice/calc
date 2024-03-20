import Main from '@/app/_components/main'
import Title from '@/app/_components/title'
import Calculate from '@/app/_components/calculate'

export default async function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center space-y-4'>
        <Title>calc</Title>
        <Calculate />
      </div>
    </Main>
  )
}
