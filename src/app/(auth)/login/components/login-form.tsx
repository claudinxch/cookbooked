import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import Link from 'next/link'
import { signInWithGoogle } from '@/lib/actions'

export function LoginForm() {
  return (
    <form
      action={signInWithGoogle}
      className="flex flex-col space-y-2 mb-2 w-[400px] p-6 rounded-xl border-2"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Create your account
      </h1>
      <p className="text-sm text-muted-foreground">
        {"Don't"} waste time to start sharing your culinary skills, log in with
        your Google account
      </p>

      <div className="grid gap-3">
        <div className="flex flex-col">
          <div className="flex flex-col space-y-2 mb-4">
            <Button variant="outline" className="w-full my-2" type="submit">
              <Icons.google className="mr-2 h-4 w-4" /> Log in with Google
            </Button>
          </div>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By creating an account, you agree to our{' '}
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
        </div>
      </div>
      {/* <Label className="sr-only" htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />

        <Label className="sr-only" htmlFor="username">
          Password
        </Label>
        <Input
          id="username"
          placeholder="password"
          type="password"
          autoCapitalize="none"
        /> */}
    </form>
  )
}
