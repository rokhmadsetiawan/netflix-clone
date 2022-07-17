import Image from 'next/image'
import React from 'react'
import { baseThumbnailUrl } from '../constants/movie'
import { Movie } from '../typing'

interface Props {
    // when using firebar
//   movie: Movie | DocumentData ;
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        src={`${baseThumbnailUrl}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        layout="fill"
        className='rounded-sm object-cover md:rounded'
      />
    </div>
  )
}

export default Thumbnail
