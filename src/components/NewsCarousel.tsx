import { Swiper, SwiperSlide } from 'swiper/react';
import AudiNoticia from '../assets/audi-noticia-1.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import type { ReactNode } from 'react';


export const NewsCarousel = ({ children }: { children: ReactNode }) => {
  return (
    <section className='p-4'>
      <Swiper
        slidesPerView={1}
        spaceBetween={ 30 }
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="pt-5 pb-14">
              <div className='group overflow-hidden'>
                <img
                  className="transition-transform duration-500 ease-out group-hover:scale-110"
                  src={ AudiNoticia.src }
                  width={ AudiNoticia.width }
                  height={ AudiNoticia.height }
                  loading='lazy' 
                  decoding='async' 
                  alt="Audi Noticia"
                />
              </div>
              <h2 className="text-xl font-semibold p-3">El nuevo Audi A6 Avant: la clase Business se une a la élite deportiva</h2>
              <p className="font-light text-sm px-3 py-4">La elegancia se une a la potencia electrizante. En un Audi Q6 en pintura blue frozen metalizado, experimentamos una rapsodia dinámica en azul en Ice Experience en Chile.</p>
              <a className="w-40 flex gap-x-2 justify-center items-center p-4 group hover:bg-black border transition duration-500 border-black mt-2 ml-2">
                { children }
                <span className="group-hover:text-white">Leer más</span>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="pt-5 pb-14">
              <div className='group overflow-hidden'>
                <img
                  className="transition-transform duration-500 ease-out group-hover:scale-110"
                  src={ AudiNoticia.src }
                  width={ AudiNoticia.width }
                  height={ AudiNoticia.height }
                  loading='lazy' 
                  decoding='async' 
                  alt="Audi Noticia"
                />
              </div>
              <h2 className="text-xl font-semibold p-3">El nuevo Audi A6 Avant: la clase Business se une a la élite deportiva</h2>
              <p className="font-light text-sm px-3 py-4">La elegancia se une a la potencia electrizante. En un Audi Q6 en pintura blue frozen metalizado, experimentamos una rapsodia dinámica en azul en Ice Experience en Chile.</p>
              <a className="w-40 flex gap-x-2 justify-center items-center p-4 group hover:bg-black border transition duration-500 border-black mt-2 ml-2">
                { children }
                <span className="group-hover:text-white">Leer más</span>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="pt-5 pb-14">
              <div className='group overflow-hidden'>
                <img
                  className="transition-transform duration-500 ease-out group-hover:scale-110"
                  src={ AudiNoticia.src }
                  width={ AudiNoticia.width }
                  height={ AudiNoticia.height }
                  loading='lazy' 
                  decoding='async' 
                  alt="Audi Noticia"
                />
              </div>
              <h2 className="text-xl font-semibold p-3">El nuevo Audi A6 Avant: la clase Business se une a la élite deportiva</h2>
              <p className="font-light text-sm px-3 py-4">La elegancia se une a la potencia electrizante. En un Audi Q6 en pintura blue frozen metalizado, experimentamos una rapsodia dinámica en azul en Ice Experience en Chile.</p>
              <a className="w-40 flex gap-x-2 justify-center items-center p-4 group hover:bg-black border transition duration-500 border-black mt-2 ml-2">
                { children }
                <span className="group-hover:text-white">Leer más</span>
              </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="pt-5 pb-14">
              <div className='group overflow-hidden'>
                <img
                  className="transition-transform duration-500 ease-out group-hover:scale-110"
                  src={ AudiNoticia.src }
                  width={ AudiNoticia.width }
                  height={ AudiNoticia.height }
                  loading='lazy' 
                  decoding='async' 
                  alt="Audi Noticia"
                />
              </div>
              <h2 className="text-xl font-semibold p-3">El nuevo Audi A6 Avant: la clase Business se une a la élite deportiva</h2>
              <p className="font-light text-sm px-3 py-4">La elegancia se une a la potencia electrizante. En un Audi Q6 en pintura blue frozen metalizado, experimentamos una rapsodia dinámica en azul en Ice Experience en Chile.</p>
              <a className="w-40 flex gap-x-2 justify-center items-center p-4 group hover:bg-black border transition duration-500 border-black mt-2 ml-2">
                { children }
                <span className="group-hover:text-white">Leer más</span>
              </a>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
