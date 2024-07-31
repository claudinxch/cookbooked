import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { Button } from './ui/button'
import { auth } from '@/auth'
import { UserAvatar } from './user-avatar'
import { CreatePostDialog } from './create-post'

export default async function Navbar() {
  const session = await auth()
  const user = session?.user

  return (
    <header className="max-w-[1200px] bg-background flex py-4 px-4 xl:px-0 mx-auto fixed right-0 left-0 justify-between items-center">
      <Link href={'/'}>
        {!user ? (
          <Image
            src="cookbooked.svg"
            alt="Cook Booked logo"
            width={80}
            height={80}
          />
        ) : (
          <>
            <Image
              src="cookbooked.svg"
              alt="Cook Booked logo"
              width={80}
              height={80}
              className="hidden sm:flex"
            />
            <Button variant="ghost" className="sm:hidden">
              Home
            </Button>
          </>
        )}
      </Link>
      {!user ? (
        <div className="px-4 flex gap-4 items-center">
          <Link href="/login">
            <Button variant="ghost" className="text-base font-normal">
              Log-in
            </Button>
          </Link>
          <Link href="/login">
            <Button className="text-base font-normal">Sign up</Button>
          </Link>
          <ModeToggle />
        </div>
      ) : (
        <div className="px-4 flex gap-4 items-center">
          <CreatePostDialog />
          <Link href="/dashboard">
            <Button className="text-base font-normal">My dashboard</Button>
          </Link>
          <ModeToggle />
          {/* <Avatar>
            <AvatarImage src={image} />
          </Avatar> */}
          <UserAvatar />
        </div>
      )}
    </header>
  )
}
