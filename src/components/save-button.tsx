'use client'
import { savePost } from '@/lib/actions'
import type { Post } from './post'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import db from '@/lib/prisma'
import { auth } from '@/auth'

interface SaveButtonProps {
  post: Post
  initialSavedCount: number
}

export const SaveButton = ({ post, initialSavedCount }: SaveButtonProps) => {
  const [savedCount, setSavedCount] = useState(initialSavedCount)

  const isSaved = async (postId: number) => {
    const session = await auth()
    const user = session?.user

    const loggedUser = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    })

    if (loggedUser) {
      const isPostSavedByUser = await db.user.findUnique({
        where: {
          id: loggedUser.id,
        },
        select: {
          savedPosts: {
            where: {
              id: postId,
            },
            select: {
              id: true,
            },
          },
        },
      })

      const hasSavedPost = (isPostSavedByUser?.savedPosts?.length ?? 0) > 0

      if (hasSavedPost) return true

      return false
    }
  }

  const handleSavePost = async (postId: number) => {
    savePost(postId)
    const isPostSaved = await isSaved(postId)

    if (isPostSaved) {
      setSavedCount(savedCount - 1)
    } else {
      setSavedCount(savedCount + 1)
    }
  }

  return (
    <div className="flex justify-end gap-1 mr-1 mt-2">
      <button
        onClick={() => {
          handleSavePost(post.id)
        }}
      >
        <Heart />
      </button>

      <span className="text-base">
        {/* {post.savedCount > 0 && post.savedCount} */}
        {savedCount}
      </span>
    </div>
  )
}
