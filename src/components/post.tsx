import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Image from 'next/image'

export function Post() {
  return (
    <Card className="max-w-[700px]">
      <CardHeader className="flex flex-row gap-3">
        <Avatar className="size-12">
          <AvatarImage
            src="/cookbooked.png"
            className="rounded-full object-cover overflow-hidden"
          />
        </Avatar>
        <div className="flex justify-between w-[90%]">
          <div>
            <CardTitle>Claudio Henrique</CardTitle>
            <CardDescription className="mt-1">
              Chief of culinary
            </CardDescription>
          </div>
          <span className="text-end">09/09/2024</span>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="text-2xl font-semibold mb-2">Feijoada da braba!</h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          pariatur optio alias reprehenderit sapiente a exercitationem numquam,
          praesentium accusamus est unde id dolorum deleniti modi accusantium
          architecto asperiores, amet repudiandae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi pariatur optio alias
          reprehenderit sapiente a exercitationem numquam, praesentium accusamus
          est unde id dolorum deleniti modi accusantium architecto asperiores,
          amet repudiandae!
        </p>
        <div className="flex flex-wrap">
          <div className="mt-4 mx-auto flex items-center justify-center border w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/feijoada.webp"
              alt="feijoada"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="mt-4 mx-auto flex items-center justify-center border w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/feijoada.webp"
              alt="feijoada"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
