import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { SignUpForm } from './components/signup-form'
import { signInWithGoogle } from '@/lib/actions'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up to CookBooked!',
  openGraph: {
    title: 'Sing Up to CookBooked',
    description: 'Sign up and start sharing your recipes!',
  },
}

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-between flex-col md:flex-row px-4 w-full gap-20 max-w-[1100px] mx-auto">
      <Image
        src="/cookbooked.svg"
        alt="Cook Booked logo"
        width={400}
        height={400}
      />

      <div className="flex flex-col w-[360px]">
        <div className="flex flex-col space-y-2 mb-4">
          <SignUpForm />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
        </div>
        <form action={signInWithGoogle}>
          <Button variant="outline" className="w-full mb-4" type="submit">
            <Icons.google className="mr-2 h-4 w-4" /> Sign up with Google
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </main>
  )
}
