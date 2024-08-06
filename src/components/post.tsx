import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Image from 'next/image'
import db from '@/lib/prisma'
import { SaveButton } from './save-button'
import Link from 'next/link'
export interface Post {
  id: number
  authorId: string
  title: string
  content: string
  image: string
  savedCount: number
  createdAt: Date
}

interface PostProps {
  post: Post
}

export async function PostCard({ post }: PostProps) {
  const author = await db.user.findUnique({
    where: {
      id: post.authorId,
    },
  })

  let image: string | undefined
  if (author?.image) {
    image = author.image || undefined
  }

  return (
    <Card className="max-w-[700px] transition-colors duration-150 hover:bg-primary-foreground">
      <Link href={`/post/${post.id}`} className="cursor-pointer">
        <CardHeader className="flex flex-row justify-between gap-3">
          <div className="flex items-center gap-2">
            <Avatar className="size-12">
              <AvatarImage
                src={image}
                className="rounded-full object-cover overflow-hidden"
              />
            </Avatar>
            <div className="grid">
              <CardTitle>{author?.name}</CardTitle>
              <CardDescription>Chief of culinary</CardDescription>
            </div>
          </div>
          <span className="text-end">
            {post.createdAt.toLocaleDateString()}
          </span>
        </CardHeader>
        <CardContent>
          <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
          <p className="text-base">{post.content}</p>
          <div className="flex flex-wrap">
            <div className="mt-4 mx-auto flex items-center justify-center border w-[300px] overflow-hidden rounded-xl">
              <Image
                src="/feijoada.webp"
                alt="feijoada"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="mt-4 mx-auto flex items-center justify-center border w-[300px] overflow-hidden rounded-xl">
              <Image
                src="/feijoada.webp"
                alt="feijoada"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <SaveButton post={post} initialSavedCount={post.savedCount} />
        </CardContent>
      </Link>
    </Card>
  )
}
