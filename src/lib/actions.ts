'use server'
import { signIn, signOut, auth } from '@/auth'
import { createPostFormSchema, PostFormState } from '@/app/helpers/definitions'
import db from './prisma'
import { revalidatePath } from 'next/cache'

export const signInWithGoogle = async () => {
  await signIn('google', { redirectTo: '/home' })
}

export const logOut = async () => {
  await signOut()
}

export const createPost = async (
  state: PostFormState,
  formData: FormData,
): Promise<PostFormState> => {
  const session = await auth()

  const validationResult = createPostFormSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  const { title, content } = validationResult.data

  await db.post.create({
    data: {
      author: {
        connect: {
          id: session?.user?.id,
        },
      },
      title,
      content,
      image: '',
      savedCount: 0,
    },
  })

  revalidatePath('/')

  return {
    message: 'Success!',
  }
}

export const savePost = async (postId: number) => {
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

    if (hasSavedPost) {
      await deleteFromSavedPost(postId)
      return
    }

    await db.user.update({
      where: {
        id: loggedUser.id,
      },
      data: {
        savedPosts: {
          connect: {
            id: postId,
          },
        },
      },
    })
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        savedBy: {
          connect: {
            id: loggedUser.id,
          },
        },
        savedCount: {
          increment: 1,
        },
      },
    })
  }
}

export const deleteFromSavedPost = async (postId: number) => {
  const session = await auth()
  const user = session?.user

  const loggedUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
  })

  if (loggedUser) {
    await db.user.update({
      where: {
        id: loggedUser.id,
      },
      data: {
        savedPosts: {
          disconnect: {
            id: postId,
          },
        },
      },
    })
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        savedBy: {
          disconnect: {
            id: loggedUser.id,
          },
        },
        savedCount: {
          decrement: 1,
        },
      },
    })
  }
}

export const isPostSaved = async (postId: number) => {
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

    if (hasSavedPost) {
      return true
    }
    return false
  }
}
