'use client'
import { ChangeEvent, useState } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import Image from 'next/image'
import { createPost } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { UpdateIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CreatePostDialog() {
  const [state, action] = useFormState(createPost, undefined)
  const [file, setFile] = useState<File | null>(null)

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFile(files[0])
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          name="Create a post"
          variant="ghost"
          className="text-base font-normal"
        >
          Create a post
        </Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a post</DialogTitle>
          <DialogDescription className="text-base">
            Share your recipe with everyone!
          </DialogDescription>
        </DialogHeader>
        <form action={action} className="grid gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Type your title here..."
              className="mt-1"
            />
            {state?.errors?.title && (
              <p className="text-red-600 mt-1 text-sm">{state.errors.title}</p>
            )}
          </div>
          <div>
            <Label htmlFor="content">Recipe</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Type your recipe here..."
              className="min-h-[150px] resize-y mt-1"
            />
            {state?.errors?.content && (
              <p className="text-red-600 mt-1 text-sm">
                {state.errors.content}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="picture">Recipe picture</Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="mt-1"
            />
          </div>
          <div className="flex justify-between">
            <div
              className={`w-[350px] h-[200px] overflow-hidden border rounded-lg flex items-center justify-center`}
            >
              {file ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={350}
                  height={350}
                  className="object-cover"
                />
              ) : (
                <p>Your file will appear here</p>
              )}
            </div>

            <SignupButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function CreatePostCard() {
  const [state, action] = useFormState(createPost, undefined)
  const [file, setFile] = useState<File | null>(null)

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFile(files[0])
    }
  }
  return (
    <Card className="md:min-w-[550px]">
      <CardHeader>
        <CardTitle className="text-2xl">Create a Post</CardTitle>
        <CardDescription className="text-base">
          Share your recipe with everyone!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="grid gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Type your title here..."
              className="mt-1"
            />
            {state?.errors?.title && (
              <p className="text-red-600 mt-1 text-xs font-medium">
                {state.errors.title}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="content">Recipe</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Type your recipe here..."
              className="min-h-[150px] resize-y mt-1"
            />
            {state?.errors?.content && (
              <p className="text-red-600 mt-1 text-xs font-medium">
                {state.errors.content}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="picture">Recipe picture</Label>
            <Input
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="mt-1"
            />
          </div>
          <div className="flex justify-between">
            <div
              className={`w-[350px] h-[200px] overflow-hidden border rounded-lg flex items-center justify-center`}
            >
              {file ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={350}
                  height={350}
                  className="object-cover"
                />
              ) : (
                <p>Your file will appear here</p>
              )}
            </div>

            <SignupButton />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function SignupButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      name="Submit Post Button"
      className="self-end w-28 text-base"
    >
      {pending ? <UpdateIcon className="animate-spin" /> : 'Post'}
    </Button>
  )
}
