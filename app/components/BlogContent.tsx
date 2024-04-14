import { getProject } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function BlogContent() {
  const blogs = await getProject()
  console.log(blogs)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center justify-center items-center">
      {blogs.map((blog) => (
        <div key={blog._id}>
          <Link href={'blogs/' + blog.slug} className="h-full">
            <Image
              src={blog.image}
              alt={blog.name}
              width={200}
              height={200}
              className="aspect-[6/4]  rounded-lg   object-center hover:scale-105 transition-all ease-in duration-200 "
            />
            <div className="text-center">{blog.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}
