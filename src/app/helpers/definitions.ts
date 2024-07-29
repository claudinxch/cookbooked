import { z } from 'zod'

export const createPostFormSchema = z.object({
  title: z.string().min(1, { message: 'There has to be a title!' }),
  content: z
    .string()
    .min(1, { message: 'Content cannot be empty! ' })
    .max(2000, { message: 'Content cannot have more than 2000 characters' }),
})

export type PostFormState =
  | {
      errors?: {
        title?: string[]
        content?: string[]
      }
      message?: string
    }
  | undefined
