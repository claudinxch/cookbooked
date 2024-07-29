import { Separator } from './ui/separator'
import { Post } from './post'

export function Feed() {
  return (
    <div className="max-w-[700px] flex flex-col gap-5">
      <h1 className="text-2xl font-medium self-start">Home</h1>
      <Separator className="max-w-[710px]" />

      <Post />
      <Post />
    </div>
  )
}
