import { Blog } from '@/app/type/Blog'
import { createClient, groq } from 'next-sanity'

export async function getProject(): Promise<Blog[]> {
  const client = createClient({
    projectId: '7vu5mgrc',
    dataset: 'production',
    apiVersion: '2024-04-03',
  })
  return client.fetch(groq`*[_type == 'project'] | order(createdAt asc){
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image':image.asset->url,
      url,
      content,


  }`)
}

export async function getSlug(slug: string): Promise<Blog> {
  const client = createClient({
    projectId: '7vu5mgrc',
    dataset: 'production',
    apiVersion: '2024-04-03',
  })
  return client.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0] | {
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image':image.asset->url,
      url,
      content,


  }`,
    { slug }
  )
}

export const revalidate = 10
export const dynamic = 'force-dynamic'
