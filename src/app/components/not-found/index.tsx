import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container'>
          <div className='flex flex-col items-center gap-8'>
            <div>
              <Image
                src={'/images/Notfound/notfound.png'}
                alt='Not Found Image'
                height={380}
                width={670}
                unoptimized={true}
              />
            </div>
            <div className='max-w-xl text-center'>
              <h2>
                Oops! Izgleda da stranica koju tražite{' '}
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  više nemamo.
                </span>
              </h2>
            </div>
            <div>
              <Link
                href='/'
                className='group w-fit text-white font-medium bg-dark_black dark:bg-white/20 dark:hover:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-5 hover:bg-transparent border border-dark_black'>
                <span className='group-hover:text-dark_black  transition-transform duration-200 ease-in-out'>
                  Nazad na početnu {''}  
                </span>
             
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
