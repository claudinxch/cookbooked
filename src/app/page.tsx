import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center flex-col md:flex-row px-4 w-full gap-20 max-w-[1200px] mx-auto">
        <div className="md:w-6/12 lg:w-3/5 gap-8 flex flex-col mt-24 md:mt-0 lg:mt-0">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl md:text-5xl dark:text-slate-100">
              Share, Cook and Connect.
            </h1>
            <h2 className="font-bold text-2xl md:text-4xl text-slate-600 dark:text-slate-200">
              Where Recipes Come to <span className="text-[#86A4D0]">Life</span>
              !
            </h2>
          </div>

          <div className="w-[85%] flex items-center rounded-xl">
            {/* <h2 className="text-2xl font-medium dark:text-slate-100">
              Join Now!
            </h2> */}
            <Link href="/login">
              <Button size="lg" className="text-base">
                Create your account
              </Button>
            </Link>
            {/* <Link href="/login">
              <Button
                variant="link"
                className="text-base text-slate-600 dark:text-slate-300"
              >
                or log-in
              </Button>
            </Link> */}
          </div>
        </div>

        <Image
          src={'/cookbooked.svg'}
          alt="CookBooked logo"
          width={300}
          height={300}
        />
      </main>
    </>
  )
}
