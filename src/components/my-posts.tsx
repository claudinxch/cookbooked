import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export interface MyPost {
  id: number
  title: string
  date: Date
}

interface MyPostsProps {
  posts: MyPost[]
}

export function MyPosts({ posts }: MyPostsProps) {
  return (
    <Card className={`md:min-w-[550px]`}>
      <CardHeader>
        <CardTitle>My Posts</CardTitle>
      </CardHeader>
      <CardContent className={`flex flex-col gap-y-4`}>
        {posts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="flex justify-between gap-52 cursor-pointer transition-colors duration-200  rounded py-2 hover:bg-muted"
          >
            <Link
              href=""
              className="flex items-center ml-1 font-semibold leading-none tracking-tight gap-1 cursor-default transition-colors duration-200 hover:text-muted-foreground"
            >
              {post.title}
              <ExternalLink size={16} />
            </Link>

            <p className="mr-1">{post.date.toLocaleDateString()}</p>
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
