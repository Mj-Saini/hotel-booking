import React from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { HotelData } from '../assets/assets'
const FeaturedDestination = () => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-14'>

        <Title title="Featured Destination" subTitle="Discover  our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."/>
        <div className='flex flex-wrap justify-center gap-6 mt-20'>
        {HotelData?.slice(0,8).map((room, index) => {
          return (
            <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%]' key={index}>
              <HotelCard key={index} room={room} index={index} />
            </div>
          )
            })}
        </div>

        <button
        onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
        className='my-16 px-4 py-2 font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>View All Destinations  </button>
    </div>
  )
}

export default FeaturedDestination