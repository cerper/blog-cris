import Image from 'next/image'

import portada from '@/public/portada.jpg'
import Link from 'next/link'
import BlogContent from './components/BlogContent'
import { CarouselSize } from '@/components/CarouselButtom'

export default async function Home() {
  return (
    <div className="bg-base-200 min-h-[70vh]">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={portada}
            alt="cris odontologa"
            className="max-w-md lg:max-w-xl h-[40vh] lg:h-[50vh] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className=" text-5xl font-bold">Crisariana Gamez</h1>
            <h4>Protodoncista</h4>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/about">
              <button className="btn btn-info capitalize">acerca de mi</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rounded-lg mx-3 mt-24 text-justify">
        <h1 className="capitalize text-2xl mx-[75px] mb-4 font-bold text-star">
          mis especialidades son
        </h1>
        <BlogContent />
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
