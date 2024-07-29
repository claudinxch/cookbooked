import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from './ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export interface SavedPost {
  id: number
  avatar: string
  author: string
  role: string
  recipe: string
  postLink: string
}

interface SavedPostsProps {
  posts: SavedPost[]
}

export function SavedPosts({ posts }: SavedPostsProps) {
  return (
    <Card className={`md:min-w-[550px]`}>
      <CardHeader>
        <CardTitle>Saved Posts</CardTitle>
      </CardHeader>
      <CardContent className={`flex flex-col gap-y-4`}>
        {posts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="flex justify-between gap-52 cursor-pointer transition-colors duration-200 rounded py-1 hover:bg-muted"
          >
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src={post.avatar} alt={`${post.author}' avatar`} />
              </Avatar>

              <div className="flex flex-col">
                <p className="font-semibold leading-none tracking-tight">
                  {post.author}
                </p>
                <p className="text-sm text-muted-foreground">{post.role}</p>
              </div>
            </div>

            <div className="max-w-56 flex items-center mr-1">
              <Link
                href={post.postLink}
                className="text-base flex gap-1 font-medium leading-none tracking-tight cursor-default transition-colors duration-200 hover:text-muted-foreground"
              >
                {post.recipe} <ExternalLink size={16} />
              </Link>
            </div>
          </div>
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
