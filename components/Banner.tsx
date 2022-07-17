import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typing'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 w-screen h-[95vh] -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs lg:text-2xl md:max-w-lg lg:max-w-xl text-shadow-md line-clamp-3">
        {movie?.overview}
      </p>

      <div className='flex space-x-3'>
        <button className="banner-button bg-white text-black">
          <FaPlay className='w-4 h-4 text-black md:w-7 md:h-7' />
          Play
        </button>
        <button className="banner-button bg-gray-500/20">More Info
        <InformationCircleIcon className='w-5 h-5 md:h-8 md:w-8'/>
        </button>
      </div>
    </div>
  )
}

export default Banner
