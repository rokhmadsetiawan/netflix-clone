import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Movie } from '../typing'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string): void => {
    setIsMoved(true)
    if (rowRef.current) {
      // move row based on direction
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
      setIsMoved(false)
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 md:h-auto">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2 lg:ml-0">
        <ChevronLeftIcon
          onClick={() => handleClick('left')}
          className={classNames(
            'absolute top-0 bottom-0 left-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100',
            { hidden: isMoved },
          )}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleClick('right')}
          className={classNames(
            'absolute top-0 bottom-0 right-2 z-40 m-auto w-9 h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100',
            { hidden: isMoved },
          )}
        />
      </div>
    </div>
  )
}

export default Row
