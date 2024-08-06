import { Separator } from './ui/separator'
import { PostCard } from './post'
import db from '@/lib/prisma'

export async function Feed() {
  const posts = await db.post.findMany({
    orderBy: {
      savedCount: 'desc',
    },
  })
  return (
    <div className="max-w-[700px] flex flex-col gap-5">
      <h1 className="text-2xl font-medium self-start">Home</h1>
      <Separator className="max-w-[710px]" />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
