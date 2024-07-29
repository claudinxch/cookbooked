import { logOut } from '@/lib/actions'
import { auth } from '@/auth'
import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { CreatePostCard } from '@/components/create-post'
import { MyPosts } from '@/components/my-posts'
import { SavedPosts } from '@/components/saved-posts'
import { Button } from '@/components/ui/button'
import type { SavedPost } from '@/components/saved-posts'
import type { MyPost } from '@/components/my-posts'
import { UserAvatar } from '@/components/user-avatar'
import { Settings, ChartColumn } from 'lucide-react'

export default async function Dashboard() {
  const savedPosts: SavedPost[] = [
    {
      id: 1,
      avatar: '/cookbooked.png',
      author: 'Claudio Henrique',
      role: 'Chief of culinary',
      recipe: 'Feijoada',
      postLink: '',
    },
    {
      id: 2,
      avatar: '/cookbooked.png',
      author: 'Lorrayni',
      role: 'Chief of culinary',
      recipe: 'Carbonara',
      postLink: '',
    },
    {
      id: 3,
      avatar: '/cookbooked.png',
      author: 'João Tenório',
      role: 'Cooker',
      recipe: 'Meat',
      postLink: '',
    },
    {
      id: 4,
      avatar: '/cookbooked.png',
      author: 'João Tenório',
      role: 'Cooker',
      recipe: 'Meat',
      postLink: '',
    },
    {
      id: 5,
      avatar: '/cookbooked.png',
      author: 'João Tenório',
      role: 'Cooker',
      recipe: 'Meat',
      postLink: '',
    },
  ]

  const myPosts: MyPost[] = [
    {
      id: 1,
      title: 'Feijoada',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Coxinha',
      date: new Date('2024-08-01'),
    },
    {
      id: 3,
      title: 'Pão de queijo',
      date: new Date('2024-08-15'),
    },
    {
      id: 4,
      title: 'Brigadeiro',
      date: new Date('2024-09-01'),
    },
  ]

  const session = await auth()

  return (
    <>
      <div className="h-[106px]"></div>
      <div className="flex flex-wrap items-center border justify-center p-2 xl:px-6 xl:py-6 rounded-lg w-full mb-3 gap-4 max-w-[1200px] mx-auto">
        <div className="hidden w-full gap-3 justify-end md:flex">
          <div className="grid text-end">
            <p className="text-sm leading-none font-medium">
              {session?.user?.name}
            </p>
            <span className="text-xs font-normal">{session?.user?.email}</span>
          </div>
          <UserAvatar />
        </div>

        <div className="flex flex-wrap items-center justify-center xl:justify-between gap-10">
          <CreatePostCard />

          <div className="flex flex-col h-[690px] justify-between">
            <SavedPosts posts={savedPosts} />

            <MyPosts posts={myPosts} />

            <div className="flex justify-end gap-4">
              <Link href="/metrics">
                <Button name="Metrics" size="icon" className="relative group">
                  <ChartColumn />
                  <ToolTip>Metrics</ToolTip>
                </Button>
              </Link>
              <Link href="/settings">
                <Button name="Settings" size="icon" className="relative group">
                  <Settings />
                  <ToolTip>Settings</ToolTip>
                </Button>
              </Link>
              <form action={logOut}>
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function ToolTip(props: PropsWithChildren) {
  return (
    <span className="opacity-0 absolute transition-opacity duration-200 group-hover:opacity-100 -top-7 bg-foreground py-px px-1.5 rounded-md text-muted">
      {props.children}
    </span>
  )
}
