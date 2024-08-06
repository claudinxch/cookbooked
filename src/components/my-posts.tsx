import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export interface MyPost {
  id: number
  authorId: string
  title: string
  createdAt: Date
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
          <MyPost myPost={post} key={post.id} />
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

interface MyPostProps {
  myPost: MyPost
}

const MyPost = async ({ myPost }: MyPostProps) => {
  return (
    <div
      key={myPost.id}
      className="flex justify-between gap-16 md:gap-0 cursor-pointer transition-colors duration-200  rounded py-2 hover:bg-muted"
    >
      <Link
        href=""
        className="flex items-center ml-1 font-semibold leading-none tracking-tight gap-1 cursor-default transition-colors duration-200 hover:text-muted-foreground"
      >
        {myPost.title}
        <ExternalLink size={16} />
      </Link>

      <p className="mr-1">{myPost.createdAt.toLocaleDateString()}</p>
    </div>
  )
}
