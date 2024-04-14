import InfoPage from '@/app/components/InfoPage'
import { getSlug } from '@/sanity/sanity-utils'
import Image from 'next/image'

interface BlogInfoProps {
  params: { slug: string }
}

export default async function BlogInfo({ params }: BlogInfoProps) {
  const slug = params.slug
  const blog = await getSlug(slug)
  return (
    <div className="flex flex-col justify-center items-center px-5 ">
      <h1 className="text-3xl font-semibold mb-5">{blog.name}</h1>
      <Image
        src={blog.image}
        alt={blog.name}
        width={400}
        height={400}
        className=" object-cover w-[30svh] lg:w-10/12 h-[480px]"
      />

      <InfoPage blog={blog} />
    </div>
  )
}
