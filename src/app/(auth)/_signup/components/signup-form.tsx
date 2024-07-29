import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function SignUpForm() {
  return (
    <form className="flex flex-col space-y-2 mb-2">
      <h1 className="text-2xl font-semibold tracking-tight">
        Create an Account
      </h1>
      <p className="text-sm text-muted-foreground">
        Enter your data below to create your account
      </p>
      <div className="grid gap-3">
        <Label className="sr-only" htmlFor="username">
          Username
        </Label>
        <Input
          id="username"
          placeholder="username"
          type="text"
          autoCapitalize="none"
        />

        <Label className="sr-only" htmlFor="email">
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
        <Button variant="outline" className="w-full" type="submit">
          Sign up with email
        </Button>
      </div>
    </form>
  )
}
