// src/app/components/CategoryCarousel.jsx
import React, { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const categories = [
  { name: 'Shampoos',   image: '/images/shampoo.webp' },
  { name: 'Face moisturiser', image: '/images/facecream.webp' },
  { name: 'Conditioners', image: '/images/conditioner.jpeg' },
  { name: 'Face wash',   image: '/images/facewash.jpeg' },
  { name: 'Combos',      image: '/images/combo.jpeg' },
  { name: 'Shower gels', image: '/images/bodywash.jpeg' },
  { name: 'Body lotions',image: '/images/bodylotion.jpeg' },
  // …add more as needed
]

export default function CategoryCarousel() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const { clientWidth } = carouselRef.current
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -clientWidth : clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative bg-pink-50 py-8 px-4">
      {/* Left / Right buttons */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-pink-100 transition"
      >
        <ChevronLeftIcon className="h-5 w-5 text-pink-600" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-pink-100 transition"
      >
        <ChevronRightIcon className="h-5 w-5 text-pink-600" />
      </button>

      {/* Carousel strip */}
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="snap-start flex-shrink-0 bg-white rounded-lg p-4 min-w-[160px] md:min-w-[200px] text-center shadow hover:shadow-md transition"
          >
            <div className="h-32 md:h-40 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="max-h-full object-contain"
              />
            </div>
            <p className="mt-2 font-medium text-gray-800">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
