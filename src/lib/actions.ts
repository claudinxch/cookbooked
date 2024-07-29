'use server'
import { signIn, signOut } from '@/auth'
import { createPostFormSchema, PostFormState } from '@/app/helpers/definitions'

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
  await new Promise((resolve) => setTimeout(resolve, 1000))

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

  console.log(title, content)
  return {
    message: 'Success!',
  }
}
