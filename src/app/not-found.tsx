'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const handleReturn = () => {
    router.back()
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-between flex-col md:flex-row px-4 w-full gap-20 max-w-[1100px] mx-auto">
      <div className="text-center mx-auto">
        <span className="text-9xl font-semibold">404</span>
        <h2 className="text-3xl">Page Not Found</h2>

        <div className="mt-6 flex justify-around">
          <Button className="text-xl" onClick={handleReturn}>
            Return
          </Button>
          <Button className="text-xl" onClick={handleGoHome}>
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}
