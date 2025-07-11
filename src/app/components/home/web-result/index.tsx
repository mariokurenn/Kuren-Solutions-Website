'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import FlowingMenu from '@/blocks/Components/FlowingMenu/FlowingMenu';

function WebResult() {
  const [data, setData] = useState<any>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setData(data?.WebResultTagList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])


  return (
    <section id='o-nama'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col  lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h2 className='hidden md:block max-w-6xl'>
  Iskustvom znamo što donosi stvarne rezultate — zato svako rješenje gradimo s fokusom na:
</h2>
<h2 className='block md:hidden max-w-xl text-center px-4'>
  Svaki projekt gradimo s fokusom na rezultat, koristeći:
</h2>

              <div>
                <h2>
                  {data?.map((items:any, index:any) => (
                    <span
                      key={index}
                      className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}>
                      <Image
                        src={items.image}
                        alt={items.name}
                        width={40}
                        height={40}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <span className='instrument-font italic font-normal'>
                        {items.name}
                      </span>
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className='flex-col md:flex md:flex-row justify-center items-center text-center'>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 ref={ref} className='2xl:text-9xl md:text-7xl text-5xl'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={150} duration={3} /> : '0'}
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60 text-center'>
                  Zadovoljnih klijenata
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={9} duration={3} /> : '0'}
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  Godina iskustva
                </p>
                <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
              </div>
              <div className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                  <sup>+</sup>
                  {inView ? <CountUp start={0} end={200} duration={3} /> : '0'}
                </h2>
                <p className='mt-2 text-dark_black/60 dark:text-white/60'>
                  Završenih projekata
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebResult
