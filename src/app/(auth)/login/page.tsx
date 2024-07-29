import Image from 'next/image'
import { LoginForm } from './components/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log in',
  description: 'Sign in to CookBooked!',
  openGraph: {
    title: 'Sign up to CookBooked',
    description: 'Sign up and start sharing your recipes!',
  },
}

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-between flex-col md:flex-row px-4 w-full gap-20 max-w-[1100px] mx-auto">
      <Image
        src="/cookbooked.svg"
        alt="Cook Booked logo"
        width={400}
        height={400}
        className="hidden md:flex"
      />

      <div className="min-h-screen flex justify-center items-center">
        <LoginForm />
      </div>
    </main>
  )
}
