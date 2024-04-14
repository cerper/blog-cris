import Image from 'next/image'
import foto from '@/public/portada-cris.jpg'
import logo from '@/public/logo-a-color-1536x690.png'

export default function Carrusel() {
  return (
    <div className="carousel min-w-24 w-[50vh] mt-8">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src={foto}
          alt="foto"
          className="w-full"
          width={200}
          height={60}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src={logo}
          className="w-full"
          alt="foto"
          width={200}
          height={200}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
          alt="foto"
          width={200}
          height={200}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          alt="foto"
          className="w-full"
          width={200}
          height={200}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}
