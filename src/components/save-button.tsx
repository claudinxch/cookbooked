'use client'
import { isPostSaved, savePost } from '@/lib/actions'
import type { Post } from './post'
import { useEffect, useState } from 'react'
import { Icons } from './icons'

interface SaveButtonProps {
  post: Post
  initialSavedCount: number
}

export const SaveButton = ({ post, initialSavedCount }: SaveButtonProps) => {
  const [savedCount, setSavedCount] = useState(initialSavedCount)
  const [isSaved, setIsSaved] = useState<boolean | undefined>()

  useEffect(() => {
    const checkIfSaved = async (postId: number) => {
      const saved = await isPostSaved(postId)

      setIsSaved(saved)
    }

    checkIfSaved(post.id)
  }, [post.id])

  const handleSavePost = async (postId: number) => {
    setIsSaved((prev) => !prev)
    setSavedCount(isSaved ? savedCount - 1 : savedCount + 1)

    await savePost(postId)
    await isPostSaved(postId)
  }

  return (
    <div className="flex justify-end gap-px mr-1 mt-2">
      <button
        className="cursor-default"
        onClick={(e) => {
          e.preventDefault()
          handleSavePost(post.id)
        }}
      >
        <Icons.bookmark color={isSaved ? '#FFD700' : 'none'} />
      </button>

      <span className="text-lg self-center text-muted-foreground">
        {/* {post.savedCount > 0 && post.savedCount} */}
        {savedCount}
      </span>
    </div>
  )
}
