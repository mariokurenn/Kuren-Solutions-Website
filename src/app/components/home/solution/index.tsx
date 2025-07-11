'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div className='2xl:py-0 py-11'>
        <div className='container'>
          <div
            ref={ref}
            className='py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-6 items-center md:max-w-3xl mx-auto'>
              <div className='flex flex-col gap-3 items-center text-center'>
                <h2 className='text-3xl md:text-5xl dark:text-dark_black'>
                 Spremni za slične{' '}
                  <span className='instrument-font italic font-normal dark:text-black/70'>
                     rezultate?
                  </span>
                </h2>
                <p className='dark:text-dark_black'>
                 Vrijeme je da vaše poslovanje ispriča bolju priču.
Na pozivu ćete dobiti konkretne prijedloge za vaš rast.
                </p>
              </div>
                <Link
                            href="https://qb4gef9e2jt.typeform.com/to/WF7hvnOS" target='_blank'
                            className="group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit border border-dark_black "
                          >
                            <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                              Krenimo s projektom
                            </span>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group-hover:-translate-x-42 transition-all duration-200 ease-in-out"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="16"
                                fill="#1B1D1E"
                              />
                              <path
                                d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                                stroke="white"
                                strokeWidth="1.42857"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
          
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
