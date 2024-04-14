'use client'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Blog } from '../type/Blog'

interface InfoPageProps {
  blog: { content: string }
}
export default function InfoPage({ blog }: any) {
  const content = blog.content
  return (
    <div>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Blog"
        width={600}
        height={600}
        className="object-center object-cover flex items-center justify-center rounded-2xl"
      />
    ),
  },
}

export const revalidate = 10
export const dynamic = 'force-dynamic'
