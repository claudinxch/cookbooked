import { Feed } from '@/components/feed'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center pt-[110px] flex-col px-4 w-full gap-5 max-w-[1200px] mx-auto mb-4">
      <Feed />
    </main>
  )
}
