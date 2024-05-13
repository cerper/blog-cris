import Hero from '@/components/Hero'
import AcercaDeMi from '@/components/AcercaDeMi'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import { getProject } from '@/sanity/sanity-utils'

export default async function Home() {
  return (
    <div>
      <div className="z-20  h-[60svh] bg-hero bg-cover lg:bg-center bg-no-repeat text-white md:h-[900px] lg:h-[600px]">
        <div className="container mx-auto h-full">
          <Hero />
        </div>
      </div>
      <AcercaDeMi />
      <Testimonials />
      <Blog />
    </div>
  )
}

export const dynamic = 'force-dynamic'
