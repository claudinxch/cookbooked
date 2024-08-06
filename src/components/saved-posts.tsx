import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from './ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import db from '@/lib/prisma'

export interface SavedPost {
  id: number
  authorId: string
  title: string
}

interface SavedPostsProps {
  posts: SavedPost[]
}

export async function SavedPosts({ posts }: SavedPostsProps) {
  return (
    <Card className={`md:min-w-[550px]`}>
      <CardHeader>
        <CardTitle>Saved Posts</CardTitle>
      </CardHeader>
      <CardContent className={`flex flex-col gap-y-4`}>
        {posts.slice(0, 3).map((post) => (
          <SavedPost key={post.id} postSaved={post} />
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link
          href=""
          className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          See all posts
        </Link>
      </CardFooter>
    </Card>
  )
}

interface SavedPostProps {
  postSaved: SavedPost
}

const SavedPost = async ({ postSaved }: SavedPostProps) => {
  const author = await db.user.findUnique({
    where: {
      id: postSaved.authorId,
    },
  })

  let avatar: string | undefined
  if (author?.image) {
    avatar = author.image || undefined
  }

  return (
    <div
      key={postSaved.id}
      className="flex justify-between gap-16 md:gap-0 cursor-pointer transition-colors duration-200 rounded py-1 hover:bg-muted"
    >
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={avatar} alt={`${author}' avatar`} />
        </Avatar>

        <div className="flex flex-col">
          <p className="font-semibold leading-none tracking-tight">
            {author?.name}
          </p>
          <p className="text-sm text-muted-foreground">Cooker</p>
        </div>
      </div>

      <div className="max-w-56 flex items-center mr-1">
        <Link
          href={`/post/${postSaved.id}`}
          className="text-base flex gap-1 font-medium leading-none tracking-tight cursor-default transition-colors duration-200 hover:text-muted-foreground"
        >
          {postSaved.title} <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  )
}
